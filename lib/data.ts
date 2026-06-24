// --- SHARED DATA DEFINITIONS FOR IMAGE FITNESS ---

export interface Branch {
  id: string;
  name: string;
  address: string;
  instagram: string;
  instagramUrl: string;
  phone: string;
  whatsapp: string;
  mapUrl: string;
  highlights: string[];
  embedUrl?: string; // Embedded Google Map
}

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'chembur',
    name: 'Chembur',
    address: '4th Floor, Platinum Square, Near Diamond Garden, Chembur, Mumbai - 400071',
    instagram: 'imagefitness_chembur',
    instagramUrl: 'https://www.instagram.com/imagefitness_chembur/',
    phone: '+91 98337 77710',
    whatsapp: 'https://wa.me/919833777710?text=Hi%20Image%20Fitness%20Chembur,%20I%20want%20to%20book%20a%20free%20trial!',
    mapUrl: 'https://maps.app.goo.gl/HwhpBZvYxcQKtWGs7',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3802521191065!2d72.8988501!3d19.0470535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7b77ad%3A0x673dbb8979313936!2sDiamond+Garden%2C+Chembur%2C+Mumbai%2C+Maharashtra+400071!5e0!3m2!1sen!2sin!4v1719210000000',
    highlights: ['Modern Hammer Strength Gym Equipment', 'Spacious Steam Rooms', 'Olympic Lifting Platforms', 'Cool Air Conditioning & Ventilation']
  },
  {
    id: 'bhandup',
    name: 'Bhandup',
    address: '1st Floor, Filix Tower, LBS Marg, Opposite Dreams Mall, Bhandup West, Mumbai - 400078',
    instagram: 'imagefitness_bhandup',
    instagramUrl: 'https://www.instagram.com/imagefitness_bhandup/',
    phone: '+91 98337 77711',
    whatsapp: 'https://wa.me/919833777711?text=Hi%20Image%20Fitness%20Bhandup,%20I%20want%20to%20book%20a%20free%20trial!',
    mapUrl: 'https://maps.app.goo.gl/1pr33CSECegdUYCr9',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9177112046487!2d72.9348123!3d19.1550119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b80a6be47e67%3A0x9dbfb4e68e21db77!2sDreams+Mall%2C+LBS+Marg%2C+Bhandup+West%2C+Mumbai%2C+Maharashtra+400078!5e0!3m2!1sen!2sin!4v1719210000001',
    highlights: ['Olympic Weightlifting Area', 'Functional CrossFit Zone', 'Modern Cardio Machines', 'Clean Steam Rooms & Lockers']
  },
  {
    id: 'sanpada',
    name: 'Sanpada',
    address: '1st Floor, Moraj Residency Commercial Wing, Sector 16, Off Palm Beach Rd, Sanpada, Navi Mumbai - 400705',
    instagram: 'imagefitness.sanpada',
    instagramUrl: 'https://www.instagram.com/imagefitness.sanpada/',
    phone: '+91 98337 77712',
    whatsapp: 'https://wa.me/919833777712?text=Hi%20Image%20Fitness%20Sanpada,%20I%20want%20to%20book%20a%20free%20trial!',
    mapUrl: 'https://maps.app.goo.gl/JBRD96eWCyGxbDnU9',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5543110041235!2d73.0135892!3d19.0392019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db33333333%3A0x3333333333333333!2sPalm+Beach+Rd%2C+Sanpada%2C+Navi+Mumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1719210000002',
    highlights: ['Cardio Zone with Sea View', 'High-Quality Life Fitness Equipment', 'Spacious Yoga & Pilates Room', 'Relaxing Lounge Area']
  },
  {
    id: 'dadar',
    name: 'Dadar',
    address: '3rd Floor, Nakshatra Mall, Ranade Road, Dadar West, Mumbai - 400028',
    instagram: 'imagefitnessdadar',
    instagramUrl: 'https://www.instagram.com/imagefitnessdadar/',
    phone: '+91 98337 77713',
    whatsapp: 'https://wa.me/919833777713?text=Hi%20Image%20Fitness%20Dadar,%20I%20want%20to%20book%20a%20free%20trial!',
    mapUrl: 'https://maps.app.goo.gl/teAcKCV9yLX9Sra58',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9213110038474!2d72.8423451!3d19.0210342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced08d8109bf%3A0x7d022d25087799d5!2sDadar%20West%20Station%2C+Dadar%2C+Mumbai%2C+Maharashtra+400028!5e0!3m2!1sen!2sin!4v1719210000003',
    highlights: ['Comfortable Personal Training Zones', 'Muscle Recovery & Physio Area', 'Real MMA Cage', 'Modern Strength Training Gear']
  },
  {
    id: 'mulund',
    name: 'Mulund',
    address: '2nd Floor, Devidayal Road, Near Johnson & Johnson, Mulund West, Mumbai - 400080',
    instagram: 'imagefitness_mulund',
    instagramUrl: 'https://www.instagram.com/imagefitness_mulund/',
    phone: '+91 98337 77714',
    whatsapp: 'https://wa.me/919833777714?text=Hi%20Image%20Fitness%20Mulund,%20I%20want%20to%20book%20a%20free%20trial!',
    mapUrl: 'https://maps.app.goo.gl/Z4iW5XLir4vf7es67',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.421451004381!2d72.9512345!3d19.1720342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9015c7cd3df%3A0xe67db0533f81e3a!2sDevidayal+Rd%2C+Mulund+West%2C+Mumbai%2C+Maharashtra+400080!5e0!3m2!1sen!2sin!4v1719210000004',
    highlights: ['Fun Cardio Area with TV Screens', 'Modern Hammer Strength Machines', 'Dedicated Cycling Studio', 'Healthy Snack & Shake Bar']
  }
];

export const WHY_US_DATA = [
  {
    title: 'Friendly, Certified Coaches',
    desc: 'Get fit with experienced, certified coaches who help you reach your goals with simple, personalized workout plans.',
    size: 'lg',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Modern Gym Equipment',
    desc: 'Workout on top-quality, modern machines from Hammer Strength, Life Fitness, and Cybex that are comfortable and easy to use.',
    size: 'md',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Fun Group Classes',
    desc: 'Join high-energy, fun group workouts like Zumba, yoga, and functional strength classes led by friendly instructors daily.',
    size: 'md',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Spacious Changing Rooms',
    desc: 'Unwind and freshen up after your workout in our clean, private changing rooms with secure lockers.',
    size: 'lg',
    image: 'https://images.unsplash.com/photo-1543975200-8e313fb04fc7?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Simple Diet & Nutrition Advice',
    desc: 'Get practical diet plans, simple nutritional guidance, and helpful food tips from our friendly in-house gym experts.',
    size: 'md',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    title: 'Super Clean & Safe Gym',
    desc: 'Enjoy a sparkling clean workout space with continuous fresh air circulation and hourly sanitizing of all equipment.',
    size: 'md',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const FACILITIES_DATA = [
  { name: 'Strength Zone', desc: 'High-quality weight machines, barbells, and dumbells to build your strength.', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Cardio Area', desc: 'Modern treadmills, cross-trainers, and exercise bikes with TV screens to keep you motivated.', image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Functional Area', desc: 'CrossFit zone with kettlebells, medicine balls, and battle ropes for a fun full-body workout.', image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Zumba & Group Studio', desc: 'Fun group dance and fitness sessions led by energetic, friendly instructors.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Yoga & Pilates', desc: 'Calm yoga and pilates sessions to build your flexibility, balance, and core strength.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Spacious Changing Rooms', desc: 'Separate, super-clean, and secure changing areas for men and women to freshen up.', image: 'https://images.unsplash.com/photo-1543975200-8e313fb04fc7?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Personal Training Support', desc: 'One-on-one fitness coaching tailored completely to your pace and goals.', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Body Progress Checks', desc: 'Simple body weight and progress scans to see how you are improving over time.', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400&h=400' }
];

export const TRANSFORMATIONS_DATA = [
  {
    name: 'Rahul Sharma (Chembur)',
    before: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400&h=400',
    after: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&q=80&w=400&h=400',
    stats: 'Lost 22 Kgs • Built Muscle',
    period: '6 Months of Training'
  },
  {
    name: 'Priyanka Mehta (Dadar)',
    before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400&h=400',
    after: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400&h=400',
    stats: 'Reduced 18% Body Fat • Stronger Core',
    period: '4 Months of Training'
  },
  {
    name: 'Amit Patel (Andheri)',
    before: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=400&h=400',
    after: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=400',
    stats: 'Gained 8 Kgs of Lean Mass',
    period: '5 Months of Guided Training'
  }
];

export const MEMBERSHIPS_DATA = [
  {
    name: 'Monthly Gym Membership',
    price: '₹5,500',
    period: 'month',
    desc: 'Get full access to all gym equipment and start your fitness journey with a supportive community.',
    features: ['Full access to your home gym', 'Support from certified trainers', 'Premium changing room access', 'Secure locker room facility', 'Simple body fat & progress scans'],
    popular: false,
  },
  {
    name: '3-Month Motivation Plan',
    price: '₹14,500',
    period: '3 months',
    desc: 'Build consistency, develop healthy habits, and start seeing real changes with helpful trainer guidance.',
    features: ['Full access to your home gym', 'Support from certified trainers', 'Premium changing room access', 'Secure locker room & free Wi-Fi', '2 friendly diet consultations', '1 posture & joint assessment'],
    popular: false,
  },
  {
    name: '6-Month Transformation Plan',
    price: '₹24,000',
    period: '6 months',
    desc: 'Our most popular option to build healthy, lasting habits, lose fat, and get strong with complete support.',
    features: ['Access up to 3 gym locations', 'Dedicated guidance from trainers', 'Premium changing rooms & recovery access', 'Premium lockers', 'Monthly friendly diet check-ins', '2 free guest passes for friends monthly'],
    popular: false,
  },
  {
    name: '12-Month Fitness Journey',
    price: '₹38,000',
    period: '12 months',
    desc: 'Commit to a healthier lifestyle with unlimited multi-gym access and full personal guidance all year round.',
    features: ['Unlimited access to all our gyms', '2 free personal training sessions', 'Unlimited changing room access', 'Weekly friendly diet support', '12 monthly body fat progress scans', '4 free guest passes for friends monthly', 'Free high-quality gym welcome kit'],
    popular: true,
  }
];

export const TRAINERS_DATA = [
  {
    name: 'Arjun Ranade',
    role: 'Head Fitness Coach & Trainer',
    cert: 'Certified Master Trainer & Diet Specialist',
    img: 'https://picsum.photos/seed/arjuncoach/600/800',
    handle: '@arjun_imagefitness'
  },
  {
    name: 'Sneha Patil',
    role: 'Lead Fitness Coach & Yoga Instructor',
    cert: 'Reebok Certified Trainer & Experienced Yoga Instructor',
    img: 'https://picsum.photos/seed/snehacoach/600/800',
    handle: '@sneha_functional'
  },
  {
    name: 'Vikram Rajput',
    role: 'Strength Coach & Weightlifting Specialist',
    cert: 'Olympic Weightlifter & Certified Trainer',
    img: 'https://picsum.photos/seed/vikramcoach/600/800',
    handle: '@vikram_iron'
  },
  {
    name: 'Riya Sen',
    role: 'Lead Group Class Instructor',
    cert: 'Certified Zumba & Pilates Trainer',
    img: 'https://picsum.photos/seed/riyacoach/600/800',
    handle: '@riya_zumbafit'
  }
];

export const GALLERY_DATA = [
  { url: 'https://picsum.photos/seed/galgym1/800/1000', cat: 'Facilities', caption: 'Our spacious strength area with high-quality weight-lifting platforms.' },
  { url: 'https://picsum.photos/seed/galgym2/1000/800', cat: 'Workouts', caption: 'Fun, high-energy group workouts and fitness classes.' },
  { url: 'https://picsum.photos/seed/galgym3/800/800', cat: 'Community', caption: 'Members smiling and celebrating their fitness milestones together.' },
  { url: 'https://picsum.photos/seed/galgym4/800/1100', cat: 'Facilities', caption: 'Spacious, sparkling clean and hygienic changing rooms.' },
  { url: 'https://picsum.photos/seed/galgym5/1100/800', cat: 'Workouts', caption: '1-on-1 personal training sessions with supportive coaches.' },
  { url: 'https://picsum.photos/seed/galgym6/800/800', cat: 'Facilities', caption: 'Airy cardio area with individual TV screens on treadmills.' }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Amit Deshmukh',
    branch: 'Bhandup Branch',
    quote: 'Image Fitness changed my life! I lost 23 kg in 6 months. The trainers are so supportive and taught me the right way to lift so I never got hurt. Truly the best and friendliest gym in Mumbai!',
    rating: 5,
    tag: 'Fat Loss transformation'
  },
  {
    name: 'Karina D’Souza',
    branch: 'Chembur Branch',
    quote: 'The gym has a wonderful, friendly atmosphere. Everyone is welcoming, and the entire facility is super clean and hygienic. I absolutely love the premium changing room facilities and the group workout sessions!',
    rating: 5,
    tag: 'Athletic Conditioning'
  },
  {
    name: 'Ramesh Iyer',
    branch: 'Sanpada Branch',
    quote: 'Simple diet advice along with excellent gym equipment. As a busy professional, their helpful trainers and easy-to-follow workout plans kept me on track and consistent.',
    rating: 5,
    tag: 'Muscle Hypertrophy'
  }
];

export const FAQS_DATA = [
  {
    q: "Can I access multiple branches of Image Fitness with a single membership?",
    a: "Yes! Our 6-Month gym membership lets you access up to 3 locations, and our 12-Month membership gives you unlimited access to all 5 of our gyms across Mumbai (Chembur, Dadar, Bhandup, Mulund, and Sanpada)."
  },
  {
    q: "Are secure changing rooms and lockers available for all members?",
    a: "Yes, definitely! All our memberships include full access to our clean, secure changing rooms and lockable lockers for men and women to keep your belongings safe and let you freshen up after a workout."
  },
  {
    q: "What certifications do your trainers hold?",
    a: "Every trainer at Image Fitness holds trusted professional certifications (like K11 or Gold's Gym Academy). Our nutrition experts are also certified to help you eat healthier and feel better."
  },
  {
    q: "Is there a trial class available before joining?",
    a: "Yes! We offer a completely free 1-day pass so you can check out our gym, try the machines, and get a free 1-on-1 chat with one of our friendly coaches."
  },
  {
    q: "Do you offer customizable diet planning?",
    a: "Yes! We provide easy, practical diet planning with our 3-month, 6-month, and 12-month memberships. Our coaches will design an easy-to-follow plan that fits your life and favorite foods."
  }
];
