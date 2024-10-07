import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "FIELD, 전국산업공학도 동아리 ",
      description: "FIELD 동아리를 위한 반응형 웹사이트 개발 및 성능 최적화",
      longDescription:
        "이 프로젝트의 주요 목표는 전국 대학생 산업공학도 모임인 FIELD의 활동과 가치를 효과적으로 전달하는 것이었습니다. 웹 성능 최적화와 웹 표준 준수에 중점을 두어 개발을 진행했습니다.",
      techStack: ["React", "styledComponent", "PocketBase"],
      githubLink: "https://github.com/Hooked-On/Field_website",
      icon: "/icons/FieldIcon.png",
      inProgress: false,
      outlines: [
        "기간 : 2024.01 - 2024.03",
        "목표: 전국 대학생 산업공학도 모임 FIELD를 위한 반응형 웹사이트 개발 및 성능 최적화",
        "주요 기술: React, Styled Components, aceternity ui, Redux, Vite, PocketBase",
        "성과: Google Lighthouse 성능 점수 크게 향상, 모바일 사용성 개선, AWS를 통한 배포",
      ],
      features: [
        "React와 Vite를 활용한 SPA(Single Page Application) 구조 설계 및 구현",
        "반응형 웹 디자인 적용으로 웹, 모바일 동시 지원",
        "웹 성능 최적화 (이미지 최적화, 코드 스플리팅, 지연 로딩 등)",
        "HTML5 시맨틱 태그를 활용한 웹 접근성 및 SEO 개선",
      ],
      challenges: [
        "다양한 브라우저와 디바이스에서의 일관된 사용자 경험 구현",
        "대용량 이미지 및 비디오 콘텐츠의 효율적인 로딩 최적화",
        "복잡한 애니메이션 효과의 성능 최적화",
      ],
    },
    {
      title: "Diarist",
      description:
        "사용자의 일기 내용을 바탕으로 AI가 그림을 생성해주는 웹 애플리케이션입니다.",
      techStack: ["React", "Expo", "StyledComponent"],
      githubLink: "https://github.com/hanium-4ward/Diarist",
      icon: "/icons/DiaristIcon.png",
      inProgress: false,
    },
    {
      title: "Jiny UI",
      description:
        "Next.js를 활용한 서버사이드 렌더링 블로그 플랫폼으로, SEO에 최적화되어 있습니다.",
      techStack: ["PHP", "Laravel", "JavaScript"],
      githubLink: "https://github.com/jinyphp/jinyui2",
      icon: "/icons/JinyIcon.png",
      inProgress: false,
    },
    {
      title: "웹 성능 최적화 및 웹 표준",
      description: "웹 성능 최적화 및 웹 표준을 준수한 프로젝트입니다.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      githubLink: "",

      icon: "/icons/WebIcon.png",
      inProgress: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h1 className="mb-12 text-4xl font-bold text-center text-white">
          Projects
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
