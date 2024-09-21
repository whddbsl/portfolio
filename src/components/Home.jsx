import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";
import ProfileModal from "./ProfileModal";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const openProfileModal = () => setIsProfileModalOpen(true); 
  const closeProfileModal = () => setIsProfileModalOpen(false); 

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-text">
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-8">
          <img
            src="/profile.png"
            alt="whddbsl's profile"
            className={`object-cover mx-auto border-4 rounded-full shadow-lg h-60 w-60 border-primary transition-all duration-1000 ${
              isVisible ? "scale-100" : "scale-90"
            }`}
          />
        </div>
        <h1
          className={`mb-4 text-4xl font-black tracking-tight md:text-5xl transition-all duration-1000 ${
            isVisible ? "translate-y-0" : "translate-y-4"
          }`}
        >
          whddbsl,{" "}
          <span className="text-primary">최적화를 위해 일하는 개발자</span>
        </h1>
        <p
          className={`mb-8 text-xl font-bold text-accent transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          웹 개발자 | 소통왕 | 문제 해결사
        </p>
        <div
          className={`max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mb-4 text-lg leading-relaxed text-secondary">
            저는 혁신적인 솔루션을 통해 웹 성능을 최적화하는 것을 좋아합니다.
          </p>
          <p className="text-lg leading-relaxed text-secondary">
            사용자 경험 향상과 시스템 효율성 개선이 제 주요 목표입니다.
          </p>
        </div>
        <div
          className={`space-x-4 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <button
            onClick={openProfileModal}
            className="px-6 py-2 font-bold transition duration-300 rounded-full bg-primary text-background hover:bg-opacity-80 hover:scale-105"
          >
            Profile
          </button>
          <button
            onClick={openContactModal}
            className="px-6 py-2 font-bold transition duration-300 border-2 rounded-full border-accent text-accent hover:bg-accent hover:text-background hover:scale-105"
          >
            Contact
          </button>
        </div>
      </div>
      <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};

export default Home;
