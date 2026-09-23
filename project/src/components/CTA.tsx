import { ScanLine, PhoneCall, Sprout } from 'lucide-react';

interface CTAProps {
  onScanClick: () => void;
  onExpertClick: () => void;
}

export default function CTA({ onScanClick, onExpertClick }: CTAProps) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />

      {/* Floating leaves decoration */}
      <Sprout className="absolute top-10 left-10 w-16 h-16 text-white/5 -rotate-12" />
      <Sprout className="absolute bottom-10 right-10 w-20 h-20 text-white/5 rotate-12" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary-200 text-sm font-medium mb-6">
          <Sprout className="w-4 h-4" />
          Early Detection Saves Harvests
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
          Your Crop Deserves an Early Warning.
        </h2>
        <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-10">
          Scan a leaf, understand the risk, and take action before the disease spreads.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onScanClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl shadow-xl hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-200"
          >
            <ScanLine className="w-5 h-5" />
            Scan Your Leaf
          </button>
          <button
            onClick={onExpertClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
          >
            <PhoneCall className="w-5 h-5" />
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
