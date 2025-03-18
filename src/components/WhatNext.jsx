"use client"
import { HiXCircle } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function WhatsNext() {
  const steps = [
    { text: "Configure storage settings", link: "/docs/storage" },
    { text: "Implement file manager UI", link: "/docs/ui" },
    { text: "Set up access control", link: "/docs/access" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto shadow-lg border-gray-300 mb-10">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <HiXCircle className="text-gray-500 text-lg cursor-pointer" />
          <h2 className="text-lg font-semibold text-gray-900">What's Next?</h2>
        </div>
      </div>

      {/* Subtext */}
      <p className="text-gray-500 text-sm mb-4">
        After installation, check out our documentation to learn how to:
      </p>

      {/* List of Steps */}
      <div className="space-y-3">
        {steps.map((item, index) => (
          <Link key={index} href={item.link} className="block">
            <div className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-lg transition group">
              <span>{item.text}</span>
              <FaArrowRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
