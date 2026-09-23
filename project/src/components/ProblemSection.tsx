import { Clock, TrendingDown, DollarSign, UserX } from 'lucide-react';

const PROBLEMS = [
  {
    icon: Clock,
    title: 'Late Disease Detection',
    description: 'Farmers often spot crop diseases only after visible damage has already spread across the field.',
  },
  {
    icon: TrendingDown,
    title: 'Reduced Crop Yield & Quality',
    description: 'Delayed treatment leads to lower harvest quantity and poorer crop quality, directly affecting income.',
  },
  {
    icon: DollarSign,
    title: 'Unnecessary Pesticide Costs',
    description: 'Without precise diagnosis, farmers apply wrong or excessive pesticides — wasting money and harming soil.',
  },
  {
    icon: UserX,
    title: 'Limited Access to Experts',
    description: 'Agricultural experts are not always reachable, leaving farmers without timely professional guidance.',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-wider mb-3">The Challenge</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 mb-4">
            Farmers Need Timely Answers.
          </h2>
          <p className="text-primary-600 text-lg">
            Crop diseases don't wait. Every day without the right diagnosis costs yield, money, and peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div
                key={i}
                className="reveal group bg-white rounded-2xl p-6 shadow-sm border border-primary-100 hover:shadow-xl hover:shadow-primary-900/8 hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-error-50 flex items-center justify-center mb-5 group-hover:bg-error-100 transition-colors">
                  <Icon className="w-6 h-6 text-error-500" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-primary-500 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
