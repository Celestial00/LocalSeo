export default function GrowthHeroesGrid() {
  const heroes = [
    { icon: "🧑‍🔧", label: "Plumbers" },
    { icon: "🍕", label: "Restaurant Owners" },
    { icon: "🧘", label: "Yoga Studios" },
    { icon: "🧑‍⚕️", label: "Clinics" },
    { icon: "🧑‍💼", label: "Real Estate Agents" },
    { icon: "📷", label: "Photographers" },
    { icon: "💻", label: "SEO Freelancers" },
    { icon: "📢", label: "Digital Agencies" },
  ];

  return (
    <section className="white py-20 px-4 sm:px-6 font-poppins text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          🛠️ Built for Every Local Growth Hero
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {heroes.map((hero, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3">{hero.icon}</div>
              <p className="text-base sm:text-lg font-medium text-white">{hero.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
