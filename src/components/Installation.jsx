"use client";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Install via Composer",
    command: "composer require devrabiul/advanced-file-manager",
  },
  {
    id: 2,
    title: "Publish Resources",
    command:
      'php artisan vendor:publish --provider="Devrabiul\\AdvancedFileManager\\AdvancedFileManagerServiceProvider"',
  },
  {
    id: 3,
    title: "Run Migrations",
    command: "php artisan migrate",
  },
];

export default function Installation() {
  const [copiedStep, setCopiedStep] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(id);
    setTimeout(() => setCopiedStep(null), 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-b bg-gray-50 from-gray-50 to-white" id="installation">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Installation
          </span>
          <h2 className="text-3xl font-bold mt-4">Quick Installation</h2>
          <p className="mt-2 text-gray-600">Get started in minutes with these simple steps</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-[#0070f3] bg-[#2b8bf854] py-[6px] px-3 rounded-full text-[12px]">Required</p>
              </div>
              <div className="mt-4 bg-gray-900 p-4 rounded-lg flex justify-between items-center">
                 <pre className="text-white text-sm whitespace-pre-wrap break-all flex-1">
                    {step.command}
                </pre>
                <button
                  onClick={() => handleCopy(step.command, step.id)}
                  className="text-white ml-4 p-2 hover:bg-gray-700 rounded transition cursor-pointer"
                >
                  {copiedStep === step.id ? <FaCheck className="text-green-400" /> : <FaCopy />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
