import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((pre) => !pre);
  }

  return (
    <div className="accordion-container">
      <div className="content-and-title">
        <h3 className="title">{title}</h3>
        {isOpen && (
          <div className="content">
            <p>{content}</p>
          </div>
        )}
      </div>
      <button className="button" onClick={handleClick}>
        {isOpen ? "-" : "+"}{" "}
      </button>
    </div>
  );
}
export default Accordion;
