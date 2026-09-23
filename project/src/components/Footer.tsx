import { Sprout, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Experts', href: '#experts' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_ICONS = [Facebook, Twitter, Instagram, Linkedin];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-950 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-lg">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                LeafLens<span className="text-secondary-400">AI</span>
              </span>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed max-w-sm mb-6">
              See the Disease. Save the Crop. AI-powered crop disease detection and agricultural assistance for every farmer.
            </p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-primary-800/50 border border-primary-700/50 flex items-center justify-center text-primary-300 hover:text-white hover:bg-primary-700 hover:border-primary-600 transition-all"
                  aria-label="Social media link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-300">
                <Mail className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
                <span>support@leaflensai.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-300">
                <Phone className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
                <span>+91 80000 00000</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-primary-300">
                <MapPin className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
                <span>Agriculture Innovation Hub, Pune, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-400">
            © 2026 LeafLensAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-400 hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
