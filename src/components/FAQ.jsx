export default function FAQ() {
    const faqs = [
      {
        question: "What is Advanced File Manager?",
        answer: "A professional file management solution for Laravel applications.",
      },
      {
        question: "Which Laravel versions are supported?",
        answer: "Laravel 8.x and above, including Laravel 10.x.",
      },
      {
        question: "How do I customize storage configuration?",
        answer: "Edit the config file to define disks, upload limits, and allowed file types.",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              FAQ
            </span>
            <h2 className="text-3xl font-bold mt-4">Frequently Asked Questions</h2>
            <p className="mt-2 text-gray-600">Everything you need to know about Advanced File Manager</p>
          </div>
  
          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }