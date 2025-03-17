export default function DetailedFeatures() {
    const features = [
      {
        title: "File Operations",
        description: "Create, rename, delete, copy, and move files and folders.",
        icon: "📄",
      },
      {
        title: "Upload System",
        description: "Drag & drop uploads with progress tracking and file type restrictions.",
        icon: "⬆️",
      },
      {
        title: "Storage Management",
        description: "Support for multiple storage disks and custom configurations.",
        icon: "💾",
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Comprehensive Features</h2>
            <p className="mt-2 text-gray-600">Discover all the powerful capabilities of Advanced File Manager</p>
          </div>
  
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