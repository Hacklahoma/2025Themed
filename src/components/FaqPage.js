import React, { useState } from 'react';
import './FaqPage.css';

const FaqPage = () => {

    const faqQuestions = [
        "What's a hack?",
        "Does it cost anything?",
        "Any travel reimbursement?",
        "Will there be food?",
        "Do I need experience?",
        "Are there teams?",
        "What should I bring?",
        "What is the code of conduct?",
        "Who can attend?",
        "Can I start my project before?",
        "Do I need to stay the whole time?",
        "Can't find your question?"
    ];

    const faqAnswers = [
        "A hackathon is an event where programmers and others involved in software development collaborate intensively on software projects.",
        "No, participation is free!",
        "Yes, we offer travel reimbursements for eligible participants. Please check our travel policy for details.",
        "Absolutely! We'll provide meals throughout the event.",
        "No prior experience is required. Beginners are welcome!",
        "You can work individually or in teams of up to 4 people.",
        "Bring your laptop, chargers, and any hardware you might need.",
        "We adhere to the MLH Code of Conduct to ensure a welcoming environment for all.",
        "Students and recent graduates are welcome to attend.",
        "Projects should be started during the hackathon to ensure fairness.",
        "You're free to come and go as you please, but we encourage you to stay for the full experience!",
        "Feel free to reach out to us at contact@example.com."
    ];

    const pastelColors = ['#FAEDCB', '#C9E4DE', '#C6DEF1', '#DBCDF0', '#F2C6DE', '#F7D9C4'];

    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index);
    };

    const closeModal = () => {
        setSelectedQuestionIndex(null);
    };

    return (
        <div className="faq-page">

            {/* Desktop Layout */}
            <div className="faq-page-desktop">

                <div className="faq-container">
                    {/* 12 Unique Sections with Questions */}
                    {faqQuestions.map((question, index) => (
                        <div
                            className="faq-section"
                            key={index}
                            style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
                            onClick={() => handleQuestionClick(index)}
                        >
                            {question}
                        </div>
                    ))}
                </div>

            </div>

            {/* Mobile Layout */}
            <div className="faq-page-mobile">

            </div>

            {/* Modal */}
            {selectedQuestionIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <div className="modal-text">
                            {faqAnswers[selectedQuestionIndex]}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default FaqPage;
