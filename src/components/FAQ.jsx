"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Advanced File Manager?",
      answer:
        "Advanced File Manager is a comprehensive Laravel package that provides professional file management capabilities. It includes features like drag & drop uploads, multiple storage support, access control, and advanced file operations, making it perfect for both simple and complex file management needs.",
      type: "General",
    },
    {
      question: "Which Laravel versions are supported?",
      answer:
        "Advanced File Manager supports Laravel 8.x and above, including the latest Laravel 10.x version. We regularly update the package to ensure compatibility with new Laravel releases and maintain backward compatibility where possible.",
      type: "Technical",
    },
    {
      question: "How do I customize storage configuration?",
      answer:
        "You can customize storage settings in the config/advanced-file-manager.php file. This includes configuring multiple disks, setting upload limits, defining allowed file types, and specifying storage paths. The package supports all Laravel filesystem drivers including local, S3, and other cloud storage services.",
      type: "Technical",
    },
    {
      question: "Can I integrate it with my existing Laravel application?",
      answer:
        "Yes! Advanced File Manager is designed to be easily integrated into existing Laravel applications. Simply install via Composer, publish the assets, and you're ready to go. The package provides Blade components and events that you can hook into your existing application logic.",
      type: "General",
    },
    {
      question: "How does the permission system work?",
      answer:
        "The package includes a flexible permission system that integrates with Laravel's authentication. You can define user roles, set file/folder permissions, and control access at both the individual and group levels. It's also compatible with popular Laravel permission packages like Spatie's Permission.",
      type: "General",
    },
    {
      question: "Is support available for this package?",
      answer:
        "Yes, we provide support through GitHub issues and discussions. The package is actively maintained, and we welcome bug reports, feature requests, and contributions from the community. Premium support options are also available for enterprise users.",
      type: "General",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600">
            Everything you need to know about Advanced File Manager.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 sm:p-6 transition-all duration-300 border border-gray-200"
            >
              {/* Question Section */}
              <div className="flex items-start sm:items-center justify-between">
                <button
                  className={`flex items-start sm:items-center justify-between w-full text-lg font-medium transition-all text-left ${
                    activeIndex === index ? "text-[#0070f3]" : "text-gray-900"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                 <div className="flex flex-row-reverse items-center gap-2">
                 {faq.question}
                   {/* Category Badge */}
              <p
                className={`mt-2 sm:mt-0 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  faq.type === "General"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {faq.type}
              </p>
                 </div>
                  <FaChevronDown
                    className={`ml-2 transition-transform ${
                      activeIndex === index
                        ? "rotate-180 text-blue-600"
                        : "text-gray-500"
                    }`}
                  />
                </button>
              </div>

              {/* Answer (Animated) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  activeIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Support Box */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 px-6 py-6 mt-10 bg-white border border-gray-300 rounded">
          <div className="p-3 text-[#0070f3] rounded-full bg-[#0071f32d] text-xl">
            <IoIosInformationCircleOutline />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-lg sm:text-xl">Still have questions?</h2>
            <p className="text-sm mt-1">
              Can't find the answer you're looking for? Please chat with our
              friendly team.
            </p>
          </div>
          <div>
            <button className="border border-gray-300 px-4 py-2 cursor-pointer rounded text-[#0070f3] hover:bg-[#0070f3] hover:border-[#0070f3] hover:text-white text-sm sm:text-base">
              Get Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
