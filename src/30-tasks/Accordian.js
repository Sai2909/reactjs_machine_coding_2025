import { useState } from "react";

export const FAQAccordion = ({ items }) => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="faq-accordion">
            {items.map((item, index) => {
                const isActive = active === index ? "active" : "";
                return (
                    <div
                        key={index}
                        className={`faq-accordion-item ${isActive}`}
                        onClick={() => handleToggle(index)}
                    >
                        <div className="question">{item.question}</div>
                        {isActive && <div className="answer">{item.answer}</div>}
                    </div>
                );
            })}
        </section>
    );
};

const faqItems = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        question: "What are React hooks?",
        answer: "Hooks are functions that let you use state and lifecycle features in function components."
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React."
    },
    {
        question: "What is the Virtual DOM?",
        answer: "The Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM using React's reconciliation algorithm."
    },
    {
        question: "What is the use of useState hook?",
        answer: "The useState hook allows you to add state to function components in React."
    }
];

export const FAQAccordionExample = () => (
    <section className="page">
        <FAQAccordion items={faqItems} />
    </section>
);
