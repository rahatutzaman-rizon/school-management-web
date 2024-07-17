

const SchoolTiming = () => {
  const earlyYears = [
    { class: 'Reception 1(Playgroup)', firstShift: '9:00 am - 11:15 am', secondShift: '11:30 am - 1:45 pm' },
    { class: 'Reception 2(Nursery)', firstShift: '8:15 am - 11:40 am', secondShift: '11:15 am - 2:30 pm' },
    { class: 'Year 1(Kindergarten)', firstShift: '8:15 am - 12:20 pm', secondShift: 'Not applicable' },
  ];

  const primaryYears = [
    { class: 'Year 2-3(Grades 1-2)', schoolTiming: '8:15 am - 1:45 pm', salahTiming: '1:25 pm - 1:40 pm' },
    { class: 'Year 4-5(Grades 3-4)', schoolTiming: '8:15 am - 2:00 pm', salahTiming: '1:25 pm - 1:40 pm' },
  ];

  const middleYears = [
    { class: 'Year 6-7(Grades 5-6)', schoolTiming: '8:15 am - 2:50 pm', salahTiming: '1:25 pm - 1:40 pm' },
  ];

  const TableSection = ({ title, data, headers }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-navy-600">
              {headers.map((header, index) => (
                <th key={index} className="border p-2 text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={'bg-navy-600' }>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="border p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-navy-600 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-navy-600">School Timing</h1>
      
      <TableSection 
        title="For Early Years (Playgroup, Nursery, Kindergarten)" 
        data={earlyYears} 
        headers={['Class', 'First Shift', 'Second Shift']}
      />

      <TableSection 
        title="For Primary Years (Grades 1-4)" 
        data={primaryYears} 
        headers={['Class', 'School Timing', 'Salah Timing']}
      />

      <TableSection 
        title="For Middle Years (Grades 5-6)" 
        data={middleYears} 
        headers={['Class', 'School Timing', 'Salah Timing']}
      />

      <p className="text-sm italic mt-4">
        *School holds the right to change the school timing as per requirement.
      </p>
    </div>
  );
};

export default SchoolTiming;