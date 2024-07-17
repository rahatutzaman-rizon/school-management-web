

const Banner = () => {
  return (
    <div className="bg-sky-50 p-8 flex flex-col md:flex-row relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-50%] right-[-25%] w-1/2 h-full bg-sky-100 rounded-full z-0"></div>
      
      {/* Content Section */}
      <div className="flex-1 z-10">
        <h1 className="text-4xl font-bold text-navy-600 mb-4">
          A safe and joyful place for your lovely children
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to our school, where academic excellence meets moral values. 
          Located in a nurturing environment, we offer a holistic education, 
          fostering students to thrive academically and spiritually.
        </p>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300 mb-6">
          Enroll your kid
        </button>
        <div className="mb-4">
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-2 text-gray-600">4.8 rating on Google</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">📞</span>
          <span className="text-gray-600">(+880) 1894-940800</span>
        </div>
      </div>

      {/* Images Section */}
 
      <div className="relative w-full max-w-md mx-auto mt-8">
  <img 
    src="https://i.ibb.co/JdDVHnC/home.jpg" 
    alt="Children in colorful classroom" 
    className="w-56 h-64 object-cover rounded-lg"
  />
  <img 
    src="https://i.ibb.co/4tv5LJ9/home2.jpg" 
    alt="Students in uniform" 
    className="absolute top-1/3 left-1/4 w-56 h-64 object-cover rounded-lg shadow-lg"
  />
</div>


      
    </div>
  );
};

export default Banner;