

const PolicyPage = () => {
  return (
    <div className="bg-navy-600 min-h-screen">
      <header className=" text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Glenrich School Policies</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
        
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Who we are</h3>
            <p className="mb-4">Our website address is: https://dpsstsdhaka.org/</p>

            <h3 className="text-xl font-semibold mb-3">What personal data we collect and why we collect it</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Comments</h4>
            <p className="mb-4">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor IP address and browser user agent string to help spam detection.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Media</h4>
            <p className="mb-4">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Cookies</h4>
            <p className="mb-4">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>

            {/* Add more sections as needed */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-white font-semibold mb-4">Scholarship Policies</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">STS Merit Scholarship Policies</h3>
            <h4 className="text-lg font-semibold mt-4 mb-2">Up To 100% Merit-based Scholarship for Grades 8 and 10</h4>
            <p className="mb-4">With great delight, we would like to share that the second cycle of the Glenrich School Dhakas Up To 100% Merit-based Scholarship, for both Glenrich and non-DPS students of Grades 8 and 10, has begun.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">GlenStar Scholarship</h4>
            <p className="mb-4">A new and exciting opportunity, titled Glenstar Scholarship, has been opened for Grades 3-8 students starting from 2024-25.</p>

            {/* Add more scholarship details */}
          </div>
        </section>

        <section>
          <h2 className="text-2xl  text-white font-semibold mb-4">Other School Policies</h2>
          <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-6">
            <li className="mb-2">Glenrich CYBER-BULLYING POLICY</li>
            <li className="mb-2">Glenrich SCHOOL T & L POLICY</li>
            <li className="mb-2">Glenrich PD POLICY</li>
            <li className="mb-2">Glenrich CHILD PROTECTION POLICY</li>
          </ul>
        </section>
      </main>

      <footer className="bg-navy-600 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <p>&copy;2024 Glenrich School. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PolicyPage;