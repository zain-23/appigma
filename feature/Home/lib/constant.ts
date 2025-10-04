import MobileApplication from "../../../public/assets/mobile-app.webp";
import WebDevelopment from "../../../public/assets/web-development.webp";
import AIDevelopment from "../../../public/assets/ai-development.webp";
// Portfolio
import AMJ from "../../../public/assets/portfolio/portfolio.webp";
import TruthGpt from "../../../public/assets/portfolio/portfolio-2.webp";
import FSK from "../../../public/assets/portfolio/portfolio-3.webp";
import { TPortfolio } from "../types";
// Awards
import award1 from "../../../public/assets/awards/Clutch.webp";
import award2 from "../../../public/assets/awards/Horizon.webp";
import award3 from "../../../public/assets/awards/Horizon_Sliver.webp";
import award4 from "../../../public/assets/awards/dot-com.webp";
import award5 from "../../../public/assets/awards/expertise-logo.webp";
import award6 from "../../../public/assets/awards/inc-5000.webp";
import award7 from "../../../public/assets/awards/rank-watch.webp";
import award8 from "../../../public/assets/awards/right-firms.webp";
import award9 from "../../../public/assets/awards/top_Reated.webp";
import award10 from "../../../public/assets/awards/top_developer.webp";
// Icon
import {
  Mail,
  Phone,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";

export const ACHIEVEMENT = [
  {
    id: 1,
    item: "Number of downloads",
    numbers: "5M",
  },
  {
    id: 2,
    item: "Ratings of apps",
    numbers: "4.8",
  },
  {
    id: 3,
    item: "Number of exist",
    numbers: "25",
  },
];

export const SERVICES = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile applications with seamless user experiences, robust security, and scalable architectures, tailored to meet user and business expansion needs.",
    img: MobileApplication,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our web development services deliver responsive, high-speed websites with secure, scalable back-end solutions, optimized for both user engagement and operational efficiency.",
    img: WebDevelopment,
  },
  {
    id: 3,
    title: "AI Development",
    description:
      "We create custom software solutions that enhance business processes, featuring advanced integrations, strong security measures, and scalable designs to support your growth.",
    img: AIDevelopment,
  },
];

export const EXPERTISE = [
  {
    id: 1,
    title: "Automotive",
    description:
      "Implement IoT telematics and AI-driven predictive maintenance to optimize fleet management. Gain real-time data for enhanced vehicle performance and reduced downtime. Improve safety and efficiency with advanced analytics.",
    img: MobileApplication,
  },
  {
    id: 2,
    title: "HealthCare",
    description:
      "Utilize HIPAA-compliant telemedicine platforms and integrated EMR/EHR systems for streamlined patient care. Employ AI diagnostics for better outcomes and predictive analytics to enhance operational efficiency.",
    img: WebDevelopment,
  },
  {
    id: 3,
    title: "On-Demand",
    description:
      "Adopt scalable cloud architectures with real-time GPS tracking and AI-driven demand forecasting. Ensure rapid, reliable service delivery and seamless user experiences. Scale effortlessly with fluctuating demands.",
    img: WebDevelopment,
  },
  {
    id: 4,
    title: "Education",
    description:
      "Leverage VR-enabled learning platforms and AI-driven personalized paths to enhance student engagement. Utilize real-time analytics for adaptive content and improved teaching strategies.",
    img: MobileApplication,
  },
  {
    id: 5,
    title: "Music",
    description:
      "Deploy advanced streaming platforms with AI-driven recommendations and blockchain-based royalty management. Maximize revenue, enhance user engagement, and ensure secure transactions.",
    img: WebDevelopment,
  },
  {
    id: 6,
    title: "Fintech",
    description:
      "Implement blockchain smart contracts, AI-driven fraud detection, and real-time payment processing for secure transactions. Use data analytics for personalized financial solutions and enhanced security.",
    img: MobileApplication,
  },
  {
    id: 7,
    title: "Logistic",
    description:
      "Optimize operations with AI-driven route planning, IoT tracking, and advanced supply chain analytics. Improve delivery times, reduce costs, and gain real-time visibility and predictive insights.",
    img: WebDevelopment,
  },
  {
    id: 8,
    title: "Retail",
    description:
      "Integrate AI-powered inventory management and personalized recommendations with omnichannel sales. Drive customer loyalty, optimize stock levels, and increase sales through data-driven insights.",
    img: MobileApplication,
  },
  {
    id: 9,
    title: "E-Commerce",
    description:
      "Enhance platforms with scalable cloud infrastructure, secure payment gateways, and AI-driven customer behavior analytics. Boost conversions, improve user experience, and drive sustained growth.",
    img: WebDevelopment,
  },
  {
    id: 10,
    title: "Real-Estate",
    description:
      "Modernize with VR property tours, AI-driven valuations, and blockchain smart contracts. Streamline transactions, enhance property visibility, and provide data-driven insights for better decisions.",
    img: MobileApplication,
  },
];

export const PORTFOLIOS: TPortfolio[] = [
  {
    title: "AMJ Workplace Wellness",
    tags: ["Game Design", "Mobile App Development"],
    description:
      "AMJ Workplace Wellness is a holistic wellness app designed to promote employee health and fitness in the corporate environment.",
    features: [
      "Seamless UI/UX Design for Corporate Use",
      "Integration with Wearable Devices",
      "Real-time Health Tracking and Analysis",
      "80% Increase in Employee Satisfaction",
      "AI-driven Personalized Recommendations",
    ],
    slug: "amj-wellness",
    img: AMJ,
  },
  {
    title: "Truth GPT",
    tags: ["UI/UX Design", "Mobile App Development"],
    description:
      "AI-powered mobile application designed for transparent, accessible information through a chatbot interface. Developed to enhance interaction realism with advanced Flutter animations, engaging 3D models, and prompt contextual engineering for quick, helpful responses.",
    features: [
      "40% More Interactions with Flutter Animations",
      "3X Engagement via 3D Features",
      "Quality Responses with Semantic Search",
    ],
    slug: "truth-gpt",
    img: TruthGpt,
  },
  {
    title: "Find Serve & Keep",
    tags: ["Game Design", "Mobile App Development"],
    description:
      "FSK revolutionizes mobile gaming with its innovative fusion of match-3 puzzles, time management challenges, and captivating role-playing elements.",
    features: [
      "Immersive Role-Playing Narrative",
      "Real-Time Market Strategies",
      "Monetization Without Disruption",
      "Engaging User Experience",
    ],
    slug: "fsk",
    img: FSK,
  },
];

export const AWARDS = [
  {
    id: 1,
    title: "INC. 5000",
    description: "America's Fastest Growing Companies",
    img: award6,
  },
  {
    id: 2,
    title: "Dot Comm",
    description: "Excellence in Web Creativity & Digital Communication",
    img: award4,
  },
  {
    id: 3,
    title: "Clutch",
    description: "Top 1000 Companies",
    img: award1,
  },
  {
    id: 4,
    title: "Top Developers",
    description: "Top Entertainment App Developers",
    img: award10,
  },
  {
    id: 5,
    title: "Expertise",
    description: "Best Mobile App Developer",
    img: award5,
  },
  {
    id: 6,
    title: "Software World",
    description: "Top App Development Companies",
    img: award9,
  },
  {
    id: 7,
    title: "Horizon Award",
    description: "Gold Awards Winner",
    img: award2,
  },
  {
    id: 8,
    title: "Rank Watch",
    description: "Top Web Development Agency",
    img: award7,
  },
  {
    id: 9,
    title: "Horizon Award",
    description: "Silver Awards Winner",
    img: award3,
  },
  {
    id: 10,
    title: "Right firms",
    description: "Top Mobile App Development Company",
    img: award8,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Keith Cascarelli",
    description:
      "I have been working with TekRevol on my software development project for over a year now. Throughout this time, I have found their team meticulous in their work processes, starting with initial valuation, framing the overall milestones, and clearly laying out work steps. The most impressive piece of experience was the communication with their teams. Their creative ditins made the difference in something that was good into something that I feel was great, I highly recommend TekRevol as my No 1 choice as enterprise software development team for any software entrepreneur.",
    video: "./assets/testimonials/portfolio-1.mp4",
    country: "USA",
    designation: "WTT",
  },
  {
    id: 2,
    name: "Keith Cascarelli",
    description:
      "I have been working with TekRevol on my software development project for over a year now. Throughout this time, I have found their team meticulous in their work processes, starting with initial valuation, framing the overall milestones, and clearly laying out work steps. The most impressive piece of experience was the communication with their teams. Their creative ditins made the difference in something that was good into something that I feel was great, I highly recommend TekRevol as my No 1 choice as enterprise software development team for any software entrepreneur.",
    video: "./assets/testimonials/portfolio-1.mp4",
    country: "USA",
    designation: "WTT",
  },
  {
    id: 3,
    name: "Keith Cascarelli",
    description:
      "I have been working with TekRevol on my software development project for over a year now. Throughout this time, I have found their team meticulous in their work processes, starting with initial valuation, framing the overall milestones, and clearly laying out work steps. The most impressive piece of experience was the communication with their teams. Their creative ditins made the difference in something that was good into something that I feel was great, I highly recommend TekRevol as my No 1 choice as enterprise software development team for any software entrepreneur.",
    video: "./assets/testimonials/portfolio-1.mp4",
    country: "USA",
    designation: "WTT",
  },
  {
    id: 4,
    name: "Keith Cascarelli",
    description:
      "I have been working with TekRevol on my software development project for over a year now. Throughout this time, I have found their team meticulous in their work processes, starting with initial valuation, framing the overall milestones, and clearly laying out work steps. The most impressive piece of experience was the communication with their teams. Their creative ditins made the difference in something that was good into something that I feel was great, I highly recommend TekRevol as my No 1 choice as enterprise software development team for any software entrepreneur.",
    video: "./assets/testimonials/portfolio-1.mp4",
    country: "USA",
    designation: "WTT",
  },
];

export const ACCORDION = [
  {
    id: 1,
    question: "What mobile app development services do you offer?",
    answer: {
      title:
        "We offer comprehensive mobile app development services, including:",
      list: [
        "Custom mobile app design and development",
        "Native app development for iOS and Android platforms",
        "Cross-platform app development using frameworks like React Native and Flutter",
        "UI/UX design and optimization",
        "App testing, debugging, and quality assurance",
        "App deployment and maintenance support",
      ],
    },
  },
  {
    id: 2,
    question: "What mobile app development services do you offer?",
    answer: {
      title:
        "We offer comprehensive mobile app development services, including:",
      list: [
        "Custom mobile app design and development",
        "Native app development for iOS and Android platforms",
        "Cross-platform app development using frameworks like React Native and Flutter",
        "UI/UX design and optimization",
        "App testing, debugging, and quality assurance",
        "App deployment and maintenance support",
      ],
    },
  },
  {
    id: 3,
    question: "What mobile app development services do you offer?",
    answer: {
      title:
        "We offer comprehensive mobile app development services, including:",
      list: [
        "Custom mobile app design and development",
        "Native app development for iOS and Android platforms",
        "Cross-platform app development using frameworks like React Native and Flutter",
        "UI/UX design and optimization",
        "App testing, debugging, and quality assurance",
        "App deployment and maintenance support",
      ],
    },
  },
  {
    id: 4,
    question: "What mobile app development services do you offer?",
    answer: {
      title:
        "We offer comprehensive mobile app development services, including:",
      list: [
        "Custom mobile app design and development",
        "Native app development for iOS and Android platforms",
        "Cross-platform app development using frameworks like React Native and Flutter",
        "UI/UX design and optimization",
        "App testing, debugging, and quality assurance",
        "App deployment and maintenance support",
      ],
    },
  },
  {
    id: 5,
    question: "What mobile app development services do you offer?",
    answer: {
      title:
        "We offer comprehensive mobile app development services, including:",
      list: [
        "Custom mobile app design and development",
        "Native app development for iOS and Android platforms",
        "Cross-platform app development using frameworks like React Native and Flutter",
        "UI/UX design and optimization",
        "App testing, debugging, and quality assurance",
        "App deployment and maintenance support",
      ],
    },
  },
];

// Footer Constants
export const FOOTER_DATA = {
  services: [
    { title: "Mobile App Development", path: "/mobile-app-development" },
    { title: "Web Development", path: "/web-development" },
    { title: "AI Development", path: "ai-development" },
  ],
  quick_links: [
    { title: "Home", path: "/" },
    { title: "Servies", path: "/services" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "About us", path: "/about-us" },
    { title: "Contact us", path: "/contact-us" },
  ],
};

export const FOOTER_LOCATIONS = [
  "HOU",
  "ATX",
  "DTX",
  "SF",
  "MIA",
  "CHI",
  "NYC",
  "DC",
  "LA",
  "DXB",
  "QA",
  "BH",
  "KSA",
  "LDN",
];

export const FOOTER_CONTACT = [
  {
    data: "+1800-362-9239",
    icon: Mail,
  },
  {
    data: "info@appigma.com",
    icon: Phone,
  },
];

export const FOOTER_SOCIAL_MEDIA = [
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "YouTube", icon: Youtube },
  { name: "LinkedIn", icon: Linkedin },
];
