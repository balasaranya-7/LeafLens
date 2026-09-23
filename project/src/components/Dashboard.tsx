import { AlertTriangle, Activity, Gauge, CheckCircle2, TrendingUp } from 'lucide-react';
import { DAY_PREDICTIONS } from '@/types';

const riskColor = {
  low: { text: 'text-success-600', bg: 'bg-success-500', light: 'bg-success-50', border: 'border-success-200', label: 'Low Risk' },
  moderate: { text: 'text-warning-600', bg: 'bg-warning-500', light: 'bg-warning-50', border: 'border-warning-200', label: 'Moderate Risk' },
  high: { text: 'text-error-600', bg: 'bg-error-500', light: 'bg-error-50', border: 'border-error-200', label: 'High Risk' },
};

export default function Dashboard() {
  return (
    <section className="py-20 lg:py-28 bg-primary-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">Analysis Dashboard</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            Disease Analysis Dashboard
          </h2>
          <p className="text-primary-600 text-lg">
            A clear, professional view of detected disease, severity, risk, and recommended action.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 reveal">
          {/* Main dashboard card */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl shadow-primary-900/8 border border-primary-100 overflow-hidden">
            <div className="px-6 py-5 bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold text-lg">Disease Analysis Report</h3>
                  <p className="text-primary-100 text-xs">Sample report — demo data</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium">Moderate</span>
            </div>

            <div className="p-6 lg:p-8 space-y-5">
              {/* Detected disease */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50/60 border border-primary-100">
                <div className="w-12 h-12 rounded-xl bg-warning-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-warning-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary-400 font-medium">Detected Disease</p>
                  <p className="text-base font-semibold text-primary-900">Leaf Disease Detected</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-warning-50 border border-warning-200 text-center">
                  <Activity className="w-5 h-5 text-warning-500 mx-auto mb-2" />
                  <p className="text-xs text-primary-400 font-medium mb-1">Severity</p>
                  <p className="text-lg font-bold text-warning-600">Moderate</p>
                </div>
                <div className="p-4 rounded-xl bg-error-50 border border-error-200 text-center">
                  <Gauge className="w-5 h-5 text-error-500 mx-auto mb-2" />
                  <p className="text-xs text-primary-400 font-medium mb-1">Risk Level</p>
                  <p className="text-lg font-bold text-error-600">Medium</p>
                </div>
                <div className="p-4 rounded-xl bg-success-50 border border-success-200 text-center">
                  <TrendingUp className="w-5 h-5 text-success-500 mx-auto mb-2" />
                  <p className="text-xs text-primary-400 font-medium mb-1">Confidence</p>
                  <p className="text-lg font-bold text-success-600">94%</p>
                </div>
              </div>

              {/* Recommended action */}
              <div className="p-4 rounded-xl bg-primary-50/60 border border-primary-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-primary-400 font-medium mb-1">Recommended Action</p>
                    <p className="text-sm text-primary-700">Take preventive treatment and monitor affected leaves.</p>
                  </div>
                </div>
              </div>

              {/* Risk visualization bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-primary-400 font-medium">Disease Risk Visualization</p>
                  <span className="text-xs text-warning-600 font-semibold">Medium Risk</span>
                </div>
                <div className="flex h-3 rounded-full overflow-hidden bg-primary-100">
                  <div className="h-full bg-success-500" style={{ width: '25%' }} />
                  <div className="h-full bg-warning-500" style={{ width: '50%' }} />
                  <div className="h-full bg-error-500" style={{ width: '25%' }} />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-xs text-success-500">Low</span>
                  <span className="text-xs text-warning-500">Moderate</span>
                  <span className="text-xs text-error-500">High</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Day Spread Prediction */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-primary-900/8 border border-primary-100 overflow-hidden">
            <div className="px-6 py-5 bg-primary-50/60 border-b border-primary-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-primary-900">5-Day Spread Prediction</h3>
                  <p className="text-xs text-primary-400">Sample forecast — demo data</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-end justify-between gap-3 h-48">
                {DAY_PREDICTIONS.map((pred, i) => {
                  const c = riskColor[pred.risk];
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className={`text-xs font-bold ${c.text}`}>{pred.percentage}%</span>
                      <div className="w-full flex items-end h-32">
                        <div
                          className={`w-full rounded-t-lg ${c.bg} transition-all duration-500 hover:opacity-80`}
                          style={{ height: `${pred.percentage}%`, animationDelay: `${i * 100}ms` }}
                        />
                      </div>
                      <span className="text-xs text-primary-500 font-medium">{pred.day}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${c.light} ${c.text} border ${c.border}`}>
                        {pred.risk === 'low' ? 'Low' : pred.risk === 'moderate' ? 'Mod' : 'High'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-primary-100 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-success-500" />
                  <span className="text-xs text-primary-600">Low Risk — Monitor regularly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-warning-500" />
                  <span className="text-xs text-primary-600">Moderate Risk — Apply preventive treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error-500" />
                  <span className="text-xs text-primary-600">High Risk — Take immediate action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
