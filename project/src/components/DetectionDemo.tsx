import { useRef, useState } from 'react';
import { UploadCloud, ScanLine, Loader2, Leaf, AlertTriangle, Activity, CheckCircle2, X } from 'lucide-react';

type AnalysisState = 'idle' | 'analyzing' | 'result';

interface AnalysisResult {
  disease: string;
  confidence: number;
  severity: 'Low' | 'Moderate' | 'High';
  action: string;
}

const SAMPLE_RESULT: AnalysisResult = {
  disease: 'Early Blight (Alternaria solani)',
  confidence: 94,
  severity: 'Moderate',
  action: 'Apply copper-based fungicide and remove affected leaves to prevent further spread.',
};

interface DetectionDemoProps {
  onScanClick?: () => void;
}

export default function DetectionDemo({ onScanClick }: DetectionDemoProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<AnalysisState>('idle');
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setState('idle');
    setResult(null);
  };

  const analyze = () => {
    setState('analyzing');
    setTimeout(() => {
      setResult(SAMPLE_RESULT);
      setState('result');
    }, 2200);
  };

  const reset = () => {
    setPreview(null);
    setResult(null);
    setState('idle');
    if (inputRef.current) inputRef.current.value = '';
  };

  const severityColor = {
    Low: 'text-success-600 bg-success-50 border-success-200',
    Moderate: 'text-warning-600 bg-warning-50 border-warning-200',
    High: 'text-error-600 bg-error-50 border-error-200',
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Live Demo</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            AI Disease Detection Demo
          </h2>
          <p className="text-primary-600 text-lg">
            Try the detection interface below. Upload a leaf image to see how LeafLensAI analyzes and reports results.
          </p>
          <p className="text-xs text-primary-400 mt-2 italic">Sample demo data — not a real AI model.</p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-white rounded-3xl shadow-xl shadow-primary-900/8 border border-primary-100 overflow-hidden">
            {/* Dashboard header */}
            <div className="flex items-center justify-between px-6 py-4 bg-primary-50/60 border-b border-primary-100">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error-300" />
                  <div className="w-3 h-3 rounded-full bg-warning-300" />
                  <div className="w-3 h-3 rounded-full bg-success-300" />
                </div>
                <span className="ml-3 text-sm font-medium text-primary-600">LeafLensAI Detection Console</span>
              </div>
              <span className="text-xs text-primary-400 font-mono">v1.0 · Demo Mode</span>
            </div>

            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Upload area */}
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-3">Leaf Image</label>
                  {!preview ? (
                    <div
                      onClick={() => inputRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragging(false);
                        const file = e.dataTransfer.files[0];
                        if (file) handleFile(file);
                      }}
                      className={`relative cursor-pointer border-2 border-dashed rounded-2xl aspect-[4/3] flex flex-col items-center justify-center text-center p-6 transition-all ${
                        dragging
                          ? 'border-secondary-400 bg-secondary-50 scale-[1.02]'
                          : 'border-primary-200 bg-primary-50/30 hover:border-primary-300 hover:bg-primary-50/50'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
                        <UploadCloud className="w-7 h-7 text-primary-500" />
                      </div>
                      <p className="text-sm font-medium text-primary-700">Drag & drop leaf image here</p>
                      <p className="text-xs text-primary-400 mt-1">or click to browse</p>
                      <p className="text-xs text-primary-300 mt-3">Supports JPG, PNG · Max 10MB</p>
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-primary-100">
                      <img src={preview} alt="Uploaded leaf" className="w-full h-full object-cover" />
                      {state === 'analyzing' && (
                        <>
                          <div className="absolute inset-0 bg-primary-950/30" />
                          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-400 to-transparent shadow-[0_0_20px_4px_rgba(16,172,126,0.6)] animate-scan-line" />
                        </>
                      )}
                      <button
                        onClick={reset}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                        aria-label="Remove image"
                      >
                        <X className="w-4 h-4 text-primary-700" />
                      </button>
                    </div>
                  )}
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFile(file);
                    }}
                  />

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => inputRef.current?.click()}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-primary-700 bg-primary-50 border border-primary-200 rounded-xl hover:bg-primary-100 transition-all"
                    >
                      <UploadCloud className="w-4 h-4" />
                      Upload Leaf Image
                    </button>
                    <button
                      onClick={analyze}
                      disabled={!preview || state === 'analyzing'}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {state === 'analyzing' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <ScanLine className="w-4 h-4" />
                          Analyze with AI
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Result panel */}
                <div className="bg-primary-50/40 rounded-2xl p-6 border border-primary-100">
                  <h3 className="text-sm font-medium text-primary-700 mb-4">Detection Results</h3>

                  {state === 'idle' && !result && (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
                        <Leaf className="w-7 h-7 text-primary-300" />
                      </div>
                      <p className="text-sm text-primary-400 max-w-[200px]">
                        Upload a leaf image and click "Analyze with AI" to see detection results.
                      </p>
                    </div>
                  )}

                  {state === 'analyzing' && (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                      <Loader2 className="w-10 h-10 text-secondary-500 animate-spin mb-4" />
                      <p className="text-sm font-medium text-primary-600">Running AI analysis...</p>
                      <p className="text-xs text-primary-400 mt-1">Identifying disease patterns</p>
                    </div>
                  )}

                  {state === 'result' && result && (
                    <div className="space-y-4 animate-fade-in-up">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-5 h-5 text-warning-500" />
                        </div>
                        <div>
                          <p className="text-xs text-primary-400 font-medium">Detected Disease</p>
                          <p className="text-sm font-semibold text-primary-900">{result.disease}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl p-3 border border-primary-100">
                          <p className="text-xs text-primary-400 font-medium mb-1">Confidence</p>
                          <p className="text-2xl font-bold text-primary-800">{result.confidence}%</p>
                          <div className="mt-2 h-1.5 bg-primary-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" style={{ width: `${result.confidence}%` }} />
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 border border-primary-100">
                          <p className="text-xs text-primary-400 font-medium mb-1">Severity</p>
                          <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-sm font-semibold border ${severityColor[result.severity]}`}>
                            <Activity className="w-3.5 h-3.5" />
                            {result.severity}
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 border border-primary-100">
                        <p className="text-xs text-primary-400 font-medium mb-1.5">Recommended Action</p>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-primary-700">{result.action}</p>
                        </div>
                      </div>

                      {onScanClick && (
                        <button
                          onClick={onScanClick}
                          className="w-full text-xs text-primary-500 hover:text-primary-700 transition-colors"
                        >
                          Save to scan history (requires sign in)
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
