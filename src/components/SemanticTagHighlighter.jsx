import { useState, useEffect } from "react";

const SemanticTagHighlighter = () => {
  const [isHighlighting, setIsHighlighting] = useState(false);

  // ALT + T 키로 하이라이팅 토글 기능
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey && event.key === "t") {
        setIsHighlighting((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 스타일 추가하는 부분 (모달 내부와 외부 구분)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .semantic-highlight {
        box-shadow: 0 0 0 2px red !important; /* 레이아웃에 영향을 덜 주는 스타일 */
        
        z-index: 9999; /* 모달과 충돌하지 않도록 z-index 설정 */
      }
      .semantic-highlight::before {
        content: attr(data-semantic-tag);
        
        top: -20px;
        left: 0;
        background-color: red;
        color: white;
        padding: 2px 5px;
        font-size: 12px;
        z-index: 10000;
      }
      .modal .semantic-highlight {
        box-shadow: 0 0 0 2px blue !important; /* 모달 내부 태그에 별도 스타일 */
        position: relative; /* relative를 설정하여 ::before 요소가 제대로 위치할 수 있도록 */
        z-index: 9999; /* 모달 내부에서도 태그 이름이 표시되도록 */
      }
      .modal .semantic-highlight::before {
        background-color: blue; /* 모달 내부 태그 이름의 배경색 */
        z-index: 10000; /* 모달 내부에서도 시맨틱 태그 이름을 올바르게 표시 */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // 시멘틱 태그 하이라이팅 로직
  useEffect(() => {
    const highlightSemanticTags = () => {
      const semanticTags = [
        "header",
        "nav",
        "main",
        "article",
        "section",
        "aside",
        "footer",
      ];

      // 모달 외부 시멘틱 태그 처리
      semanticTags.forEach((tag) => {
        const elementsOutsideModal = document.querySelectorAll(
          `${tag}:not(.modal ${tag})`
        );
        elementsOutsideModal.forEach((elem) => {
          if (isHighlighting) {
            elem.classList.add("semantic-highlight");
            elem.setAttribute("data-semantic-tag", tag);
          } else {
            elem.classList.remove("semantic-highlight");
            elem.removeAttribute("data-semantic-tag");
          }
        });

        // 모달 내부 시멘틱 태그 처리
        const elementsInsideModal = document.querySelectorAll(`.modal ${tag}`);
        elementsInsideModal.forEach((elem) => {
          if (isHighlighting) {
            elem.classList.add("semantic-highlight");
            elem.setAttribute("data-semantic-tag", tag);
          } else {
            elem.classList.remove("semantic-highlight");
            elem.removeAttribute("data-semantic-tag");
          }
        });
      });
    };

    highlightSemanticTags();

    // MutationObserver를 사용해 DOM 변경을 감지하고 다시 하이라이팅
    const observer = new MutationObserver(highlightSemanticTags);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [isHighlighting]);

  return null;
};

export default SemanticTagHighlighter;
