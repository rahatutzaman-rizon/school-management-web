import React from 'react';

const EducationStages = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Age specific support for every stage
      </h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">PRESCHOOL</h2>
          <p className="text-sm">
            We welcome children from 3 to 6 in the Preschool Program to participate in the classroom from Playgroup (Reception 1), Nursery (Reception 2) and Kindergarten (Early Years). Our curriculum is differentiated to support learning that includes communication and language, personal, social and emotional development, physical development, literacy, mathematics, understanding the world, expressive arts and design. Learning process is pursued through various fun and playful activities to develop the sense of spirituality and to build the foundation for academic success.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">PRIMARY SCHOOL</h2>
          <p className="text-sm">
            In the Primary School program children can enroll from Year 2 to Year 5 (Grade 1 to Grade 5). To continue the development of student's academic success Reverie School keeps on nurturing the innate curiosity and learning skills of each child. We expose students to a wide range of subjects and keep them motivated to become creative, analytical and confident to achieve academic success. Students are taught English, Bangla, Maths, Science, Computing, Global Citizenship, Islam, Arabic, Tahfeez (reading and memorizing surahs from the Quran), creative art and physical education.
          </p>
          <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Learn more &gt;</a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">MIDDLE SCHOOL</h2>
          <p className="text-sm">
            In the Lower Secondary School program we taught to the children in Year 7 (Grade 6), Year 8 (Grade 7) and Year 9 (Grade 8) in order to prepare them for IGCSE O &amp; A Levels. The Lower Secondary School Program provides a safe place for students to meet individually or in small groups to focus on social and emotional development and to seek guidance from school counselors. Students increase their levels of independence in emotional self-regulation, self-advocacy, and interpersonal skills by continuing their learning journey in English, Bangla, Maths, Physics, Chemistry, Biology, Computing, Global Citizenship, Islam, Arabic, Tahfeez (reading and memorizing surahs from the Quran).
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationStages;