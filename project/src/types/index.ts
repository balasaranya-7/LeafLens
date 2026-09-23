export interface NavLink {
  label: string;
  href: string;
}

export interface Expert {
  id: string;
  name: string;
  specialization: string;
  location: string;
  available: boolean;
  image: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export interface DayPrediction {
  day: string;
  risk: 'low' | 'moderate' | 'high';
  percentage: number;
}

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'hi', label: 'हिन्दी', flag: 'HI' },
  { code: 'ta', label: 'தமிழ்', flag: 'TA' },
  { code: 'te', label: 'తెలుగు', flag: 'TE' },
  { code: 'mr', label: 'मराठी', flag: 'MR' },
  { code: 'bn', label: 'বাংলা', flag: 'BN' },
  { code: 'kn', label: 'ಕನ್ನಡ', flag: 'KN' },
  { code: 'gu', label: 'ગુજરાતી', flag: 'GU' },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

export const EXPERTS: Expert[] = [
  {
    id: '1',
    name: 'Dr. Anjali Deshmukh',
    specialization: 'Plant Pathology & Fungal Diseases',
    location: 'Nagpur, Maharashtra',
    available: true,
    image: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Agronomy & Crop Management',
    location: 'Ludhiana, Punjab',
    available: true,
    image: 'https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    id: '3',
    name: 'Dr. Meena Iyer',
    specialization: 'Entomology & Pest Control',
    location: 'Coimbatore, Tamil Nadu',
    available: false,
    image: 'https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
];

export const DAY_PREDICTIONS: DayPrediction[] = [
  { day: 'Day 1', risk: 'moderate', percentage: 45 },
  { day: 'Day 2', risk: 'moderate', percentage: 55 },
  { day: 'Day 3', risk: 'high', percentage: 72 },
  { day: 'Day 4', risk: 'high', percentage: 80 },
  { day: 'Day 5', risk: 'high', percentage: 85 },
];
