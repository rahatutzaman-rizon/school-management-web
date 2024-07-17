

const SummerCampPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-navy-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Glenrich Summer Camp 2024
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="border border-navy-600 rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              {/* Placeholder for the image - replace with your actual image */}
              <img 
                src="https://i.ibb.co/SRKC5Fj/Screen-Shot-Tool-20240716201808.png" 
                alt="Pottery by Clay Station" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-semibold mb-4 text-navy-600">
                Pottery by Clay Station
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ceramics has unlimited life and the option to make beautiful pieces of art that are sustainable, fun and creative. The course is designed and conducted by Clay Station, which is an open studio for rejuvenating one's soul. This is an opportunity for social interaction, creative exploration and simple hands-on play with clay.
              </p>
              <p className="mt-4 text-gray-700 font-semibold">
                Sign up for Pottery. It is being offered for the first time at this year's Glenrich Senior School Summer Camp.
              </p>
              <button className="mt-6 bg-navy-600 text-white py-2 px-4 rounded hover:bg-navy-700 transition duration-300">
                Sign Up for Pottery
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Glenrich Summer Camp. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SummerCampPage;