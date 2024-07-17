import AboutUs from "../About/About";
import Banner from "./Banner";
import EducationStages from "./Education";
import HomePage from "./News";
import SchoolTiming from "./Timing";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <SchoolTiming></SchoolTiming>
            <EducationStages></EducationStages>
            <HomePage></HomePage>

        </div>
    );
};

export default Home;