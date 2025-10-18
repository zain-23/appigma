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
// Portoflio
import portfolioLogo1 from "../../../public/assets/services/portfolio/reckn.webp";
import portfolio1 from "../../../public/assets/services/portfolio/reckn_img.webp";
import portfolioLogo2 from "../../../public/assets/services/portfolio/pure_plank_logo.webp";
import portfolio2 from "../../../public/assets/services/portfolio/pure_plank_img.webp";

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
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.machine_learning,
  },
  {
    id: 2,
    title: "Generative AI & LLM Engineering",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.generative_ai,
  },
  {
    id: 3,
    title: "Deep Learning",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.deep_learning,
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.predictive,
  },
  {
    id: 5,
    title: "Natural Language Processing (NLP)",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.natural_language,
  },
  {
    id: 6,
    title: "Data Science",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.data_science,
  },
  {
    id: 7,
    title: "Computer Vision",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.computer_vision,
  },
  {
    id: 8,
    title: "Speech Recognition",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
    icon: Icon.speech_recognition,
  },
  {
    id: 9,
    title: "Reinforcement Learning",
    description:
      "As an experienced AI/ML development company, we don’t just deploy models but refine them for scale, resilience, and precision. Our expertise converts raw data into predictive intelligence that guides strategy and business growth.",
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
        "Tekrevol is a renowned AI development services company in the USA, trusted worldwide for its automation solutions. We develop artificial intelligence software and apps for businesses of all sizes to discard manual processes. Our AI solutions are designed to streamline workflows and augment operations for measurable results without unnecessary delays.",
      btnContent: "Talk To Your AI Consultant",
      heroBgImg: aiAutomationBgImage,
    },
    trustedBrands: {
      title: "Trusted by the Top Brands",
      logo: BRANDS,
    },
    demand: {
      title: "AI Development Services Built for the Demands of Tomorrow",
      para: "AI is no longer optional for growth, and our custom artificial intelligence services reflect this momentum. At TekRevol, we help businesses adapt to future changes through:",
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
        "TekRevol: The Only Artificial Intelligence Development Company With Multi-Domain Expertise",
      description:
        "Holding the status of a top Artificial Intelligence development company, our core expertise isn’t just about offering AI services. We excel in the areas that matter most for impact and scalability. Instead of a broad checklist, we bring unmatched depth and specialization into:",
      data: MULTI_DOMAIN_SERVICES,
    },
    leading_business: {
      title:
        "Join the List of Leading Businesses Using AI to Streamline Operations and Accelerate Growth",
      description:
        "Our artificial intelligence solutions help businesses operate more efficiently and make decisions faster. See how companies are benefiting from smarter workflows and tangible growth with TekRevol.",
      btnContent: "Get Your Free AI Consultation Today",
      bgImg: readyAICtaBgImg,
    },
    powered_solution: {
      title: "Our AI-Powered Solutions Are Changing Every Industry",
      description:
        "At Tekrevol, we meet the artificial intelligence solution requirements of multiple industries. Our custom AI software development services help businesses adopt AI technologies to solve their industry-specific challenges.",
      industry: INDUSTRY,
    },
    innovation: {
      title: "Take the Next Step Toward AI-Drive Innovation With Appigma",
      description:
        "Reserve a free 30-minute consultation with our AI experts. See how our solutions can streamline processes, boost revenue, and align with your business goals.",
      btnContent: "Schedule Your Free Consultation Call",
      bgImg: innovationBgImg,
    },
    portoflio: {
      title: "Apps That Drive Impact: Our Development Portfolio",
      description:
        "As a leading mobile application development company, we take immense pride in a portfolio shaped by impactful solutions that drive measurable success.",
      portoflios: [
        {
          id: 1,
          logo: portfolioLogo1,
          title:
            "Bridging the Gap between Local Residents Leveraging Real-time Locations",
          details: [
            {
              id: 1,
              title: "ROI Growth",
              rate: "35%",
            },
            {
              id: 2,
              title: "Growth in conversion rates",
              rate: "35%",
            },
          ],
          bgColor: "bg-[#4041ab]",
          img: portfolio1,
          slug: "/test",
        },
        {
          id: 2,
          logo: portfolioLogo2,
          title:
            "Bridging the Gap between Local Residents Leveraging Real-time Locations",
          details: [
            {
              id: 1,
              title: "ROI Growth",
              rate: "35%",
            },
            {
              id: 2,
              title: "Growth in conversion rates",
              rate: "35%",
            },
          ],
          img: portfolio2,
          bgColor: "bg-[#4041ab]",
          slug: "/test",
        },
      ],
    },
  },
  "mobile-application-development": {
    path: "/services/ai-development",
    heroSection: {
      title: "AI Development Services",
      description:
        "Tekrevol is a renowned AI development services company in the USA, trusted worldwide for its automation solutions. We develop artificial intelligence software and apps for businesses of all sizes to discard manual processes. Our AI solutions are designed to streamline workflows and augment operations for measurable results without unnecessary delays.",
      btnContent: "Talk To Your AI Consultant",
      heroBgImg: aiAutomationBgImage,
    },
    trustedBrands: {
      title: "Trusted by the Top Brands",
      logo: BRANDS,
    },
    demand: {
      title: "AI Development Services Built for the Demands of Tomorrow",
      para: "AI is no longer optional for growth, and our custom artificial intelligence services reflect this momentum. At TekRevol, we help businesses adapt to future changes through:",
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
        "TekRevol: The Only Artificial Intelligence Development Company With Multi-Domain Expertise",
      description:
        "Holding the status of a top Artificial Intelligence development company, our core expertise isn’t just about offering AI services. We excel in the areas that matter most for impact and scalability. Instead of a broad checklist, we bring unmatched depth and specialization into:",
      data: MULTI_DOMAIN_SERVICES,
    },
    leading_business: {
      title:
        "Join the List of Leading Businesses Using AI to Streamline Operations and Accelerate Growth",
      description:
        "Our artificial intelligence solutions help businesses operate more efficiently and make decisions faster. See how companies are benefiting from smarter workflows and tangible growth with TekRevol.",
      btnContent: "Get Your Free AI Consultation Today",
      bgImg: readyAICtaBgImg,
    },
    powered_solution: {
      title: "Our AI-Powered Solutions Are Changing Every Industry",
      description:
        "At Tekrevol, we meet the artificial intelligence solution requirements of multiple industries. Our custom AI software development services help businesses adopt AI technologies to solve their industry-specific challenges.",
      industry: INDUSTRY,
    },
    innovation: {
      title: "Take the Next Step Toward AI-Drive Innovation With Appigma",
      description:
        "Reserve a free 30-minute consultation with our AI experts. See how our solutions can streamline processes, boost revenue, and align with your business goals.",
      btnContent: "Schedule Your Free Consultation Call",
      bgImg: innovationBgImg,
    },
    portoflio: {
      title: "Apps That Drive Impact: Our Development Portfolio",
      description:
        "As a leading mobile application development company, we take immense pride in a portfolio shaped by impactful solutions that drive measurable success.",
      portoflios: [
        {
          id: 1,
          logo: portfolioLogo1,
          title:
            "Bridging the Gap between Local Residents Leveraging Real-time Locations",
          details: [
            {
              id: 1,
              title: "ROI Growth",
              rate: "35%",
            },
            {
              id: 2,
              title: "Growth in conversion rates",
              rate: "35%",
            },
          ],
          img: portfolio1,
          bgColor: "bg-[#4041ab]",
          slug: "/test",
        },
        {
          id: 2,
          logo: portfolioLogo2,
          title:
            "Bridging the Gap between Local Residents Leveraging Real-time Locations",
          details: [
            {
              id: 1,
              title: "ROI Growth",
              rate: "35%",
            },
            {
              id: 2,
              title: "Growth in conversion rates",
              rate: "35%",
            },
          ],
          img: portfolio2,
          bgColor: "bg-[#4041ab]",
          slug: "/test",
        },
      ],
    },
  },
  "web-application-development": {
    path: "/services/ai-development",
    heroSection: {
      title: "AI Development Services",
      description:
        "Tekrevol is a renowned AI development services company in the USA, trusted worldwide for its automation solutions. We develop artificial intelligence software and apps for businesses of all sizes to discard manual processes. Our AI solutions are designed to streamline workflows and augment operations for measurable results without unnecessary delays.",
      btnContent: "Talk To Your AI Consultant",
      heroBgImg: aiAutomationBgImage,
    },
    trustedBrands: {
      title: "Trusted by the Top Brands",
      logo: BRANDS,
    },
    demand: {
      title: "AI Development Services Built for the Demands of Tomorrow",
      para: "AI is no longer optional for growth, and our custom artificial intelligence services reflect this momentum. At TekRevol, we help businesses adapt to future changes through:",
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
        "TekRevol: The Only Artificial Intelligence Development Company With Multi-Domain Expertise",
      description:
        "Holding the status of a top Artificial Intelligence development company, our core expertise isn’t just about offering AI services. We excel in the areas that matter most for impact and scalability. Instead of a broad checklist, we bring unmatched depth and specialization into:",
      data: MULTI_DOMAIN_SERVICES,
    },
    leading_business: {
      title:
        "Join the List of Leading Businesses Using AI to Streamline Operations and Accelerate Growth",
      description:
        "Our artificial intelligence solutions help businesses operate more efficiently and make decisions faster. See how companies are benefiting from smarter workflows and tangible growth with TekRevol.",
      btnContent: "Get Your Free AI Consultation Today",
      bgImg: readyAICtaBgImg,
    },
    powered_solution: {
      title: "Our AI-Powered Solutions Are Changing Every Industry",
      description:
        "At Tekrevol, we meet the artificial intelligence solution requirements of multiple industries. Our custom AI software development services help businesses adopt AI technologies to solve their industry-specific challenges.",
      industry: INDUSTRY,
    },
    innovation: {
      title: "Take the Next Step Toward AI-Drive Innovation With Appigma",
      description:
        "Reserve a free 30-minute consultation with our AI experts. See how our solutions can streamline processes, boost revenue, and align with your business goals.",
      btnContent: "Schedule Your Free Consultation Call",
      bgImg: innovationBgImg,
    },
    portoflio: {
      title: "Apps That Drive Impact: Our Development Portfolio",
      description:
        "As a leading mobile application development company, we take immense pride in a portfolio shaped by impactful solutions that drive measurable success.",
      portoflios: [
        {
          id: 1,
          logo: portfolioLogo1,
          title:
            "Bridging the Gap between Local Residents Leveraging Real-time Locations",
          details: [
            {
              id: 1,
              title: "ROI Growth",
              rate: "35%",
            },
            {
              id: 2,
              title: "Growth in conversion rates",
              rate: "35%",
            },
          ],
          img: portfolio1,
          bgColor: "bg-[#4041ab]",
          slug: "/test",
        },
        {
          id: 2,
          logo: portfolioLogo2,
          title:
            "Bridging the Gap between Local Residents Leveraging Real-time Locations",
          details: [
            {
              id: 1,
              title: "ROI Growth",
              rate: "35%",
            },
            {
              id: 2,
              title: "Growth in conversion rates",
              rate: "35%",
            },
          ],
          img: portfolio2,
          bgColor: "bg-[#4041ab]",
          slug: "/test",
        },
      ],
    },
  },
};
