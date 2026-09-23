import { MapPin, Video, PhoneCall, BadgeCheck, Clock } from 'lucide-react';
import { EXPERTS } from '@/types';

export default function ExpertConnect() {
  return (
    <section id="experts" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Expert Network</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            Connect with Agriculture Experts
          </h2>
          <p className="text-primary-600 text-lg">
            Get professional guidance from verified agricultural specialists near you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTS.map((expert, i) => (
            <div
              key={expert.id}
              className="reveal group bg-white rounded-2xl shadow-sm border border-primary-100 overflow-hidden hover:shadow-xl hover:shadow-primary-900/8 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Profile image */}
              <div className="relative h-44 overflow-hidden bg-primary-100">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  {expert.available ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-success-500/90 backdrop-blur-sm text-white text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-900/70 backdrop-blur-sm text-white text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      Offline
                    </span>
                  )}
                </div>
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-semibold">
                    <BadgeCheck className="w-3.5 h-3.5 text-secondary-500" />
                    Verified
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-primary-900">{expert.name}</h3>
                <p className="text-sm text-secondary-600 font-medium mt-0.5">{expert.specialization}</p>
                <div className="flex items-center gap-1.5 mt-2 text-sm text-primary-400">
                  <MapPin className="w-4 h-4" />
                  {expert.location}
                </div>

                <div className="flex gap-2 mt-5">
                  <button
                    disabled={!expert.available}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <Video className="w-4 h-4" />
                    Connect
                  </button>
                  <button
                    disabled={!expert.available}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-semibold text-primary-700 bg-primary-50 border border-primary-200 rounded-xl hover:bg-primary-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <PhoneCall className="w-4 h-4" />
                    1-Min Free Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free call CTA banner */}
        <div className="mt-12 reveal">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-primary-500/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <PhoneCall className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">Talk to an Expert</h3>
                <p className="text-primary-100 text-sm">Get a free 1-minute consultation with an agriculture expert.</p>
              </div>
            </div>
            <button className="px-6 py-3 text-sm font-semibold text-primary-700 bg-white rounded-xl shadow-lg hover:bg-primary-50 hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
