"use client"

import React, { useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b rounded-xl py-6 border-gray-200">
          <button
            className="w-full text-left py-2 px-4  focus:outline-none"
            onClick={() => toggleItem(index)}
          >
          <span className='text-xl border-2 py-2 px-[14px] rounded-full font-semibold mx-2'>{item.id}</span> {item.title}
          </button>
          {openIndex === index && (
            <div className="p-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
