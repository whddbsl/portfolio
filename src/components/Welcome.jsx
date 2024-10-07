import React, { useState, useEffect } from 'react';

const Welcome = ({ onEnter }) => {
  const [text, setText] = useState('');
  const fullText = '최적화의 세계로\n오신 것을 환영합니다';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setTimeout(onEnter, 500);
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden text-white bg-black cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-4xl font-bold text-center md:text-6xl">
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index === 0 && <br />}
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};

export default Welcome;
