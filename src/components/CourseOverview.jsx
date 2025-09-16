
/*
* Purpose:
Provide summary of what the course covers and key outcomes.
* */
export default function CourseOverview(){
    return (
        // <section> (wrapper)
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                {/*<h2> (section heading: “Course Overview”)*/}
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Course Overview
                </h2>
                {/*<p> (summary paragraph)*/}
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                    This comprehensive course is designed to take you from the fundamentals of HTML, CSS, and JavaScript to advanced topics like React, Node.js, and database management. You'll build real-world projects and gain the confidence to launch your career.
                </p>
                {/*<ul> + <li> (bullet-pointed learning outcomes)*/}
                <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 text-left">
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-4 text-base text-gray-700">Build responsive, modern websites with HTML5 and CSS3, including Flexbox and Grid.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-4 text-base text-gray-700">Master JavaScript from the basics to advanced concepts like asynchronous programming.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-4 text-base text-gray-700">Develop powerful single-page applications with React and its ecosystem (Redux, Router).</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-4 text-base text-gray-700">Create robust server-side applications and APIs with Node.js and Express.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-4 text-base text-gray-700">Design and manage databases using both SQL (PostgreSQL) and NoSQL (MongoDB) technologies.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="ml-4 text-base text-gray-700">Deploy your applications to the cloud and understand modern CI/CD pipelines.</span>
                    </li>
                </ul>
                {/*<p> or <span> (course duration/mode)*/}
                <p className="mt-16 text-md text-gray-500">
                    100% Online & Self-Paced | Approx. 250 hours to complete
                </p>
            </div>
        </section>
    );
}

// A simple check icon component to keep the main component clean
function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}