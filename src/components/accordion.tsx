"use client"
import React, { useState } from 'react';
import Styles from "./pages.module.css"

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={Styles.card}>
      <div className={Styles.head} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={Styles.cb}>{content}</div>}
    </div>
  );
};

export default Accordion;


