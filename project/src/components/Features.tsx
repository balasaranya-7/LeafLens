import {
  ScanLine,
  Activity,
  FlaskConical,
  Users,
  PhoneCall,
  CloudRain,
  Languages,
  TrendingUp,
} from 'lucide-react';

const FEATURES = [
  {
    icon: ScanLine,
    title: 'AI Leaf Disease Detection',
    description: 'Upload or scan a leaf image to get instant AI-powered disease identification.',
  },
  {
    icon: Activity,
    title: 'Severity Analysis',
    description: 'Understand how serious the disease is with a clear Low, Moderate, or High indicator.',
  },
  {
    icon: FlaskConical,
    title: 'Smart Remedies',
    description: 'Receive recommended treatments and preventive measures in simple, farmer-friendly language.',
  },
  {
    icon: Users,
    title: 'Expert Connect',
    description: 'Connect with nearby agricultural experts for professional guidance on crop health.',
  },
  {
    icon: PhoneCall,
    title: '1-Minute Free Expert Call',
    description: 'Get a free 1-minute consultation with an agriculture expert — no cost, no commitment.',
  },
  {
    icon: CloudRain,
    title: 'Weather Alerts',
    description: 'Stay ahead with weather-based crop disease risk alerts tailored to your region.',
  },
  {
    icon: Languages,
    title: 'Multilingual Support',
    description: 'Access the platform in your preferred language with a simple, readable interface.',
  },
  {
    icon: TrendingUp,
    title: '5-Day Spread Prediction',
    description: 'See the predicted risk of disease spreading over the next 5 days with a clear visualization.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Capabilities</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            Everything You Need to Protect Your Crops
          </h2>
          <p className="text-primary-600 text-lg">
            From AI detection to expert guidance and weather alerts — all in one farmer-friendly platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="reveal group relative bg-white rounded-2xl p-6 border border-primary-100 shadow-sm hover:shadow-xl hover:shadow-primary-900/8 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Hover gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/50 group-hover:to-secondary-50/30 transition-all duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-primary-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-primary-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
