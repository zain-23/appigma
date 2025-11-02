import { Button, WebIcon } from "@/shared/common";
// Brands
import brand1 from "../../../public/assets/brands/milocare.webp";
import brand2 from "../../../public/assets/brands/onsite.webp";
import brand3 from "../../../public/assets/brands/pure_plank.webp";
import brand4 from "../../../public/assets/brands/soundly.webp";
import brand5 from "../../../public/assets/brands/teemates.webp";

import aiAutomationBgImage from "../../../public/assets/services/ai/banner-ai.webp";
import demandBgImage from "../../../public/assets/services/ai/unlock-ai.webp";
import expertiseBgImg from "../../../public/assets/services/ai/ml-solutions-bg.webp";
// Model image
import model1 from "../../../public/assets/services/ai/bloom.svg";
import model2 from "../../../public/assets/services/ai/claude.svg";
import model3 from "../../../public/assets/services/ai/dall_e.svg";
import model4 from "../../../public/assets/services/ai/gemini.svg";
import model5 from "../../../public/assets/services/ai/gpt_logo.svg";
import model6 from "../../../public/assets/services/ai/llama.svg";
import model7 from "../../../public/assets/services/ai/micros.svg";
import model8 from "../../../public/assets/services/ai/mistral-ai.svg";
import model9 from "../../../public/assets/services/ai/stable.svg";
import model10 from "../../../public/assets/services/ai/palm.svg";
import model11 from "../../../public/assets/services/ai/whisper.svg";
import model12 from "../../../public/assets/services/ai/vicuna.svg";

import readyAICtaBgImg from "../../../public/assets/services/ai/ready-ai-cta.webp";
import innovationBgImg from "../../../public/assets/services/ai/ai-journey-cta.webp";
import { Icon } from "../components";

const BRANDS = [
  {
    id: 1,
    img: brand1,
  },
  {
    id: 2,
    img: brand2,
  },
  {
    id: 3,
    img: brand3,
  },
  {
    id: 4,
    img: brand4,
  },
  {
    id: 5,
    img: brand5,
  },
  {
    id: 6,
    img: brand1,
  },
  {
    id: 7,
    img: brand2,
  },
  {
    id: 8,
    img: brand3,
  },
  {
    id: 9,
    img: brand4,
  },
  {
    id: 10,
    img: brand5,
  },
];

const AI_STACK = [
  {
    id: 1,
    img: model1,
    name: "Bloom-560m",
  },
  {
    id: 2,
    img: model2,
    name: "Claude",
  },
  {
    id: 3,
    img: model3,
    name: "DALL-E 2",
  },
  {
    id: 4,
    img: model4,
    name: "Google Gemini",
  },
  {
    id: 5,
    img: model5,
    name: "GPT-4",
  },
  {
    id: 6,
    img: model6,
    name: "LLaMA-3",
  },
  {
    id: 7,
    img: model7,
    name: "Microsoft Phi-2",
  },
  {
    id: 8,
    img: model8,
    name: "Mistral AI",
  },
  {
    id: 9,
    img: model9,
    name: "Stable Diffusion",
  },
  {
    id: 10,
    img: model10,
    name: "PaLM-2",
  },
  {
    id: 11,
    img: model11,
    name: "Whisper",
  },
  {
    id: 12,
    img: model12,
    name: "Vicuna",
  },
];

const MULTI_DOMAIN_SERVICES = [
  {
    id: 1,
    title: "Machine Learning",
    description:
      "We build intelligent systems that learn from data to make predictions and decisions. Our ML solutions help businesses automate processes, improve accuracy, and gain valuable insights from their data.",
    icon: Icon.machine_learning,
  },
  {
    id: 2,
    title: "Generative AI & LLM Engineering",
    description:
      "We develop advanced language models and generative AI systems that can create content, answer questions, and assist with complex tasks. Our solutions enhance productivity and creativity across industries.",
    icon: Icon.generative_ai,
  },
  {
    id: 3,
    title: "Deep Learning",
    description:
      "We create neural networks that can recognize patterns, process images, and understand complex relationships in data. Our deep learning solutions power advanced AI applications and automation systems.",
    icon: Icon.deep_learning,
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description:
      "We analyze historical data to forecast future trends and behaviors. Our predictive models help businesses make informed decisions, reduce risks, and identify new opportunities for growth.",
    icon: Icon.predictive,
  },
  {
    id: 5,
    title: "Natural Language Processing (NLP)",
    description:
      "We develop systems that understand and process human language. Our NLP solutions enable chatbots, sentiment analysis, language translation, and automated text processing for better user experiences.",
    icon: Icon.natural_language,
  },
  {
    id: 6,
    title: "Data Science",
    description:
      "We extract meaningful insights from complex datasets using statistical analysis and machine learning. Our data science solutions help businesses understand their customers, optimize operations, and drive innovation.",
    icon: Icon.data_science,
  },
  {
    id: 7,
    title: "Computer Vision",
    description:
      "We build systems that can interpret and understand visual information from images and videos. Our computer vision solutions enable facial recognition, object detection, and automated visual analysis.",
    icon: Icon.computer_vision,
  },
  {
    id: 8,
    title: "Speech Recognition",
    description:
      "We develop systems that can understand and process spoken language. Our speech recognition solutions enable voice commands, transcription services, and voice-activated applications for hands-free interaction.",
    icon: Icon.speech_recognition,
  },
  {
    id: 9,
    title: "Reinforcement Learning",
    description:
      "We create AI systems that learn through trial and error to optimize decision-making. Our reinforcement learning solutions are perfect for autonomous systems, game AI, and complex optimization problems.",
    icon: Icon.reinforcement,
  },
];

const INDUSTRY = [
  {
    id: 1,
    title: "Healthcare",
    icon: WebIcon.industry.healthcare,
  },
  {
    id: 2,
    title: "Real Estate",
    icon: WebIcon.industry.real_state,
  },
  {
    id: 3,
    title: "Ecommerce",
    icon: WebIcon.industry.ecomerce,
  },
  {
    id: 4,
    title: "Logistics and Supply Chain",
    icon: WebIcon.industry.logistic,
  },
  {
    id: 5,
    title: "Sports",
    icon: WebIcon.industry.sport,
  },
  {
    id: 6,
    title: "Fintech",
    icon: WebIcon.industry.fintech,
  },
  {
    id: 7,
    title: "Gaming",
    icon: WebIcon.industry.gaming,
  },
  {
    id: 8,
    title: "Manufacturing",
    icon: WebIcon.industry.manufacturing,
  },
];

export const SERVICES = {
  "ai-development": {
    path: "/services/ai-development",
    heroSection: {
      title: "AI Development Services",
      description:
        "Appigma is a renowned AI development services company in the USA, trusted worldwide for its automation solutions. We develop artificial intelligence software and apps for businesses of all sizes to discard manual processes. Our AI solutions are designed to streamline workflows and augment operations for measurable results without unnecessary delays.",
      btnContent: "Talk To Your AI Consultant",
      heroBgImg: aiAutomationBgImage,
    },
    trustedBrands: {
      title: "Trusted by the Top Brands",
      logo: BRANDS,
    },
    demand: {
      title: "AI Development Services Built for the Demands of Tomorrow",
      para: "AI is no longer optional for growth, and our custom artificial intelligence services reflect this momentum. At Appigma, we help businesses adapt to future changes through:",
      demands: [
        {
          id: 1,
          data: "$500,000",
          description:
            "saved annually by reducing costs through intelligent automation",
        },
        {
          id: 2,
          data: "25%",
          description:
            "faster workflows, eliminating delays and inefficiencies",
        },
        {
          id: 3,
          data: "40%",
          description: "quicker decision-making using AI-driven insights",
        },
        {
          id: 4,
          data: "15%",
          description:
            "revenue growth through personalized AI-powered customer experiences",
        },
      ],
      bgImg: demandBgImage,
    },
    servies: {
      title: "Our Artificial Intelligence Development Services",
      data: [
        {
          id: 1,
          title: "AI App Development",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
        {
          id: 2,
          title: "Custom AI Software Development",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
        {
          id: 3,
          title: "Generative AI Development Services",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
        {
          id: 4,
          title: "AI Agent Solutions",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
        {
          id: 5,
          title: "Enterprise AI Solution",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
        {
          id: 6,
          title: "AI Consulting Services",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
        {
          id: 7,
          title: "Machine Learning Models",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
        {
          id: 8,
          title: "AI System Integration & Optimization",
          description:
            "We develop secure and scalable AI apps for task automation and data processing. Backed by proven expertise, our AI app development services bring speed and accuracy to day-to-day tasks.",
        },
      ],
    },
    expertise: {
      title: "We Have Mastered Every AI Model",
      stack: AI_STACK,
      bgImg: expertiseBgImg,
    },
    multiDomain: {
      title:
        "Appigma: The Only Artificial Intelligence Development Company With Multi-Domain Expertise",
      description:
        "Holding the status of a top Artificial Intelligence development company, our core expertise isn't just about offering AI services. We excel in the areas that matter most for impact and scalability. Instead of a broad checklist, we bring unmatched depth and specialization into:",
      data: MULTI_DOMAIN_SERVICES,
    },
    leading_business: {
      title:
        "Join the List of Leading Businesses Using AI to Streamline Operations and Accelerate Growth",
      description:
        "Our artificial intelligence solutions help businesses operate more efficiently and make decisions faster. See how companies are benefiting from smarter workflows and tangible growth with Appigma.",
      btnContent: "Get Your Free AI Consultation Today",
      bgImg: readyAICtaBgImg,
    },
    powered_solution: {
      title: "Our AI-Powered Solutions Are Changing Every Industry",
      description:
        "At Appigma, we meet the artificial intelligence solution requirements of multiple industries. Our custom AI software development services help businesses adopt AI technologies to solve their industry-specific challenges.",
      industry: INDUSTRY,
    },
    innovation: {
      title: "Take the Next Step Toward AI-Drive Innovation With Appigma",
      description:
        "Reserve a free 30-minute consultation with our AI experts. See how our solutions can streamline processes, boost revenue, and align with your business goals.",
      btnContent: "Schedule Your Free Consultation Call",
      bgImg: innovationBgImg,
    },
  },
  "mobile-application-development": {
    path: "/services/mobile-application-development",
    heroSection: {
      title: "Mobile Application Development Services",
      description:
        "Appigma is a leading mobile app development company specializing in creating innovative iOS and Android applications. We transform your ideas into powerful mobile solutions that drive business growth and deliver exceptional user experiences across all platforms.",
      btnContent: "Get Your Mobile App Quote",
      heroBgImg: aiAutomationBgImage,
    },
    trustedBrands: {
      title: "Trusted by the Top Brands",
      logo: BRANDS,
    },
    demand: {
      title: "Mobile App Development Services Built for Modern Business Needs",
      para: "Mobile apps are essential for business success in today's digital landscape. Our mobile application development services help businesses reach their customers effectively through:",
      demands: [
        {
          id: 1,
          data: "85%",
          description:
            "of users prefer mobile apps over mobile websites for better experience",
        },
        {
          id: 2,
          data: "3x",
          description:
            "higher engagement rates compared to traditional web platforms",
        },
        {
          id: 3,
          data: "40%",
          description: "increase in customer retention with mobile app solutions",
        },
        {
          id: 4,
          data: "60%",
          description:
            "of consumers make purchases through mobile apps regularly",
        },
      ],
      bgImg: demandBgImage,
    },
    servies: {
      title: "Our Mobile Application Development Services",
      data: [
        {
          id: 1,
          title: "iOS App Development",
          description:
            "We create native iOS applications using Swift and Objective-C, ensuring optimal performance and seamless integration with Apple's ecosystem.",
        },
        {
          id: 2,
          title: "Android App Development",
          description:
            "We develop robust Android applications using Kotlin and Java, delivering high-performance apps that work across all Android devices.",
        },
        {
          id: 3,
          title: "Cross-Platform Development",
          description:
            "We build cross-platform mobile apps using React Native and Flutter, reducing development time and costs while maintaining native performance.",
        },
        {
          id: 4,
          title: "UI/UX Design",
          description:
            "We design intuitive and engaging user interfaces that provide exceptional user experiences and drive user engagement.",
        },
        {
          id: 5,
          title: "App Store Optimization",
          description:
            "We optimize your app for app stores to improve visibility, downloads, and user acquisition through strategic ASO techniques.",
        },
        {
          id: 6,
          title: "Mobile App Testing",
          description:
            "We conduct comprehensive testing across devices and platforms to ensure your app works flawlessly for all users.",
        },
        {
          id: 7,
          title: "App Maintenance & Support",
          description:
            "We provide ongoing maintenance, updates, and technical support to keep your mobile app running smoothly and securely.",
        },
        {
          id: 8,
          title: "Enterprise Mobile Solutions",
          description:
            "We develop custom enterprise mobile applications that integrate with your existing systems and workflows.",
        },
      ],
    },
    expertise: {
      title: "We Master Every Mobile Technology",
      stack: AI_STACK,
      bgImg: expertiseBgImg,
    },
    multiDomain: {
      title:
        "Appigma: Your Trusted Mobile App Development Partner",
      description:
        "As a leading mobile app development company, we bring years of experience and expertise to every project. Our team specializes in creating mobile solutions that drive business growth:",
      data: MULTI_DOMAIN_SERVICES,
    },
    leading_business: {
      title:
        "Join Leading Businesses Using Mobile Apps to Drive Growth and Engagement",
      description:
        "Our mobile app development services help businesses connect with customers, streamline operations, and increase revenue. See how companies are achieving success with mobile-first strategies.",
      btnContent: "Get Your Free Mobile App Consultation",
      bgImg: readyAICtaBgImg,
    },
    powered_solution: {
      title: "Our Mobile Solutions Are Transforming Every Industry",
      description:
        "At Appigma, we develop mobile applications for various industries, helping businesses leverage mobile technology to solve industry-specific challenges and drive innovation.",
      industry: INDUSTRY,
    },
    innovation: {
      title: "Take the Next Step Toward Mobile Innovation With Appigma",
      description:
        "Schedule a free consultation with our mobile app experts. Discover how our mobile solutions can transform your business and drive measurable results.",
      btnContent: "Schedule Your Free Consultation Call",
      bgImg: innovationBgImg,
    },
  },
  "web-application-development": {
    path: "/services/web-application-development",
    heroSection: {
      title: "Web Application Development Services",
      description:
        "Appigma is a premier web development company creating modern, scalable web applications that drive business success. We build responsive, fast, and secure web solutions using cutting-edge technologies and best practices.",
      btnContent: "Get Your Web App Quote",
      heroBgImg: aiAutomationBgImage,
    },
    trustedBrands: {
      title: "Trusted by the Top Brands",
      logo: BRANDS,
    },
    demand: {
      title: "Web Application Development Services for Digital Success",
      para: "A strong web presence is crucial for business success in the digital age. Our web application development services help businesses establish their online presence through:",
      demands: [
        {
          id: 1,
          data: "94%",
          description:
            "of first impressions are related to web design and user experience",
        },
        {
          id: 2,
          data: "2.6x",
          description:
            "higher conversion rates with responsive web design",
        },
        {
          id: 3,
          data: "50%",
          description: "increase in user engagement with optimized web performance",
        },
        {
          id: 4,
          data: "75%",
          description:
            "of users judge credibility based on website design",
        },
      ],
      bgImg: demandBgImage,
    },
    servies: {
      title: "Our Web Application Development Services",
      data: [
        {
          id: 1,
          title: "Frontend Development",
          description:
            "We create stunning, responsive user interfaces using React, Vue.js, and Angular, ensuring exceptional user experiences across all devices.",
        },
        {
          id: 2,
          title: "Backend Development",
          description:
            "We build robust server-side applications using Node.js, Python, and PHP, ensuring scalability, security, and optimal performance.",
        },
        {
          id: 3,
          title: "Full-Stack Development",
          description:
            "We provide end-to-end web development services, from database design to frontend implementation, delivering complete web solutions.",
        },
        {
          id: 4,
          title: "E-commerce Development",
          description:
            "We develop custom e-commerce platforms and integrate with popular platforms like Shopify and WooCommerce to boost online sales.",
        },
        {
          id: 5,
          title: "API Development",
          description:
            "We create RESTful and GraphQL APIs that enable seamless integration between different systems and third-party services.",
        },
        {
          id: 6,
          title: "Web App Testing",
          description:
            "We conduct thorough testing across browsers and devices to ensure your web application works perfectly for all users.",
        },
        {
          id: 7,
          title: "Performance Optimization",
          description:
            "We optimize web applications for speed, SEO, and user experience to maximize conversions and user satisfaction.",
        },
        {
          id: 8,
          title: "Web Maintenance & Support",
          description:
            "We provide ongoing maintenance, updates, and technical support to keep your web application secure and up-to-date.",
        },
      ],
    },
    expertise: {
      title: "We Master Every Web Technology",
      stack: AI_STACK,
      bgImg: expertiseBgImg,
    },
    multiDomain: {
      title:
        "Appigma: Your Trusted Web Development Partner",
      description:
        "As a leading web development company, we combine technical expertise with creative design to deliver web solutions that drive business growth:",
      data: MULTI_DOMAIN_SERVICES,
    },
    leading_business: {
      title:
        "Join Leading Businesses Using Web Applications to Drive Digital Success",
      description:
        "Our web development services help businesses establish a strong online presence, engage customers, and drive conversions. See how companies are achieving digital success with our web solutions.",
      btnContent: "Get Your Free Web Development Consultation",
      bgImg: readyAICtaBgImg,
    },
    powered_solution: {
      title: "Our Web Solutions Are Transforming Every Industry",
      description:
        "At Appigma, we develop web applications for various industries, helping businesses leverage web technology to solve industry-specific challenges and drive digital transformation.",
      industry: INDUSTRY,
    },
    innovation: {
      title: "Take the Next Step Toward Web Innovation With Appigma",
      description:
        "Schedule a free consultation with our web development experts. Discover how our web solutions can transform your business and drive measurable results.",
      btnContent: "Schedule Your Free Consultation Call",
      bgImg: innovationBgImg,
    },
  },
};
