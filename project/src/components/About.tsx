import { Sprout, Target, Heart, Globe } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make AI-powered crop disease detection accessible to every farmer, regardless of location or technical expertise.',
  },
  {
    icon: Heart,
    title: 'Our Approach',
    description: 'We combine artificial intelligence with agricultural insights and simple digital tools for faster, smarter decisions.',
  },
  {
    icon: Globe,
    title: 'Our Vision',
    description: 'A future where no farmer loses a harvest to late disease detection — where technology protects every crop.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15">
              <img
                src="https://images.pexels.com/photos/16678079/pexels-photo-16678079.jpeg?auto=compress&cs=tinysrgb&h=700&w=900"
                alt="Farmer using smartphone to examine crop health in field"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shrink-0">
                  <Sprout className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-900">Empowering Farmers with AI</p>
                  <p className="text-xs text-primary-500">From the field to the future of farming</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200/30 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right: Content */}
          <div className="reveal">
            <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">About LeafLensAI</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-5">
              AI for Agriculture, Built for Farmers
            </h2>
            <p className="text-primary-600 text-lg leading-relaxed mb-8">
              LeafLensAI combines artificial intelligence, agricultural insights, and accessible digital tools
              to help farmers make faster and smarter crop-health decisions.
            </p>

            <div className="space-y-5">
              {VALUES.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base text-primary-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-primary-500 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
