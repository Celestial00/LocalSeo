export default function FAQSection() {
  const faqs = [
    {
      question: "Is this Google-compliant?",
      answer: "Yes. All tools follow GBP guidelines and best practices.",
    },
    {
      question: "Do I need to install anything?",
      answer: "Nope. 100% cloud-based — access from anywhere.",
    },
    {
      question: "Can I use it for multiple businesses?",
      answer: "Yes! Our Pro & Agency plans support unlimited locations.",
    },
    {
      question: "What if I need help?",
      answer: "Live chat, email support, and video tutorials available 24/7.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-cyan-400 to-blue-600 py-20 px-4 [font-family:'Poppins',sans-serif] sm:px-6 font-poppins text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12"> FAQs</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white  rounded-2xl p-6 text-left shadow-lg"
            >
              <h3 className="text-lg text-black sm:text-xl font-semibold mb-2">
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base text-black ">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
