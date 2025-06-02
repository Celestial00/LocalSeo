export default function InfoSection() {

  

  return (
    <section className="bg-white text-black py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 leading-tight [font-family:'Poppins',sans-serif]">
          Simplest Way To Manage Google Business Profile
        </h2>

        {/* Three Points */}
        <div className="grid gap-8 md:grid-cols-3 text-left">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 [font-family:'Poppins',sans-serif]">Grow Quikly</h3>
            <p className="text-gray-600">
              Placeholder description for point one.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg [font-family:'Poppins',sans-serif]">
            <h3 className="text-xl font-semibold mb-2">Post or Schedule</h3>
            <p className="text-gray-600">
              Placeholder description for point two.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg [font-family:'Poppins',sans-serif]">
            <h3 className="text-xl font-semibold mb-2">monitor Growth</h3>
            <p className="text-gray-600">
              Placeholder description for point three.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
