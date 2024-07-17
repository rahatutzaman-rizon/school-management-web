import React from 'react';

const CafeteriaPage = () => {
  const cafeteriaFeatures = [
    "Spacious dining area",
    "Nutritious and healthy snacks",
    "Freshly prepared lunches",
    "Wide variety of juices",
    "Strictly controlled hygienic conditions",
    "Highly proficient team of professionals",
    "Safe and delicious food as highest priority",
    "Best quality ingredients from reliable suppliers"
  ];

  return (
    <div className="bg-navy-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">School Cafeteria</h1>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8 backdrop-filter backdrop-blur-lg">
          <p className="text-lg mb-6">
            The School has a spacious cafeteria which provides nutritious and healthy snacks, lunch and juices prepared in strictly controlled and hygienic conditions. Our highly proficient team of professionals working in the cafeteria cater safe and delicious food to the students with their highest priority. We only use the best quality ingredients from reliable suppliers.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Cafeteria Features:</h2>
          <ul className="list-disc pl-5 space-y-2">
            {cafeteriaFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg">
          <h2 className="text-2xl font-semibold mb-4">Weekly Menu</h2>
          <p className="mb-4">
            Our weekly menu is carefully crafted to provide a balanced and varied diet for our students. Check out this week's offerings:
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            View Weekly Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CafeteriaPage;