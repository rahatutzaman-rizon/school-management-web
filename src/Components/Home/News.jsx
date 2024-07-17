
const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1">
          {/* School Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">INTRODUCING<br />SCHOOL OF LIFE</h2>
            <p className="text-sm mb-4">Offering state-of-the-art skating rink designed by Glenrich</p>
            <p className="text-sm text-navy-600">First time in Bangladesh!</p>
            <div className="mt-4 flex justify-between items-end">
              <img src="https://i.ibb.co/H2MH6dT/SCHOOL-OF-LIFE-1.png" alt="Glenrich Logo" className="h-8" />
              <img src="https://i.ibb.co/H2MH6dT/SCHOOL-OF-LIFE-1.png" alt="School of Life Logo" className="h-8" />
            </div>
          </div>

          {/* Latest Updates */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-navy-600 mb-4">LATEST UPDATES</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">Admission is Open</li>
              <li className="mb-2">Parents are most welcome to visit the campus. Book your appointment Now!</li>
              <li>Admission is Open</li>
            </ul>
          </div>
        </div>

        {/* Middle Column - News & Media */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-navy-600 mb-4">NEWS & MEDIA</h2>
          <div className="space-y-4">
            {['Learning by doing: Going beyond textbooks to raise exceptional young adults.',
              'Mr. Ramesh Mudgal of Glenrich International School',
              'Empowering students to take brand Bangladesh to the next level.',
              'শেখাবে জীবন: বিস্তারিত হোক সাফল্যের মাপকাঠি',
              'INTERNATIONAL "SCHOOL OF LIFE" IN THE HEART OF BANGLADESH!'].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 rounded-md">
                    <img src="https://i.ibb.co/H2MH6dT/SCHOOL-OF-LIFE-1.png" alt="" />
                </div>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Admission Query */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">ADMISSION QUERY</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Parents/Guardian Name *</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name of Student *</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Student's Date of Birth *</label>
              <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Grade</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option>--- Select Grade ---</option>
                {/* Add grade options here */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">How can we help?</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows="4" placeholder="Drop your message here..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;