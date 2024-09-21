const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="w-full max-w-xl p-6 rounded-lg shadow-xl bg-background">
        <h2 className="mb-4 text-2xl font-bold text-primary">Profile</h2>
        <h3 className="mb-1 text-xl font-semibold text-secondary">김종윤(1999.04.14), 서울시 노원구</h3>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-accent">학력</h3>
            <p className="text-secondary">
              숭실대학교 산업정보시스템공학과 졸업
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent">기술 스택</h3>
            <p className="text-secondary">
              React, TypeScript, Node.js, GraphQL, AWS
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent">자격증</h3>
            <ul className="list-disc list-inside text-secondary">
              <li>SQLD</li>
              <li>OPIc - IH</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent">Awards</h3>
            <ul className="list-disc list-inside text-secondary">
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
          className="w-full px-4 py-2 mt-6 transition duration-300 rounded bg-primary text-background hover:bg-opacity-80"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
