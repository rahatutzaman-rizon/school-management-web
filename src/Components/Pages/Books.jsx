

const BooksPage = () => {
  const libraryStats = [
    { label: 'Books', value: '37,000+' },
    { label: 'Encyclopedic Archive', value: 'Audio & Visual' },
    { label: 'Cataloging', value: 'Digital' },
    { label: 'Weekly Classes', value: 'Grades 1-7' },
  ];

  return (
    <div className="bg-navy-600 min-h-screen text-white">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Our Library</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Welcome to Our World of Books</h2>
          <p className="text-lg mb-4">
            We use the latest textbooks prescribed by Cambridge for our students. Our Library is a treasure trove of knowledge, offering a diverse collection of books, journals, and media resources to enrich our students' learning experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Library Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {libraryStats.map((stat, index) => (
              <div key={index} className="bg-white text-navy-600 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Our Collection</h2>
          <div className="bg-white text-navy-600 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Extensive collection of fiction and non-fiction books</li>
              <li>International journals and local newspapers</li>
              <li>Audio and Visual media covering various subjects</li>
              <li>Books from both national and international authors</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Library Features</h2>
          <div className="bg-white text-navy-600 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Digital cataloging for easy book searching</li>
              <li>Computer-based searching facilities</li>
              <li>Routine-based library classes for Grades 1-7</li>
              <li>Encouragement for students to borrow and read widely</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-navy-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Glenrich School Library. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BooksPage;