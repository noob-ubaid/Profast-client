import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
    question: "How does this posture corrector work?",
    answer:
      "The posture corrector provides gentle alignment and support to your shoulders and back, encouraging proper posture throughout daily activities.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Posture Pro is designed to fit most teens and adults comfortably. For young children or specific medical conditions, please consult a healthcare professional before use.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Yes! Regular use can promote better posture, which may help reduce back pain caused by slouching or poor alignment.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "This model does not include smart vibration alerts. It focuses on providing physical support without electronic components.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can sign up for stock alerts on our website. We’ll notify you via email as soon as the product becomes available.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Frequently Asked Questions
        </h2>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-gray-300 mb-4 dark:border-gray-700 p-4 rounded-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg text-black font-medium">
                {faq.question}
              </span>
              <FaChevronDown
                className={`w-4 h-4 text-gray-700 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
