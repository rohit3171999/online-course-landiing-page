import HeroSection from "./components/HeroSection.jsx";
import CourseOverview from "./components/CourseOverview.jsx";
import Curriculum from "./components/Curriculum.jsx";
import Instructor from "./components/Instructor.jsx";
import Testimonial from "./components/Testimonial.jsx";
import PriceEnrollment from "./components/PriceEnrollment.jsx";
import Footer from "./components/Footer.jsx";
import NewTestimonials from "./components/NewTestimonials.jsx";
import {courseTestimonials} from "./NewDataset.js";

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
            <div className="grid grid-cols-4 gap-4">
                {courseTestimonials.map(courseTestimonial => (
                    <NewTestimonials
                        key={courseTestimonial.username}
                        userName={courseTestimonial.username}
                        imageURL={courseTestimonial.imageURL}
                        userReview={courseTestimonial.userReview}
                        altText={courseTestimonial.altText}
                    />
                ))}
            </div>

        </>
    );
}
export default App;