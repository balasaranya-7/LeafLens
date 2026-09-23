import { Eye, TrendingUp, DollarSign, Users, CloudRain, Accessibility } from 'lucide-react';

const BENEFITS = [
  {
    icon: Eye,
    title: 'Early Disease Detection',
    description: 'Helps identify crop diseases at the initial stage and prevent major crop loss.',
  },
  {
    icon: TrendingUp,
    title: 'Higher Yield & Quality',
    description: 'Timely action supports healthier crops and better productivity.',
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Reduces unnecessary pesticide use and lowers cultivation costs.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Connects farmers with experts and provides agricultural advice.',
  },
  {
    icon: CloudRain,
    title: 'Weather-Based Alerts',
    description: 'Helps farmers prepare in advance and protect crops from potential risks.',
  },
  {
    icon: Accessibility,
    title: 'Easy Access for All',
    description: 'A simple, multilingual platform that makes advanced technology accessible to farmers.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-primary-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            Why LeafLensAI?
          </h2>
          <p className="text-primary-600 text-lg">
            Built for farmers — practical, accessible, and designed to make a real difference in crop health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="reveal group flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-primary-100 hover:shadow-lg hover:shadow-primary-900/6 hover:border-primary-200 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center shrink-0 group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-primary-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-sm text-primary-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
