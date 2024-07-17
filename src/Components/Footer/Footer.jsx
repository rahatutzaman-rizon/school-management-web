

const Footer = () => {
  return (
    <footer className="bg-navy-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and school name */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://i.ibb.co/H2MH6dT/SCHOOL-OF-LIFE-1.png" alt="Glenrich Logo" className="h-12 mr-3" />
            <div>
              <h2 className="text-xl font-bold">Glenrich</h2>
              <p className="text-sm">INTERNATIONAL SCHOOL</p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center md:justify-end">
            <div className="w-1/2 md:w-auto mb-4 md:mb-0 md:mr-8">
              <h3 className="font-bold mb-2">About Glenrich</h3>
              <ul className="text-sm">
                <li>Mission</li>
                <li>Vision & Philosophy</li>
                <li>Glenrich Values</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto mb-4 md:mb-0 md:mr-8">
              <h3 className="font-bold mb-2">Academics</h3>
              <ul className="text-sm">
                <li>Curriculum Overview</li>
                <li>Sports</li>
                <li>Performing Arts</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto mb-4 md:mb-0">
              <h3 className="font-bold mb-2">Admission</h3>
              <p className="text-sm bg-white text-navy-600 px-2 py-1 rounded">Admission going on</p>
              <p className="text-sm mt-2">Glenrich International School</p>
              <p className="text-sm">Plot No: E-3 & E-5</p>
              <p className="text-sm">Surmoliey Shorouk, Block-A</p>
              <p className="text-sm">Bashundhora R/A Dhaka-1229</p>
            </div>
          </div>

          {/* Contact information and social icons */}
          <div className="w-full md:w-auto text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm">Contact Number: +962767756777</p>
            <p className="text-sm mb-2">Email Address: info@glenrich.edu.bd</p>
            <div className="flex justify-center md:justify-end space-x-2 mb-2">
              <a href="#" className="bg-blue-600 text-white p-1 rounded">f</a>
              <a href="#" className="bg-blue-400 text-white p-1 rounded">in</a>
              <a href="#" className="bg-red-600 text-white p-1 rounded">yt</a>
            </div>
            <button className="bg-white text-navy-600 px-4 py-2 rounded">Contact us</button>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="bg-purple-800 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-2 md:mb-0">
            Copyright © {new Date().getFullYear()} Glenrich International School
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;