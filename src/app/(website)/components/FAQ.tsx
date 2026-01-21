"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  const faqs = [
    {
      id: "item-1",
      question: "How It Works?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      id: "item-2",
      question: "How It Works?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      id: "item-3",
      question: "How It Works?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-16 md:px-4">
      <div className="container mx-auto ">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          FAQs
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-[#2a2a2a] border-none rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:no-underline hover:bg-[#333333] transition-colors text-left">
                <span className="font-medium text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-400 text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;