import React from 'react';

const TransportPage = () => {
  const transportFeatures = [
    "Pick-up & Drop-off Service in Uttara, Airport, Khilkhet, Baridhara, Baridhara DOHS, Bashundhara, Gulshan, Banani, Mohakhali, Mohakhali DOHS, Dhanmondi Mirpur & Mirpur DOHS.",
    "Capacity: 500",
    "Air-Conditioned Vehicles",
    "CCTV Surveillance & Vehicle Trackers",
    "Bus Attendant",
    "First Aid & Fire Extinguisher Facility",
    "Well Trained Drivers"
  ];

  return (
    <div className="bg-navy-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Transport Services</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Transport Features:</h2>
          <ul className="list-disc pl-5 space-y-2">
            {transportFeatures.map((feature, index) => (
              <li key={index} className="text-gray-700">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Transport Application Form for Students</h2>
          <p className="text-white mb-4">
            To apply for our transport service, please fill out the application form below.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Open Application Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransportPage;