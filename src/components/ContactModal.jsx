const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-50">
      <div className="w-full max-w-sm p-6 rounded-lg shadow-xl bg-background">
        <h2 className="mb-4 text-2xl font-bold text-primary">Contact</h2>
        <ul className="mb-4 space-y-2">
          <li>
            <strong className="text-accent">GitHub:</strong>{" "}
            <a
              href="https://github.com/whddbsl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/whddbsl
            </a>
          </li>
          <li>
            <strong className="text-accent">Email:</strong>{" "}
            <a
              href="mailto:whddbs04140@naver.com"
              className="text-blue-400 hover:underline"
            >
              whddbs04140@naver.com
            </a>
          </li>
          <li>
            <strong className="text-accent">Phone:</strong> 010-2780-1832
          </li>
        </ul>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 transition duration-300 rounded bg-primary text-background hover:bg-opacity-80"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
