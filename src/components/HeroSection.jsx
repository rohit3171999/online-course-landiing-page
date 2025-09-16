/*
*Purpose:
First section users see. Show course name, tagline, description, and a strong CTA button.
*
* */

export default function HeroSection(){
    return(
        // <section> (wrapper)
        <section className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-8">
            {/*<h1> (course title)*/}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight max-w-4xl">
                Master Modern Web Development
            </h1>
            {/*<p> (tagline/description)*/}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl">
                The ultimate online course to level up your skills from a beginner to a job-ready professional.
            </p>
            {/*<button> (primary CTA → Enroll Now)*/}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Enroll Now
            </button>
        </section>
    )
}