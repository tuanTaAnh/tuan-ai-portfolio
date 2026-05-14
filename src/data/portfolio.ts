export type ProjectCategory =
  | "All"
  | "GenAI / RAG"
  | "Data Science"
  | "Backend / SaaS"
  | "Cloud / MLOps";

export type Project = {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  subtitle: string;
  description: string;
  impact: string[];
  stack: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export type Experience = {
  company: string;
  role: string;
  time: string;
  location: string;
  points: string[];
};

export type SkillGroup = {
  title: string;
  icon: "brain" | "server" | "database" | "cloud";
  skills: string[];
};

export const profile = {
  name: "Tuan Ta Anh",
  role: "AI Engineer",
  headline: "AI Engineer · GenAI · RAG · Backend APIs · Data Science",
  location: "Berlin, Germany",
  email: "anhtuan19981998@gmail.com",
  github: "https://github.com/tuanTaAnh",
  linkedin: "https://linkedin.com/in/ta-anh-tuan-ai-engineer",
  summary:
    "I design and build GenAI applications, RAG assistants, automation workflows, backend APIs, data science prototypes, and cloud-based AI pipelines that turn business problems into practical products.",
};

export const stats = [
  { value: "6+", label: "years building AI & data systems" },
  { value: "10+", label: "production-oriented AI / ML projects" },
  { value: "5+", label: "industries and business domains" },
  { value: "3+", label: "cloud ecosystems: GCP, AWS, Azure" },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "GenAI / RAG",
  "Data Science",
  "Backend / SaaS",
  "Cloud / MLOps",
];

export const projects: Project[] = [
    {
        title: "WortWander",
        category: "Backend / SaaS",
        subtitle: "Full-stack German vocabulary learning app",
        description:
          "A full-stack German vocabulary learning app with vocabulary management, collections, starred words, flashcards, MCQ practice, learning statistics, and AI-assisted example generation.",
        impact: [
          "Built full-stack vocabulary learning workflow",
          "Integrated React frontend with FastAPI backend",
          "Added flashcards, quiz, collections, and progress tracking",
        ],
        stack: [
          "React",
          "TypeScript",
          "Vite",
          "FastAPI",
          "SQLModel",
          "SQLite",
          "Docker",
          "Vercel",
        ],
        links: [
          {
            label: "Live Demo",
            href: "https://vobcabulary-learning-app-fe.vercel.app",
          },
          {
            label: "Frontend",
            href: "https://github.com/tuanTaAnh/vobcabulary-learning-app-fe",
          },
          {
            label: "Backend",
            href: "https://github.com/tuanTaAnh/vobcabulary-learning-app-be",
          },
        ],
    },
    {
    title: "Sovra Platform",
    category: "Backend / SaaS",
    subtitle: "Full-stack SaaS prototype with AI-ready architecture",
    description:
      "A full-stack platform prototype combining backend APIs, workflow logic, data processing, and a React interface for business-facing AI workflows.",
    impact: [
      "Backend/frontend integration",
      "Workflow-first product design",
      "Live demo deployed on Hugging Face",
    ],
    stack: ["React", "FastAPI", "Python", "Docker", "RAG-ready", "Hugging Face"],
    links: [
      {
        label: "Live Demo",
        href: "https://anhtuan19981998-sovra-frontend.hf.space",
      },
      {
        label: "Backend",
        href: "https://github.com/tuanTaAnh/Sovra-Platform",
      },
      {
        label: "Frontend",
        href: "https://github.com/tuanTaAnh/Sovra-Frontend",
      },
    ],
  },
  {
    title: "Churn Prediction on GCP",
    category: "Data Science",
    subtitle: "Banking churn model with MLOps and explainability",
    description:
      "Built churn prediction models for banking services using feature engineering, WoE encoding, XGBoost, Vertex AI tuning, BigQuery ML, and Looker dashboards.",
    impact: [
      "Processed around 400,000 customers monthly",
      "Optimized recall and F1 for retention campaigns",
      "Explained predictions with SHAP-based dashboards",
    ],
    stack: ["Python", "SQL", "XGBoost", "BigQuery ML", "Vertex AI", "Looker"],
  },
  {
    title: "Numoloo AI Calling Platform",
    category: "Backend / SaaS",
    subtitle: "AI core for call intelligence and SaaS operations",
    description:
      "Built AI call-analysis features for a US tech client, including sentiment, summaries, follow-ups, auto-tagging, email drafting, and opportunity detection.",
    impact: [
      "Turned raw call activity into structured outputs",
      "Integrated telephony, Slack, and billing workflows",
      "Used structured outputs and guardrails for production use",
    ],
    stack: [
      "LangChain",
      "ChatGPT",
      "Node.js",
      "PostgreSQL",
      "Telnyx",
      "Slack OAuth",
      "Stripe",
    ],
  },
  {
    title: "Bengo Legal AI Workflow",
    category: "GenAI / RAG",
    subtitle: "AI-assisted divorce case processing for legal teams",
    description:
      "Built GenAI/RAG workflows to classify cases, extract facts, timelines, claims, evidence, and support citation-grounded legal drafting.",
    impact: [
      "Structured raw legal documents into reusable case data",
      "Retrieval-guided drafting with Gemini + LangChain",
      "Designed APIs for intake, extraction, and drafting support",
    ],
    stack: ["Gemini", "LangChain", "GCP", "CloudSQL", "AlloyDB", "Python APIs"],
  },
  {
    title: "Drug Demand Forecasting",
    category: "Data Science",
    subtitle: "Forecasting for around 1,000 Japanese drugstores",
    description:
      "Built time-series and tree-based forecasting models to predict drug demand across stores and categories using LSTM, XGBoost, AWS MLOps, and business-focused metrics.",
    impact: [
      "Forecasted demand across around 1,000 stores",
      "Accuracy within around ±5% of actual demand",
      "Supported inventory planning and reduced shortage/overstock risk",
    ],
    stack: ["LSTM", "XGBoost", "SageMaker", "AWS Glue", "Step Functions"],
  },
  {
    title: "Company Info RAG Chatbot",
    category: "GenAI / RAG",
    subtitle: "Finance RAG assistant over reports and company data",
    description:
      "Converted PDF reports into clean knowledge chunks, generated embeddings, indexed them in Milvus, and used GPT to answer finance and company-information questions.",
    impact: [
      "PDF to Markdown processing",
      "Top-k retrieval with context precision evaluation",
      "Human evaluation loop for answer quality",
    ],
    stack: ["GPT-4o-mini", "Milvus", "Python", "Embeddings", "RAG"],
  },
  {
    title: "Online ML Fraud Detection",
    category: "Cloud / MLOps",
    subtitle: "Streaming feature pipeline and real-time inference",
    description:
      "Built a feature-store and streaming pipeline for fraud detection using message queues, Dataflow, tree-based ML models, and real-time inference design.",
    impact: [
      "Streaming data processing",
      "XGBoost and Random Forest models",
      "Designed real-time ML serving workflow",
    ],
    stack: ["Dataflow", "Feature Store", "XGBoost", "Random Forest", "GCP"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Digit Sense",
    role: "AI Engineer · Part-time / Remote",
    time: "08/2025 — 04/2026",
    location: "United Kingdom · Remote",
    points: [
      "Built GenAI workflows for legal document processing and AI-powered call intelligence.",
      "Integrated LLM outputs into backend APIs, SaaS workflows, telephony, Slack, and billing systems.",
      "Delivered production-oriented AI features with structured outputs, guardrails, and retrieval-guided drafting.",
    ],
  },
  {
    company: "VMO Holdings",
    role: "AI Engineer / AI Leader",
    time: "06/2024 — 06/2025",
    location: "Hanoi, Vietnam",
    points: [
      "Led RAG chatbot projects using Milvus, GPT, local LLMs, Ollama, LangChain, and Docker.",
      "Built offline voice food-ordering chatbot with Whisper.cpp, Coqui TTS, LLaMA 2/3, and FastAPI.",
      "Worked on real-time autonomous driving mapping with GPS/GNSS, IMU, camera streams, and AWS.",
    ],
  },
  {
    company: "Cloud Ace · Google Premier Partner",
    role: "AI Engineer & Data Science",
    time: "09/2022 — 05/2024",
    location: "Ho Chi Minh City, Vietnam",
    points: [
      "Delivered GCP AI/ML solutions across banking, retail, forecasting, fraud, recommendation, and GenAI.",
      "Built churn, bankruptcy, clustering, recommendation, and forecasting pipelines with BigQuery, Vertex AI, and Looker.",
      "Consulted clients on architecture, cloud migration, MLOps, dashboards, and production deployment.",
    ],
  },
  {
    company: "FPT Software",
    role: "Data Science & Data Engineer",
    time: "08/2020 — 09/2022",
    location: "Hanoi, Vietnam",
    points: [
      "Built Azure data warehouse pipelines using ADF, Synapse, SQL transformations, and query optimization.",
      "Developed demand forecasting models using LSTM and XGBoost for a Japanese drugstore chain.",
      "Worked with client requirements, production deployment, and data engineering maintenance.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLM",
    icon: "brain",
    skills: [
      "RAG",
      "LangChain",
      "Gemini",
      "ChatGPT",
      "Ollama",
      "Prompt Engineering",
      "Vector Search",
      "Embeddings",
    ],
  },
  {
    title: "Data Science & ML",
    icon: "database",
    skills: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "Random Forest",
      "K-Means",
      "ARIMA",
      "LSTM",
      "SHAP",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    skills: [
      "FastAPI",
      "Node.js",
      "Django",
      "REST APIs",
      "Webhooks",
      "Authentication",
      "Structured Outputs",
    ],
  },
  {
    title: "Cloud & Data",
    icon: "cloud",
    skills: [
      "GCP",
      "Vertex AI",
      "BigQuery",
      "AWS",
      "Azure",
      "Docker",
      "CloudSQL",
      "PostgreSQL",
      "Milvus",
    ],
  },
];