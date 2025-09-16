import HeroSection from "./components/HeroSection.jsx";
import CourseOverview from "./components/CourseOverview.jsx";
import Curriculum from "./components/Curriculum.jsx";
import Instructor from "./components/Instructor.jsx";
import Testimonial from "./components/Testimonial.jsx";
import PriceEnrollment from "./components/PriceEnrollment.jsx";
import Footer from "./components/Footer.jsx";

function App(){
    return (
        <>
            <HeroSection/>
            <CourseOverview/>
            <Curriculum/>
            <Instructor/>
            <Testimonial/>
            <PriceEnrollment/>
            <Footer/>

        </>
    );
}
export default App;