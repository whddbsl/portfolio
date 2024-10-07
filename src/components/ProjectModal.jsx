import { useEffect, useRef } from "react";

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  icon,
  features,
  challenges,
  outlines,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <aside className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 modal ">
      <article
        className="w-auto max-w-3xl mx-auto my-6"
        ref={modalRef}
      >
        <div className="flex flex-col w-full bg-gray-800 border-0 rounded-lg shadow-lg ">
          <header className="flex items-start justify-between p-5 border-b border-gray-600 border-solid rounded-t">
            <h2 className="text-3xl font-semibold text-white">{title}</h2>
            <button
              className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-white bg-transparent border-0 "
              onClick={onClose}
              aria-label="Close modal"
            >
              <span className="block w-6 h-6 text-2xl text-white bg-transparent ">
                X
              </span>
            </button>
          </header>
          <main className="flex-auto p-6">
            <section className="flex items-center mb-4">
              <img
                src={icon}
                alt={`${title} icon`}
                className="w-12 h-12 mr-4 rounded-full"
              />
              <p className="text-lg leading-relaxed text-gray-300">
                {description}
              </p>
            </section>

            {outlines && (
              <section className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  프로젝트 개요
                </h3>
                <ul className="pl-5 mt-2 text-gray-300 list-disc">
                  {outlines.map((outline, index) => (
                    <li key={index}>{outline}</li>
                  ))}
                </ul>
              </section>
            )}
            {features && (
              <section className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  주요 개발 내용
                </h3>
                <ul className="pl-5 mt-2 text-gray-300 list-disc">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}
            {challenges && (
              <section className="mb-4">
                <h3 className="text-xl font-semibold text-white">
                  성과 및 학습
                </h3>
                <ul className="pl-5 mt-2 text-gray-300 list-disc">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </section>
            )}
          </main>
        </div>
      </article>
    </aside>
  );
};

export default ProjectModal;