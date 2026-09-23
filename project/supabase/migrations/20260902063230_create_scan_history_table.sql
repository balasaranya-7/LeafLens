/*
# Create scan_history table for LeafLensAI

1. New Tables
- `scan_history`
  - `id` (uuid, primary key)
  - `user_id` (uuid, not null, defaults to authenticated user, references auth.users)
  - `disease_name` (text, not null) — detected disease name
  - `confidence` (integer, 0–100) — AI confidence percentage
  - `severity` (text, one of: low, moderate, high) — disease severity
  - `image_url` (text, nullable) — uploaded leaf image URL if stored
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `scan_history`.
- Owner-scoped CRUD: each authenticated user can only access their own scan records.
- Four separate policies (SELECT, INSERT, UPDATE, DELETE) scoped to `auth.uid() = user_id`.
*/

CREATE TABLE IF NOT EXISTS scan_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  disease_name text NOT NULL,
  confidence integer NOT NULL DEFAULT 0,
  severity text NOT NULL DEFAULT 'moderate' CHECK (severity IN ('low', 'moderate', 'high')),
  image_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE scan_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_scans" ON scan_history;
CREATE POLICY "select_own_scans" ON scan_history FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_scans" ON scan_history;
CREATE POLICY "insert_own_scans" ON scan_history FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_scans" ON scan_history;
CREATE POLICY "update_own_scans" ON scan_history FOR UPDATE
  TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_scans" ON scan_history;
CREATE POLICY "delete_own_scans" ON scan_history FOR DELETE
  TO authenticated USING (auth.uid() = user_id);
