"use client";
import Image from "next/image";

const supportData = [
  {
    id: 1,
    name: "Buy Me A Coffee",
    description: "Support with a one-time donation",
    image: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
    type: "image",
    buttonText: "Buy me a coffee",
    buttonLink: "https://www.buymeacoffee.com/",
  },
  {
    id: 2,
    name: "GitHub Sponsors",
    description: "Support with monthly sponsorship",
    icon: (
      <svg
        className="w-12 h-12 mx-auto mb-4 text-purple-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.203 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2z" />
      </svg>
    ),
    type: "icon",
    buttonText: "Sponsor on Github",
    buttonLink: "https://github.com/sponsors",
  },
  {
    id: 3,
    name: "Ko-fi",
    description: "Support with a quick donation",
    image: "https://storage.ko-fi.com/cdn/kofi_stroke_cup.svg",
    type: "image",
    buttonText: "Support on Ko-fi",
    buttonLink: "https://ko-fi.com/",
  },
];

export default function Support() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium border">
            Support
          </span>
          <h2 className="text-3xl font-bold mt-4">Support the Development</h2>
          <p className="mt-2 text-gray-600">
            Help keep Advanced File Manager free and actively maintained
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {supportData.map((support) => (
            <div
              key={support.id}
              className="bg-white p-6 rounded-lg border border-gray-300 text-center transition-transform duration-300 hover:scale-105"
            >
              {support.type === "image" ? (
                <Image
                  height={100}
                  width={150}
                  src={support.image}
                  alt={support.name}
                  className="mx-auto mb-4 w-36 h-10"
                />
              ) : (
                support.icon
              )}
              <h3 className="text-xl font-semibold">{support.name}</h3>
              <p className="mt-2 text-gray-600">{support.description}</p>
              <a
                href={support.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 rounded-lg text-[#0070f3] border border-[#0070f3] transition-colors duration-300 hover:bg-[#0070f3] hover:text-white"
              >
                {support.buttonText}
              </a>
            </div>
          ))}
        </div>
        
      </div>
      <p className="mt-10 container px-4 mx-auto text-center text-gray-400 text-[14px] break-words max-w-[90%] sm:max-w-[600px]">
  Your support helps maintain and improve Advanced File Manager ❤️
</p>
    </section>
  );
}
