
const IELTSPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome To Our IELTS Program</h1>
      
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img 
            src="https://i.ibb.co/1KNYGWf/Screen-Shot-Tool-20240716200643.png" 
            alt="IELTS Program" 
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="md:w-1/2 md:pl-8">
          <p className="mb-4">
            Glenrich School Dhaka is the first International School in Bangladesh to design and deliver stand-alone IELTS Training Modules in four Skill areas: Listening, Reading, Speaking and Writing.
          </p>
          <p className="mb-4">
            Students will choose individual modules or the Complete IELTS Package depending on their existing competency level. Modular delivery gives both first-time and repeat candidates the opportunity to enrol in modules that they actually need support for and to complete the program faster as compared to an All-in Delivery model.
          </p>
          <p className="mb-4">
            Each Module is delivered by an Expert instructor with substantial IELTS Teaching experience and a perfect IELTS score in that module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IELTSPage;