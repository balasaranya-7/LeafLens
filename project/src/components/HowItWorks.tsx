import { Camera, BrainCircuit, ClipboardCheck, ShieldCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    icon: Camera,
    step: '01',
    title: 'Scan Leaf',
    description: 'User uploads or scans a crop leaf using their phone or camera.',
  },
  {
    icon: BrainCircuit,
    step: '02',
    title: 'AI Analysis',
    description: 'LeafLensAI analyzes the image and identifies possible disease within seconds.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Get Solution',
    description: 'Receive severity analysis, recommended remedies, and preventive measures.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Protect Your Crop',
    description: 'Take timely action based on expert-backed recommendations and protect crop health.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Simple Process</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            How LeafLensAI Works
          </h2>
          <p className="text-primary-600 text-lg">
            From scan to solution in four simple steps — designed for farmers, powered by AI.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-secondary-300 to-primary-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="reveal relative text-center group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Icon circle */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-100 group-hover:border-secondary-400 group-hover:shadow-lg group-hover:shadow-secondary-500/20 transition-all duration-300 mb-5">
                    <Icon className="w-9 h-9 text-primary-600 group-hover:text-secondary-600 transition-colors" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-primary-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-primary-500 leading-relaxed max-w-[220px] mx-auto">{step.description}</p>

                  {/* Arrow between steps (mobile) */}
                  {i < STEPS.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <ArrowRight className="w-5 h-5 text-primary-300 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
