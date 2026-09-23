import { AlertTriangle, Activity, FlaskConical, ShieldCheck, ArrowDown } from 'lucide-react';

const STEPS = [
  {
    icon: AlertTriangle,
    label: 'Detected Disease',
    value: 'Early Blight (Alternaria solani)',
    color: 'from-warning-400 to-warning-500',
    bg: 'bg-warning-50',
    border: 'border-warning-200',
    text: 'text-warning-600',
  },
  {
    icon: Activity,
    label: 'Severity',
    value: 'Moderate — Spreading slowly',
    color: 'from-primary-400 to-primary-500',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    text: 'text-primary-600',
  },
  {
    icon: FlaskConical,
    label: 'Recommended Treatment',
    value: 'Apply copper-based organic fungicide every 7 days. Remove and destroy affected lower leaves to stop spore spread.',
    color: 'from-secondary-400 to-secondary-500',
    bg: 'bg-secondary-50',
    border: 'border-secondary-200',
    text: 'text-secondary-600',
  },
  {
    icon: ShieldCheck,
    label: 'Preventive Measures',
    value: 'Maintain proper plant spacing for airflow. Avoid overhead irrigation. Use disease-resistant seed varieties next season.',
    color: 'from-success-400 to-success-500',
    bg: 'bg-success-50',
    border: 'border-success-200',
    text: 'text-success-600',
  },
];

export default function SmartRemedies() {
  return (
    <section className="py-20 lg:py-28 bg-primary-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Treatment Plan</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            Smart Remedies & Preventive Care
          </h2>
          <p className="text-primary-600 text-lg">
            Clear, farmer-friendly recommendations — from diagnosis to treatment to prevention.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <div className="space-y-0">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative">
                  <div className={`flex gap-5 ${i > 0 ? 'pt-6' : ''}`}>
                    {/* Icon + connector */}
                    <div className="flex flex-col items-center">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="w-0.5 flex-1 bg-primary-200 mt-3 mb-3 min-h-[32px] flex items-center justify-center">
                          <ArrowDown className="w-4 h-4 text-primary-300 bg-primary-50/40 rounded-full" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${i < STEPS.length - 1 ? 'pb-2' : ''}`}>
                      <div className={`${step.bg} ${step.border} border rounded-2xl p-5`}>
                        <p className={`text-xs font-semibold ${step.text} uppercase tracking-wider mb-2`}>{step.label}</p>
                        <p className="text-sm text-primary-800 leading-relaxed">{step.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
