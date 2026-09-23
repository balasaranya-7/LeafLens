import { CloudRain, Thermometer, Droplets, Umbrella, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function WeatherAlert() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Weather Intelligence</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            Weather-Based Disease Alerts
          </h2>
          <p className="text-primary-600 text-lg">
            Get ahead of crop risks with weather-driven disease forecasts for your region.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-gradient-to-br from-primary-700 to-secondary-800 rounded-3xl shadow-2xl shadow-primary-900/20 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Alert message */}
              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-error-500/20 border border-error-400/30 text-error-100 text-xs font-semibold mb-5">
                  <ShieldAlert className="w-4 h-4" />
                  Disease Risk Alert
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  High Humidity & Rainfall Warning
                </h3>
                <p className="text-primary-100 text-sm leading-relaxed mb-6">
                  High humidity and rainfall may increase the risk of disease spread. Take preventive
                  measures now to protect your crops.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-300 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-primary-200 font-medium mb-1">Recommended Preventive Action</p>
                      <p className="text-sm text-white">Apply preventive fungicide spray and ensure proper field drainage to reduce moisture buildup.</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-primary-300 mt-4 italic">Sample demo data — not real-time weather information.</p>
              </div>

              {/* Right: Weather stats */}
              <div className="bg-primary-950/30 p-8 lg:p-10 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Thermometer className="w-6 h-6 text-warning-300 mb-3" />
                  <p className="text-xs text-primary-200 font-medium mb-1">Temperature</p>
                  <p className="text-2xl font-bold text-white">28°C</p>
                  <p className="text-xs text-primary-300 mt-1">Warm & humid</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Droplets className="w-6 h-6 text-secondary-300 mb-3" />
                  <p className="text-xs text-primary-200 font-medium mb-1">Humidity</p>
                  <p className="text-2xl font-bold text-white">82%</p>
                  <p className="text-xs text-primary-300 mt-1">Very high</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Umbrella className="w-6 h-6 text-primary-200 mb-3" />
                  <p className="text-xs text-primary-200 font-medium mb-1">Rain Probability</p>
                  <p className="text-2xl font-bold text-white">70%</p>
                  <p className="text-xs text-primary-300 mt-1">Likely today</p>
                </div>
                <div className="bg-error-500/20 backdrop-blur-sm rounded-2xl p-5 border border-error-400/30">
                  <CloudRain className="w-6 h-6 text-error-200 mb-3" />
                  <p className="text-xs text-error-100 font-medium mb-1">Disease Risk</p>
                  <p className="text-2xl font-bold text-white">High</p>
                  <p className="text-xs text-error-200 mt-1">Act now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
