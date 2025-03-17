export default function Features() {
    const features = [
      {
        icon: "📂",
        title: "Easy Integration",
        description: "Simple installation via Composer and seamless integration with Laravel projects.",
      },
      {
        icon: "☁️",
        title: "Multiple Storage Support",
        description: "Support for multiple storage disks with customizable settings.",
      },
      {
        icon: "🖱️",
        title: "Drag & Drop Upload",
        description: "Intuitive drag and drop interface with progress tracking.",
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }