import AIDevelopment from "../../../public/assets/ai-development.webp";
import MobileApplication from "../../../public/assets/mobile-app.webp";
import WebDevelopment from "../../../public/assets/web-development.webp";
// Portfolio
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
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import { ExpertiseIcon, ServicesIcon } from "../components";
// Development Process
import process2 from "../../../public/assets/development-process/Design.webp";
import process3 from "../../../public/assets/development-process/Development.webp";
import process5 from "../../../public/assets/development-process/Launch.webp";
import process6 from "../../../public/assets/development-process/NewSupport.webp";
import process4 from "../../../public/assets/development-process/Test.webp";
import process1 from "../../../public/assets/development-process/ideate.webp";
// Testimonial clients company logo
import clientCompanyLogo from "../../../public/assets/testimonials/pauseitive_updated.svg";

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
    icon: ServicesIcon.mobile,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our web development services deliver responsive, high-speed websites with secure, scalable back-end solutions, optimized for both user engagement and operational efficiency.",
    img: WebDevelopment,
    icon: ServicesIcon.webDevelopment,
  },
  {
    id: 3,
    title: "AI Development",
    description:
      "We create custom software solutions that enhance business processes, featuring advanced integrations, strong security measures, and scalable designs to support your growth.",
    img: AIDevelopment,
    icon: ServicesIcon.aiDevelopment,
  },
];

export const EXPERTISE = [
  {
    id: 1,
    title: "Automotive",
    description:
      "Delivering cutting-edge solutions for automotive industry with IoT integration, fleet management systems, and predictive maintenance technologies to enhance vehicle performance and operational efficiency.",
    img: MobileApplication,
    icon: ExpertiseIcon.Automotive,
  },
  {
    id: 2,
    title: "HealthCare",
    description:
      "Providing comprehensive healthcare technology solutions including telemedicine platforms, EMR/EHR systems, and AI-powered diagnostic tools to improve patient care and streamline medical operations.",
    img: WebDevelopment,
    icon: ExpertiseIcon.HealthCare,
  },
  {
    id: 3,
    title: "On-Demand",
    description:
      "Building scalable on-demand platforms with real-time tracking, intelligent matching algorithms, and cloud-based infrastructure to ensure seamless service delivery and exceptional user experiences.",
    img: WebDevelopment,
    icon: ExpertiseIcon.Demand,
  },
  {
    id: 4,
    title: "Education",
    description:
      "Creating innovative educational platforms with immersive learning experiences, personalized curriculum paths, and comprehensive analytics to enhance student engagement and educational outcomes.",
    img: MobileApplication,
    icon: ExpertiseIcon.Education,
  },
  {
    id: 5,
    title: "Music",
    description:
      "Developing advanced music streaming platforms with intelligent recommendations, secure royalty management, and immersive audio experiences to maximize engagement and revenue opportunities.",
    img: WebDevelopment,
    icon: ExpertiseIcon.Music,
  },
  {
    id: 6,
    title: "Fintech",
    description:
      "Implementing secure fintech solutions with blockchain technology, advanced fraud detection, and real-time payment processing to deliver safe and personalized financial services.",
    img: MobileApplication,
    icon: ExpertiseIcon.Fintech,
  },
  {
    id: 7,
    title: "Logistic",
    description:
      "Optimizing logistics operations with intelligent route planning, IoT-enabled tracking systems, and predictive analytics to improve delivery efficiency and reduce operational costs.",
    img: WebDevelopment,
    icon: ExpertiseIcon.Logistic,
  },
  {
    id: 8,
    title: "Retail",
    description:
      "Transforming retail experiences with AI-powered inventory management, personalized shopping recommendations, and omnichannel solutions to drive sales and enhance customer satisfaction.",
    img: MobileApplication,
    icon: ExpertiseIcon.Retail,
  },
  {
    id: 9,
    title: "E-Commerce",
    description:
      "Building high-performance e-commerce platforms with scalable infrastructure, secure payment systems, and advanced analytics to boost conversions and drive sustainable business growth.",
    img: WebDevelopment,
    icon: ExpertiseIcon.Ecommerce,
  },
  {
    id: 10,
    title: "Real-Estate",
    description:
      "Revolutionizing real estate with virtual property tours, AI-powered valuation tools, and blockchain-based contracts to streamline transactions and enhance property discovery experiences.",
    img: MobileApplication,
    icon: ExpertiseIcon.RealState,
  },
];

export const PORTFOLIOS: TPortfolio[] = [
  {
    title: "College Keys",
    tags: [
      "Mobile App Design",
      "Mobile App Development",
      "Admin Panel Development",
    ],
    description:
      "CollegeKeys provides a streamlined solution for students and young professionals seeking affordable and reliable housing. Features transparent property listings, verified reviews, and secure booking systems.",
    features: [
      "Transparent Property Listings",
      "Verified Reviews System",
      "Secure Booking Platform",
      "Personalized Recommendations",
      "In-App Communication Tools",
    ],
    slug: "college-keys",
    img: "https://appigma-casestudy.s3.us-west-1.amazonaws.com/college-keys/Property+App+-+Key.jpg",
  },
  {
    title: "HEAVELY",
    tags: [
      "Mobile App Design",
      "Mobile App Development",
      "Admin Panel Development",
    ],
    description:
      "An intuitive app to browse, rent, and manage construction equipment with ease. Features real-time availability, seamless checkout, and efficient tools for contractors—all in one platform.",
    features: [
      "Real-Time Inventory Tracking",
      "Categorized Equipment Listings",
      "Intuitive Checkout Process",
      "Order Management Tools",
      "Maintenance Scheduling",
    ],
    slug: "heavely",
    img: "https://appigma-casestudy.s3.us-west-1.amazonaws.com/construction/Construction+App+(5).jpg",
  },
  {
    title: "EAT GROUP",
    tags: ["Art Direction", "Web Design", "Production"],
    description:
      "We drive into your business dream in order to bring to the surface underlying value that your brand creates for its customers. Deploying world-class creative design and team on demand.",
    features: [
      "Art Direction & Creative Strategy",
      "World-Class Web Design",
      "Production Services",
      "On-Demand Team Deployment",
      "Visual Hierarchy Optimization",
      "Client Partnership Continuity",
    ],
    slug: "eat-group",
    img: "https://appigma-casestudy.s3.us-west-1.amazonaws.com/group-eat/Group+Eat.jpg",
  },
  {
    title: "CRAFT MASTER",
    tags: ["Art Direction", "Web Design", "Production"],
    description:
      "We drive into your business dream in order to bring to the surface underlying value that your brand creates for its customers. Deploying world-class creative design and team on demand.",
    features: [
      "Art Direction & Creative Strategy",
      "World-Class Web Design",
      "Production Services",
      "On-Demand Team Deployment",
      "Visual Hierarchy Optimization",
      "Client Partnership Continuity",
    ],
    slug: "craft-master",
    img: "https://appigma-casestudy.s3.us-west-1.amazonaws.com/craft-master/Craft+Master.jpg",
  },
  {
    title: "UR HOME",
    tags: ["Art Direction", "Web Design", "Production"],
    description:
      "We drive into your business dream in order to bring to the surface underlying value that your brand creates for its customers. Deploying world-class creative design and team on demand.",
    features: [
      "Art Direction & Creative Strategy",
      "World-Class Web Design",
      "Production Services",
      "On-Demand Team Deployment",
      "Visual Hierarchy Optimization",
      "Client Partnership Continuity",
    ],
    slug: "ur-home",
    img: "https://appigma-casestudy.s3.us-west-1.amazonaws.com/ur-home/UX-2.jpg",
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
    name: "Sarah Mitchell",
    description:
      "Appigma transformed our mobile app vision into reality. Their team's attention to detail and innovative approach helped us launch a product that exceeded our expectations. The user experience they created is simply outstanding, and our customer engagement has increased by 300% since launch.",
    designation: "Product Manager",
    initials: "SM",
    logo: clientCompanyLogo,
  },
  {
    id: 2,
    name: "David Chen",
    description:
      "Working with Appigma was a game-changer for our startup. They understood our complex requirements and delivered a scalable solution that grew with our business. Their technical expertise and project management skills are top-notch. Highly recommended for any development project.",
    designation: "CTO",
    initials: "DC",
    logo: clientCompanyLogo,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    description:
      "The team at Appigma delivered our e-commerce platform ahead of schedule and under budget. Their creative design solutions and robust backend architecture have been instrumental in our success. We've seen a 250% increase in online sales since going live.",
    country: "USA",
    designation: "Founder & CEO",
    initials: "ER",
    logo: clientCompanyLogo,
  },
  {
    id: 4,
    name: "Michael Thompson",
    description:
      "Appigma's expertise in AI integration helped us build a cutting-edge application that revolutionized our industry. Their team's technical knowledge and innovative thinking made the impossible possible. The results speak for themselves - we've gained a significant competitive advantage.",
    designation: "VP of Technology",
    initials: "MT",
    logo: clientCompanyLogo,
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

export const FOOTER_LOCATIONS = ["USA", "PAK"];

export const FOOTER_CONTACT = [
  {
    data: "+18152379491",
    icon: Mail,
  },
  {
    data: "hello@appigma.com",
    icon: Phone,
  },
];

export const FOOTER_SOCIAL_MEDIA = [
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "YouTube", icon: Youtube },
  { name: "LinkedIn", icon: Linkedin },
];

// Technologies
export const TECHNOLOGIES = {
  "Mobile Apps": {
    iOS: [
      "Swift",
      "UI Kit",
      "RxSwift",
      "Combine",
      "MVVM",
      "Alomofire",
      "Core Data",
    ],
    Android: ["Kotlin", "MVVM", "RxJava", "Java", "Retrofit", "Jetpack"],
  },
  "Web Platforms": {
    Frontend: [
      "React js",
      "Next js",
      "Angular",
      "Vue",
      "Typescript",
      "Html5",
      "CSS",
      "Javascript",
      "GraphQL",
      "Apollo",
      "MaterialUI",
      "Rest API",
    ],
    Backend: [
      "Node js",
      "Python",
      "Scala",
      "Php",
      "Java",
      "Spring",
      ".Net",
      "Laravel",
    ],
    CMS: ["Wordpress", "Magento", "Shopify", "Contentful"],
  },
  "Cross Platforms": {
    React: ["Redux", "Mobx", "RxJS", "Redux Thunk"],
    Flutter: ["Bloc", "Dart", "MVVM", "Rx Dart"],
  },
  Database: {
    Database: [
      "Mongodb",
      "MySQL",
      "MsSQL",
      "Dynamodb",
      "PostgreSQL",
      "IBM",
      "Redis",
      "Elasticsearch",
    ],
  },
  "Cloud & DevOps": {
    DevOps: ["Nginx", "Docker", "Kubernetes", "Gradle", "Jenkins"],
    Cloud: [
      "Aws",
      "Appium",
      "Azure",
      "Rackspace",
      "Linode",
      "Firebase",
      "Oracle Cloud",
      "Heroku",
    ],
  },
};

// Development Process
export const DEVELOPMENT_PROCESS = [
  {
    id: 1,
    title: "Ideate",
    description:
      "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
    image: process1,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Our creative team crafts intuitive designs that deliver both aesthetics and usability, focusing on seamless user experience.",
    image: process2,
  },
  {
    id: 3,
    title: "Develop",
    description:
      "We write clean, scalable code using modern frameworks and best practices to turn designs into powerful digital products.",
    image: process3,
  },
  {
    id: 4,
    title: "Test",
    description:
      "We write clean, scalable code using modern frameworks and best practices to turn designs into powerful digital products.",
    image: process4,
  },
  {
    id: 5,
    title: "Launch",
    description:
      "We write clean, scalable code using modern frameworks and best practices to turn designs into powerful digital products.",
    image: process5,
  },
  {
    id: 6,
    title: "Support",
    description:
      "We write clean, scalable code using modern frameworks and best practices to turn designs into powerful digital products.",
    image: process6,
  },
];

export const OUR_JOURNEY = [
  {
    number: "1,300+",
    title: "Completed Projects",
  },
  {
    number: "350+",
    title: "Talented appgima",
  },
  {
    number: "600+",
    title: "Satisfied Clients",
  },
];
