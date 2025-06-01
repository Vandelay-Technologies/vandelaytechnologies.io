'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CornerDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

export default function FaqSection({ faqData }: { faqData: { question: string, answer: string }[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="team" className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Frequently Asked Questions</h2>
        <div className="w-full space-y-0 relative border">
          <CornerDecorator />
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-dashed border-primary/30 last:border-b-0"
            >
              <button
                className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-base focus:outline-none cursor-pointer"
                onClick={() => toggleItem(index)}
                aria-expanded={activeIndex === index ? "true" : "false"}
                aria-controls={`faq-content-${index}`}
              >
                {faq.question}
                <ChevronDown
                  className={`size-5 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                id={`faq-content-${index}`}
                className={`px-4 overflow-hidden transition-all duration-200 ${activeIndex === index ? 'max-h-[1000px] pb-4' : 'max-h-0'}`}
              >
                <div
                  className="prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
