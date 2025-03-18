import React from "react";

const features = [
  {
    title: "File Operations",
    tag: "Core Feature",
    tagColor: "bg-blue-500",
    items: [
      "Create, rename, and delete files/folders",
      "Copy, cut, and paste operations",
      "Drag and drop file organization",
      "File preview and download",
      "Bulk file operations",
    ],
  },
  {
    title: "Upload System",
    tag: "Enhanced",
    tagColor: "bg-blue-500",
    items: [
      "Drag & drop file uploads",
      "Upload progress tracking",
      "File type restrictions",
      "Size limit validation",
      "Multiple file upload",
    ],
  },
  {
    title: "Storage Management",
    tag: "Advanced",
    tagColor: "bg-blue-500",
    items: [
      "Multiple disk support (local/cloud)",
      "Custom disk configuration",
      "Directory structure management",
      "File organization tools",
      "Storage space monitoring",
    ],
  },
  {
    title: "Integration",
    tag: "Laravel",
    tagColor: "bg-blue-500",
    items: [
      "Easy Laravel integration",
      "Blade components included",
      "Event system support",
      "Configurable middleware",
      "Extensible architecture",
    ],
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center px-4 container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900">
          Comprehensive Features
        </h2>
        <p className="text-gray-500 mt-2">
          Discover all the powerful capabilities of Advanced File Manager
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 container mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 text-gray-700 
            border border-transparent hover:border-[#0070f3] 
            transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <span
                className={`text-white text-sm px-3 py-1 rounded-full ${feature.tagColor}`}
              >
                {feature.tag}
              </span>
            </div>
            <ul className="space-y-2">
              {feature.items.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 space-y-3">
                  <span className="text-blue-500">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
