"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import fileImage from "../../public/advanced-file-manager.png";

// Hero Component
export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  // Set the App Element after mounting to avoid SSR issues
  useEffect(() => {
    Modal.setAppElement("body"); // Using 'body' instead of '#__next' for wider support
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-blue-50/50 to-blue-100/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                Laravel Package
              </span>
              <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-6">
                Advanced File Manager for Laravel Applications
              </h1>
              <p className="mt-6 text-gray-600 text-xl">
                A powerful and user-friendly file management solution for Laravel applications. Features drag & drop uploads, multiple storage support, file operations, access control, and a beautiful interface - everything you need for professional file management.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                {/* Install Now Button */}
                <button className="bg-blue-600 text-white px-12 py-3 rounded-full hover:bg-blue-700 transition-all flex items-center gap-2">
                  <div className="flex flex-col">
                    <span className="text-sm opacity-90">READY TO START</span>
                    <span className="font-semibold">Install Now</span>
                  </div>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                {/* Watch Video Demo Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all flex items-center gap-2 relative"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold">Watch Video Demo</span>
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                </button>
              </div>
            </div>

            {/* Preview Window */}
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-900 rounded-lg shadow-2xl p-4 hover:scale-102 transition-transform">
                <Image
                  height={200}
                  width={400}
                  src={fileImage}
                  alt="File Manager Preview"
                  className="rounded-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* React Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Video Demo"
        className="bg-white rounded-lg shadow-lg w-[90%] max-w-3xl aspect-video relative mx-auto mt-32 p-4"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
        shouldCloseOnOverlayClick={true} // Allows closing modal by clicking outside
        closeTimeoutMS={200} // Smooth close animation
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 transition"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Video Embed */}
        <iframe
          className="w-full h-full rounded-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Video Demo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
}
