

const NoticeCard = ({ title, date, category, excerpt, readMoreLink }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <div className="text-gray-500 text-xs">
          <span className="mr-2">{date}</span>
          <span>{category}</span>
        </div>
        <a href={readMoreLink} className="bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-green-800 transition duration-300">
          Read More
        </a>
      </div>
    </div>
  </div>
);

const NoticeGroup = () => {
  const notices = [
    {
      title: "Optional Leave Tomorrow for Grades 5-8 students",
      date: "May 14, 2024",
      category: "Notices",
      excerpt: "Optional Leave Tomorrow for Grades 5-8 students Dear Parents: Please note that there will be regular classes tomorrow, Wednesday, May 15, 2024, for grades 5 to 8; regular revision work will also go on. Students who have pending assignments submissions will need to come to school tomorrow.    However, if they want to prepare for...",
      readMoreLink: "#"
    },
    {
      title: "Grade 5-8: Curriculum Progress Report for the months Mar – Apr 2024",
      date: "May 5, 2024",
      category: "Notices",
      excerpt: "Curriculum Progress Report for the months Mar - Apr 2024 Grade 5 Grade 6 Grade 7 Grade 8...",
      readMoreLink: "#"
    },
    {
      title: "Revised Notice for the Final Term Pre-Examination PTM",
      date: "April 30, 2024",
      category: "Notices",
      excerpt: "Revised Notice for the Final Term Pre-Examination PTM Grades: 5- 9 Session: 2023-24 PTM Date: May 4, 3pm-6pm (Saturday) Dear Parents, Please join us on Campus May 4, Saturday for the Final Term Pre-Examination PTM to be held from 3pm-6pm. You can meet with the Class Teachers in their respective Homerooms for the time mentioned. Many of the...",
      readMoreLink: "#"
    },
    {
      title: "Notice for the Final Term Pre Examination PTM",
      date: "May 1, 2024",
      category: "Notices",
      excerpt: "Notice for the Final Term Pre Examination PTM Grade: 9 Session: 2023-24 PTM Date: May 4, 9am-1pm (Saturday)  Dear Parents, Please join us on Campus May 4, Saturday for the Final Term Pre-Examination PTM to be held from 9 am to 1 pm. You can meet with the Class Teachers in their respective Homerooms for...",
      readMoreLink: "#"
    },
    {
      title: "Notice for the Final Term Pre-Examination PTM",
      date: "May 2, 2024",
      category: "Notices",
      excerpt: "Notice for the Final Term Pre-Examination PTM Grades: 5-8 Session: 2023-24 PTM Date: May 4, 9am-1pm (Saturday) Dear Parents, Please join us on Campus May 4, Saturday for the Final Term Pre-Examination PTM to be held from 9 am to 1 pm. You can meet with the Class Teachers in their respective Homerooms for the time...",
      readMoreLink: "#"
    },
    {
      title: "Grade 5-9: Final Term Examination Schedule 2023-24",
      date: "April 28, 2024",
      category: "Notices",
      excerpt: "Grade 5-9 Final Term Examination Schedule 2023-24 Grade 5 Grade 6 Grade 7 Grade 8 Grade 9...",
      readMoreLink: "#"
    },
  ];

  return (
    <div className="bg-navy-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">NOTICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice, index) => (
            <NoticeCard key={index} {...notice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeGroup;