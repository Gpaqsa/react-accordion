import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ faqs }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      {faqs.map((element, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={index}
          title={element.title}
          num={index}
        >
          {element.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Thinking in React"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </>
  );
};

export default Accordion;
