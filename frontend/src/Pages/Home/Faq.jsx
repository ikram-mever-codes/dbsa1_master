import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const faqData = [
    {
      question: "What is a DB?",
      answer:
        "In electrical terms, a 'DB' stands for Distribution Board. Other terms for a Distribution board is Electrical Board, or Switchboard (But most prefer Distribution Boards ;)",
    },
    {
      question: "What is a Distribution Board?",
      answer:
        "A Distribution Board (DB) is an essential part of an electrical system that distributes electrical power to various circuits within a building. It houses circuit breakers, fuses, and other protective devices that control and safeguard the electricity flow to different areas. Distribution Boards ensure safe and efficient distribution of electricity across residential, commercial, and industrial spaces.",
    },
    {
      question:
        "What is the difference between a switchboard and a distribution board?",
      answer:
        "A switchboard is just another term for an electrical panel used to control and distribute electricity across multiple circuits in an electrical system, often seen in commercial and industrial applications. Switchboards and Distribution Boards distribute power from a main circuit to various sub-circuits. The distribution board focuses on circuit protection and division of power.",
    },
    {
      question: "What is the main function of the Distribution Board?",
      answer:
        "The main function of a Distribution Board is to safely distribute electrical power from a main source to various circuits within a building. It also protects each circuit from electrical faults through circuit breakers, earth leakages or fuses, ensuring that individual areas of the building receive the appropriate amount of power while keeping the system safe.",
    },
    {
      question: "Where should the Distribution Board be placed?",
      answer:
        "A Distribution Board should be placed in an accessible, dry, and well-ventilated area, away from direct heat and moisture. Ideally, it should be located at a convenient height in a secure but easily reachable location, allowing authorized personnel to access it for maintenance or emergencies.",
    },
    {
      question: "What equipment is in a Distribution Board?",
      answer:
        "A Distribution Board typically contains the following equipment:\n• Circuit breakers or fuses for circuit protection\n• Main switch to control the entire power supply\n• Busbars to distribute power to various circuits\n• Neutral links and earth links for safety grounding\n• Metering equipment and Current transformers\n• Earth Leakage units\n• Cable and Wiring",
    },
    {
      question: "Can a Distribution Board be in a cupboard?",
      answer:
        "Yes, a Distribution Board can be installed in a cupboard as long as the cupboard meets electrical code requirements. It should be accessible for maintenance and emergency situations, and the cupboard should allow for adequate ventilation to prevent overheating of the board.",
    },
    {
      question:
        "What is the difference between a Distribution Board and an MCB?",
      answer:
        "A Distribution Board is a panel that houses multiple protective devices, including MCBs (Miniature Circuit Breakers), which protect individual circuits. An MCB is a specific device inside the Distribution Board that prevents overloading or short circuits in individual circuits. The DB is the entire enclosure, while an MCB is a component within it.",
    },
    {
      question: "What is the main switch on a DB board?",
      answer:
        "The main switch on a Distribution Board controls the entire power supply entering the board. It allows users to turn off all circuits connected to the board at once, typically used during maintenance or in case of an emergency.",
    },
    {
      question: "Why do you need a Distribution Board?",
      answer:
        "A Distribution Board is essential for safely distributing electrical power to different circuits in a building. It provides control, safety, and protection by isolating individual circuits, reducing the risk of overloads, short circuits, and other electrical faults.",
    },
    {
      question: "How do I choose a Distribution Board?",
      answer:
        "To choose the right Distribution Board, consider factors like:\n• Number of circuits required to meet your needs\n• Power rating to handle the expected load\n• Type of breakers needed for your equipment\n• Size and location of installation space.\nConsulting an electrical engineer can help ensure you select the appropriate board for your needs. You can also contact us and we can point you in the right direction.",
    },
    {
      question: "How many Volts is a DB?",
      answer:
        "A Distribution Board typically operates at standard voltage levels, such as 230V in single-phase systems or 400V in three-phase systems, depending on the type of installation and regional electrical standards. It’s designed to accommodate the building's voltage and current needs safely.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full py-[4rem] my-[2rem] px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6">
            <div
              className="flex items-center justify-between bg-[#F1F1F1] p-4 rounded-lg cursor-pointer hover:bg-[#E5E5E5] transition duration-300"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <FaMinus className="text-xl text-[#525CEB]" />
              ) : (
                <FaPlus className="text-xl text-[#525CEB]" />
              )}
            </div>
            <div
              className={`overflow-hidden mt-2 ${
                activeIndex === index ? "max-h-[500px]" : "max-h-0"
              } transition-all duration-300 ease-in-out`}
            >
              <p className="text-gray-600 text-lg px-4 py-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
