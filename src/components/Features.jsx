import { FaGithub } from "react-icons/fa";
import { TbDragDrop2 } from "react-icons/tb";
import { MdAccessTime, MdEventNote } from "react-icons/md";
import { IoMdCode } from "react-icons/io";

export default function Features() {
  const features = [
    {
      icon: "📂",
      title: "Easy Integration",
      description: "Simple installation via Composer and seamless integration with Laravel projects.",
    },
    {
      icon: <FaGithub />,
      title: "Multiple Storage Support",
      description: "Support for multiple storage disks with customizable settings.",
    },
    {
      icon: <TbDragDrop2 />,
      title: "Drag & Drop Upload",
      description: "Intuitive drag and drop interface with progress tracking and multiple file upload support.",
    },
    {
      icon: <MdAccessTime />,
      title: "Access Control",
      description: "Built-in file access permissions and user authentication integration for secure file management.",
    },
    {
      icon: <IoMdCode />,
      title: "File Operations",
      description: "Complete file operations including copy, cut, paste, rename, and soft delete with trash management.",
    },
    {
      icon: <MdEventNote />,
      title: "Event System",
      description: "Comprehensive event system for file uploads, deletions, moves, and other operations.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Powerful File Management Features</h2>
        <p className="mt-4 text-gray-600 text-center">
          Everything you need for efficient file management in Laravel.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-[#eaeaea] hover:border-[#0070f3] hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-[16px] text-[#0070f3] bg-gradient-to-br from-[rgba(0,112,243,0.1)] to-[rgba(0,166,255,0.1)] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
