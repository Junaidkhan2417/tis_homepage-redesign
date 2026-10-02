export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface GurukulPillar {
  id: string;
  sanskrit: string;
  english: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface AcademicStage {
  id: string;
  grades: string;
  title: string;
  ageGroup: string;
  overview: string;
  curriculum: string;
  features: string[];
  subjects: string[];
}

export interface SportItem {
  id: string;
  name: string;
  category: 'precision' | 'equestrian' | 'aquatic' | 'court' | 'combat' | 'field';
  description: string;
  facility: string;
  image: string;
  badge?: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'academic' | 'sports' | 'residential' | 'culture';
  description: string;
  image: string;
  specs: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  childGrade: string;
  location: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admissions' | 'boarding' | 'academics' | 'sports';
}

export const TIS_META = {
  name: "Tula's International School",
  shortName: "TIS",
  tagline: "The Modern Gurukul of India",
  est: "2012",
  board: "CBSE Affiliated & Cambridge International Standards",
  affiliationNo: "3530379",
  trust: "Rishabh Educational Trust",
  address: "Dhoolkot, P.O. – Selaqui, Chakrata Road, Dehradun - 248011, Uttarakhand, India",
  helpline: "+91-9837983791",
  landlines: ["0135-2699444", "0135-2699666"],
  email: "info@tis.edu.in",
  admissionsEmail: "admissions@tis.edu.in",
  portalUrl: "https://admission.tis.edu.in",
  mapsUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  coordinates: "30.3430° N, 77.8892° E"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About Gurukul", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "16+ Sports", href: "#sports", badge: "Olympic" },
  { label: "Boarding Life", href: "#boarding" },
  { label: "Campus Tour", href: "#campus" },
  { label: "Admissions", href: "#admissions", badge: "2025-26" },
  { label: "FAQs", href: "#faqs" },
];

export const SCHOOL_STATS: Statistic[] = [
  {
    value: 22,
    suffix: "+",
    label: "Acres Campus",
    description: "Serene mountain campus at the foothills of the Himalayas"
  },
  {
    value: 8,
    suffix: ":1",
    label: "Guru-Shishya Ratio",
    description: "Intimate student-teacher mentorship for individualized attention"
  },
  {
    value: 100,
    suffix: "%",
    label: "University Acceptance",
    description: "Graduates accepted into premier Indian and Ivy/Russell universities"
  },
  {
    value: 16,
    suffix: "+",
    label: "Olympic Sports",
    description: "Professional coaching from archery and polo to Olympic swimming"
  },
  {
    value: 12,
    suffix: "+",
    label: "Years of Heritage",
    description: "Transformative holistic residential education since 2012"
  },
  {
    value: 15,
    suffix: "+",
    label: "States & Nations",
    description: "A multicultural, vibrant student cohort living in harmony"
  }
];

export const GURUKUL_PILLARS: GurukulPillar[] = [
  {
    id: "mind",
    sanskrit: "Manas (मनस्)",
    english: "Intellectual Curiosity & Rigor",
    tagline: "Cultivating sharp, analytical, and ethical young thinkers",
    description: "In the spirit of ancient scholars, we equip learners with inquisitive minds. Our CBSE curriculum is enriched with AI labs, robotics, Cambridge analytical frameworks, and Vedic mental arithmetic.",
    iconName: "Brain",
    highlights: [
      "STEM & Artificial Intelligence Labs",
      "Model United Nations & Global Debates",
      "Vedic Mathematics & Computational Logic",
      "100% Board Distinction Track Record"
    ]
  },
  {
    id: "body",
    sanskrit: "Sharira (शरीर)",
    english: "Physical Resilience & Vitality",
    tagline: "Sports are not an afterthought — they are our foundation",
    description: "A healthy mind requires a sound body. TIS integrates daily compulsory sports, endurance training, yogic asanas, and pure organic nutrition harvested from local valley farms.",
    iconName: "Flame",
    highlights: [
      "16+ Professional Sports Arenas",
      "All-Weather Olympic Swimming Pool",
      "Equestrian & Polo Riding Club",
      "Doctor-Monitored Nutritional Dining"
    ]
  },
  {
    id: "soul",
    sanskrit: "Atman (आत्मन्)",
    english: "Pastoral Care & Moral Character",
    tagline: "Nurturing values, compassion, and grounded cultural roots",
    description: "True education builds human character. Through daily meditation, mindfulness sessions, social service in Garhwal villages, and compassionate housemaster care, students develop profound empathy.",
    iconName: "Sparkles",
    highlights: [
      "Morning Dhyana & Yogic Breathing",
      "24/7 Residential Pastoral Support",
      "Himalayan Environmental Stewardship",
      "Ethical Leadership & Community Service"
    ]
  }
];

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    id: "middle",
    grades: "Classes IV to VIII",
    title: "Middle School Foundation",
    ageGroup: "Ages 9 – 13",
    overview: "Formative exploration focusing on conceptual mastery, bilingual eloquence, exploratory science, and cultivating independent boarding habits.",
    curriculum: "CBSE Experiential Core & Foundation STEM",
    features: [
      "Interdisciplinary learning with hands-on maker spaces",
      "Early introduction to robotics, coding & foreign languages",
      "Structured evening prep with dedicated faculty tutors",
      "Art, classical music, pottery, and drama modules"
    ],
    subjects: ["English", "Mathematics", "Integrated Science", "Social Studies", "Hindi/Sanskrit", "Computer Science", "Visual Arts"]
  },
  {
    id: "secondary",
    grades: "Classes IX & X",
    title: "Secondary School Rigor",
    ageGroup: "Ages 14 – 15",
    overview: "Preparing disciplined minds for board examinations while deepening critical analysis, leadership responsibilities, and scholastic depth.",
    curriculum: "CBSE Board Secondary Certification",
    features: [
      "Intensive diagnostic testing and individualized remedial sessions",
      "Cambridge English assessments for global spoken fluency",
      "Scientific project symposia and national Olympiad mentoring",
      "Career aptitude profiling and stream counseling"
    ],
    subjects: ["Advanced English", "Mathematics", "Physics, Chemistry, Biology", "History & Civics, Geography", "Information Technology", "Elective Language"]
  },
  {
    id: "senior",
    grades: "Classes XI & XII",
    title: "Senior Secondary Mastery",
    ageGroup: "Ages 16 – 18",
    overview: "Specialized academic streams with concurrent preparation for premier university admissions across India and worldwide.",
    curriculum: "CBSE All India Senior School Certificate (AISSCE)",
    features: [
      "Flexible streams: Science (PCM/PCB), Commerce & Humanities",
      "In-house preparation for JEE, NEET, CUET, CLAT & SAT",
      "Dedicated Global University Placement Office",
      "Senior prefectorial council & alumni mentorship network"
    ],
    subjects: ["Physics/Accounts/Pol Science", "Chemistry/Business Studies/History", "Maths/Applied Maths/Psychology", "Biology/Economics/Sociology", "Computer Science/Physical Ed"]
  }
];

export const SPORTS_LIST: SportItem[] = [
  {
    id: "archery",
    name: "Archery",
    category: "precision",
    description: "Olympic-standard 50m outdoor range with recurve and compound bow coaching.",
    facility: "National Range Target Complex",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=800&q=80",
    badge: "State Champions"
  },
  {
    id: "horse-riding",
    name: "Horse Riding & Polo",
    category: "equestrian",
    description: "Dedicated equestrian stables with purebred horses, dressage, and show jumping.",
    facility: "TIS Equestrian Arena",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5f?auto=format&fit=crop&w=800&q=80",
    badge: "Premier Club"
  },
  {
    id: "swimming",
    name: "All-Weather Swimming",
    category: "aquatic",
    description: "Heated, semi-Olympic 25m swimming pool with certified FINA lifesavers.",
    facility: "Aquatics Pavilion",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    badge: "Temperature Controlled"
  },
  {
    id: "shooting",
    name: "10m Shooting Range",
    category: "precision",
    description: "Electronic SIUS targets for air rifle and air pistol national training.",
    facility: "Indoor Air Weapon Range",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    badge: "National Level"
  },
  {
    id: "karate",
    name: "Karate & Taekwondo",
    category: "combat",
    description: "Black-belt certified master training instilling self-defense and mental focus.",
    facility: "Martial Arts Dojo",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    badge: "Self-Discipline"
  },
  {
    id: "tennis",
    name: "Lawn Tennis",
    category: "court",
    description: "Three synthetic floodlit Decoturf tennis courts meeting ITF specifications.",
    facility: "Grand Slam Tennis Courts",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "squash",
    name: "Squash Courts",
    category: "court",
    description: "Glass-backed ASB hardwood squash courts for high-speed agility and endurance.",
    facility: "Indoor Racquet Center",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "basketball",
    name: "Basketball",
    category: "court",
    description: "Indoor wooden court and outdoor polyurethane floodlit championship courts.",
    facility: "TIS Sports Dome",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "football",
    name: "Football & Rugby",
    category: "field",
    description: "Natural lush green FIFA-dimension field framed by Doon Valley hills.",
    facility: "Championship Turf",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cricket",
    name: "Cricket Academy",
    category: "field",
    description: "Main oval with turf pitches, automated bowling machines, and net enclosures.",
    facility: "Lord's Cricket Grounds",
    image: "https://images.unsplash.com/photo-1531415074868-83633dd5e45c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "yoga",
    name: "Yoga & Mindfulness",
    category: "combat",
    description: "Open-air pavilion for sunrise pranayama, yogic kriyas, and stress relief.",
    facility: "Shanti Yoga Shala",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    badge: "Gurukul Core"
  },
  {
    id: "badminton",
    name: "Badminton",
    category: "court",
    description: "Four wooden sprung indoor courts with non-glare LED illumination.",
    facility: "Indoor Sports Complex",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
  }
];

export const CAMPUS_FACILITIES: Facility[] = [
  {
    id: "academic-complex",
    title: "Vedic & Modern Academic Complex",
    category: "academic",
    description: "Ergonomically designed classrooms equipped with digital interactive panels, high-speed Wi-Fi, and natural Himalayan mountain light.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80",
    specs: "Air-conditioned | Digital Smartboards | Natural Airflow"
  },
  {
    id: "stem-labs",
    title: "AI & Experiential Robotics Labs",
    category: "academic",
    description: "Cutting-edge physics, chemistry, biology, IoT, and 3D printing labs enabling students to build real-world working models.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
    specs: "High-spec Workstations | 3D Printers | SIEMENS Curriculum"
  },
  {
    id: "residential-houses",
    title: "Co-Ed Residential Hostels",
    category: "residential",
    description: "Distinct, secure boarding houses for boys and girls with climate control, en-suite study zones, cozy common lounges, and pastoral resident housemasters.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
    specs: "4-Bed Sharing | 24/7 Hot Water | Housemaster Assisted"
  },
  {
    id: "annapurna-dining",
    title: "Annapurna Organic Dining Hall",
    category: "residential",
    description: "Spacious central mess serving four wholesome, hot meals a day supervised by qualified dietitians. Pure vegetarian and healthy protein kitchens.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    specs: "4 Hot Meals Daily | Farm-Fresh Produce | HACCP Certified"
  },
  {
    id: "sports-infrastructure",
    title: "22-Acre Sports Arena & Turf",
    category: "sports",
    description: "Comprehensive multi-sport grounds featuring synthetic tennis courts, squash courts, cricket oval, football field, and shooting range.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    specs: "16+ Sports | Professional Coaches | Floodlit Arenas"
  },
  {
    id: "amphitheatre",
    title: "Kala Kendra Amphitheatre & Arts",
    category: "culture",
    description: "Open-air scenic Roman-style amphitheatre and soundproof studios for Hindustani music, Western orchestra, Kathak, pottery, and dramatics.",
    image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1000&q=80",
    specs: "800+ Seating Capacity | Acoustic Treated | Mountain View"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. TIS helped our son transform from a shy student into an articulate national debater and equestrian rider.",
    author: "Dr. Vikramaditya Sharma & Dr. Priya Sharma",
    role: "Parents of Samar (Class XI - Science)",
    childGrade: "Class XI",
    location: "New Delhi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "test-2",
    quote: "We feel supported in what we do and nudged further to do more. The pastoral care at TIS is incomparable. As an NRI parent living in Dubai, knowing that the Housemaster treats my daughter with genuine parental affection gives us complete peace of mind.",
    author: "Rajesh & Ananya Singhania",
    role: "Parents of Rhea (Class IX)",
    childGrade: "Class IX",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "test-3",
    quote: "The Modern Gurukul philosophy isn't just a marketing slogan; you feel it the moment you step onto the Dehradun campus. Morning yoga, rigorous CBSE science, evening archery, and no toxic screen addiction — it is the ideal education.",
    author: "Meenakshi Kulkarni",
    role: "Parent of Arjun (Class VII)",
    childGrade: "Class VII",
    location: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "test-4",
    quote: "TIS gave me wings. Balancing competitive JEE coaching with my passion for squash would have been impossible anywhere else. Today I am studying Computer Science at BITS Pilani, and my Gurus from Tula's are still my guides.",
    author: "Kabir Mehra",
    role: "Alumnus (Batch of 2023) - BITS Pilani",
    childGrade: "Alumnus",
    location: "Bengaluru",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Inquire & Register",
    subtitle: "Digital or On-Campus Application",
    description: "Fill the quick digital inquiry form or visit our admission office to obtain the comprehensive prospectus and registration kit."
  },
  {
    step: "02",
    title: "TIS Aptitude Interaction",
    subtitle: "Understanding the Child's Spark",
    description: "A friendly, age-appropriate assessment evaluating conceptual understanding, language expression, and a warm conversation with the Principal."
  },
  {
    step: "03",
    title: "Provisional Admission & Tour",
    subtitle: "Personal Experience Day",
    description: "Selected candidates receive a formal admission letter. Families are invited to spend a day on campus to experience our boarding and dining life."
  },
  {
    step: "04",
    title: "Onboarding as a TIS Shishya",
    subtitle: "Joining the Gurukul Family",
    description: "Complete fee formalities, medical profile, and receive your welcome package, uniform kit, and house assignment."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What makes Tula's International School a 'Modern Gurukul'?",
    answer: "A Modern Gurukul integrates timeless Indian values — such as guru-shishya mentorship, mental discipline, daily yoga, and moral integrity — with 21st-century educational technology, smart labs, CBSE academic rigor, and Olympic sports. It nurtures the mind, body, and soul equally.",
    category: "boarding"
  },
  {
    id: "faq-2",
    question: "Which classes are admissions open for in the 2025–2026 academic session?",
    answer: "Admissions are formally open for boys and girls from Class IV through Class IX and Class XI. Limited lateral entry seats may be available for other grades subject to merit and vacancy.",
    category: "admissions"
  },
  {
    id: "faq-3",
    question: "How is security and pastoral care managed for residential students?",
    answer: "Our 22-acre gated campus features 24/7 CCTV surveillance, biometric security, professional security personnel, and separate secured hostel blocks for boys and girls. Each floor has a resident Housemaster or Housemistress who provides attentive emotional and academic care.",
    category: "boarding"
  },
  {
    id: "faq-4",
    question: "What medical facilities exist on the Dehradun campus?",
    answer: "TIS maintains a fully staffed, 4-bed on-campus medical infirmary with qualified resident nursing staff and an attending physician. We have a dedicated 24/7 on-campus ambulance and tie-ups with Dehradun's top multispecialty hospitals within 15 minutes.",
    category: "boarding"
  },
  {
    id: "faq-5",
    question: "Does the school provide competitive exam coaching (JEE / NEET / CLAT / SAT)?",
    answer: "Yes. For Classes XI and XII, TIS offers an integrated curriculum that blends CBSE board excellence with specialized coaching for JEE (Main & Advanced), NEET, CUET, CLAT, and SAT, eliminating the need for outside tuition or exhausting travel.",
    category: "academics"
  },
  {
    id: "faq-6",
    question: "What sports are available and are they mandatory?",
    answer: "Every student engages in mandatory evening sports chosen from 16+ disciplines, including archery, horseback riding, swimming, shooting, tennis, squash, martial arts, basketball, football, and cricket, guided by certified national-level coaches.",
    category: "sports"
  },
  {
    id: "faq-7",
    question: "How do parents stay in touch with their children and track progress?",
    answer: "Parents receive regular weekly phone call hours with their child, continuous portal updates on academic and health milestones, and detailed term progress reports. In addition, parents are always welcome to schedule video calls with housemasters and teachers.",
    category: "boarding"
  }
];
