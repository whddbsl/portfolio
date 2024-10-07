import SkillChart from './SkillChart';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'TailwindCSS', level: 70 },
    { name: 'StyledComponent', level: 65 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="w-full max-w-4xl p-8 text-white bg-gray-800 rounded-lg shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-primary">Profile</h2>
        <h3 className="mb-4 text-2xl font-semibold text-secondary">
          김종윤(1999.04.14), 서울시 노원구
        </h3>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-accent">Education</h3>
            <ul className="text-gray-300 list-disc list-inside">
              <li>2018.03 - 2025.02 숭실대학교 산업정보시스템공학과 졸업 예정</li>
              <li>2022.05 - 2022.09 멋쟁이사자처럼 프론트엔드 스쿨 6기</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-accent">기술 스택</h3>
            <div className="grid grid-cols-6 gap-6">
              {skills.map((skill) => (
                <SkillChart key={skill.name} skill={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-accent">자격증</h3>
            <ul className="text-gray-300 list-disc list-inside">
              <li>SQLD</li>
              <li>OPIc - IH</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-accent">Awards</h3>
            <ul className="text-gray-300 list-disc list-inside">
              <li>
                2024 한이음 ICT멘토링 OpenAI를 활용한 그림 일기 서비스 -
                한국정보산업연합회장상
              </li>
              <li>
                2024 한이음 ICT멘토링 서버사이드 SSR 웹 UI컴포넌트 오픈소스 빌더
                개발 - 한국정보산업연합회장상
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 mt-8 text-lg font-semibold transition duration-300 rounded bg-primary text-background hover:bg-opacity-80"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
