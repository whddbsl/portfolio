import React from "react";
import ProjectCard from "./ProjectCard";

// 아이콘 컴포넌트들 (실제로는 적절한 아이콘 라이브러리를 사용하거나 SVG를 직접 만들어 사용하세요)
const WebIcon = () => (
  <svg
    className="w-6 h-6 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);
const AIIcon = () => (
  <svg
    className="w-6 h-6 text-purple-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const BlogIcon = () => (
  <svg
    className="w-6 h-6 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    />
  </svg>
);

const Project = () => {
  const projects = [
    {
      title: "Field 홈페이지",
      description:
        "Field 회사를 위한 반응형 웹사이트로, 회사 정보와 서비스를 소개합니다.",
      techStack: ["React", "Tailwind", "Next.js"],
      githubLink: "https://github.com/yourusername/field-homepage",
      demoLink: "https://field-homepage.vercel.app",
      icon: <WebIcon />,
    },
    {
      title: "AI 그림일기",
      description:
        "사용자의 일기 내용을 바탕으로 AI가 그림을 생성해주는 웹 애플리케이션입니다.",
      techStack: ["Vue.js", "Node.js", "OpenAI"],
      githubLink: "https://github.com/yourusername/ai-diary",
      demoLink: "https://ai-diary-app.herokuapp.com",
      icon: <AIIcon />,
    },
    {
      title: "SSR 블로그",
      description:
        "Next.js를 활용한 서버사이드 렌더링 블로그 플랫폼으로, SEO에 최적화되어 있습니다.",
      techStack: ["Next.js", "GraphQL", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/ssr-blog",
      demoLink: "https://ssr-blog-example.vercel.app",
      icon: <BlogIcon />,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center text-white">
          프로젝트
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
