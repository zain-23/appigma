import { Button } from "@/shared/common";
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

export const SERVICES = {
  "ai-automation": {
    path: "/services/ai-development",
    heroSection: {
      title: "AI Development Services",
      description:
        "Tekrevol is a renowned AI development services company in the USA, trusted worldwide for its automation solutions. We develop artificial intelligence software and apps for businesses of all sizes to discard manual processes. Our AI solutions are designed to streamline workflows and augment operations for measurable results without unnecessary delays.",
      button: Button,
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
  },
};
