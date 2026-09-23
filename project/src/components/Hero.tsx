import { ScanLine, ArrowRight, Sparkles, ShieldCheck, Leaf } from 'lucide-react';

interface HeroProps {
  onScanClick: () => void;
}

export default function Hero({ onScanClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden leaf-bg">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="reveal is-visible">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-secondary-500" />
              AI-Powered Crop Disease Detection
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary-900 leading-[1.1] tracking-tight">
              See the Disease.
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Save the Crop.
              </span>
            </h1>

            <p className="mt-6 text-lg text-primary-600 leading-relaxed max-w-xl">
              AI-powered crop disease detection that helps farmers identify problems early,
              understand disease severity, and take timely action.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onScanClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <ScanLine className="w-5 h-5" />
                Scan Your Leaf
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-primary-700 bg-white border border-primary-200 rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
              >
                Explore How It Works
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-primary-500">
              <ShieldCheck className="w-5 h-5 text-secondary-500 shrink-0" />
              <span className="font-medium">Smart Insights. Timely Action. Stronger Crops. Better Tomorrow.</span>
            </div>
          </div>

          {/* Right: AI scan visual */}
          <div className="relative reveal is-visible" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-300/20 to-secondary-400/20 blur-2xl animate-pulse-slow" />

              {/* Scanning frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20 border-2 border-primary-200/50">
                <img
                  src="https://images.pexels.com/photos/1240961/pexels-photo-1240961.jpeg?auto=compress&cs=tinysrgb&h=800&w=800"
                  alt="Healthy green leaf being analyzed by AI"
                  className="w-full h-full object-cover"
                />

                {/* Scan overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />

                {/* Scanning line */}
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary-400 to-transparent shadow-[0_0_20px_4px_rgba(16,172,126,0.5)] animate-scan-line" />

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-secondary-400 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-secondary-400 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-secondary-400 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-secondary-400 rounded-br-lg" />

                {/* Analysis result badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-success-100 flex items-center justify-center shrink-0">
                      <Leaf className="w-5 h-5 text-success-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-primary-400 font-medium">AI Analysis Result</p>
                      <p className="text-sm font-semibold text-primary-800">Healthy Leaf Detected</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-success-600">98%</p>
                      <p className="text-xs text-primary-400">Confidence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating data points */}
              <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
                  <span className="text-xs font-medium text-primary-700">Scanning...</span>
                </div>
              </div>
              <div className="absolute top-1/3 -left-6 bg-white rounded-xl shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary-500" />
                  <span className="text-xs font-medium text-primary-700">AI Model Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
