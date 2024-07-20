import React, { useState } from "react";

const Accordion = ({ faqs }) => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
  return (
    <>
      {faqs.map((each, index) => (
        <div
          key={index}
          className={`item ${isOpen === index ? "open" : ""}`}
          onClick={() => handleToggle(index)}
        >
          <p className="number">0{index + 1}</p>
          <p className="title">{each.title}</p>
          <p className="icon">{isOpen === index ? "-" : "+"}</p>
          {isOpen === index && (
            <div className="content-box">
              <p>{each.text}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion;
