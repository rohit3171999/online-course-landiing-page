import React, { useState } from "react";

// Mock Data based on PRD
const courseData = {
    title: "Mastering Data Science with Python",
    tagline: "From Zero to Job Ready",
    description:
        "An immersive, project-based course designed to equip you with the most in-demand skills in data science. Learn data analysis, machine learning, and visualization with Python.",
    duration: "8 Weeks",
    mode: "Self-Paced with Community Support",
    price: "$499",
    learningOutcomes: [
        "Master Python for Data Manipulation with Pandas and NumPy.",
        "Create stunning data visualizations using Matplotlib and Seaborn.",
        "Build and evaluate predictive machine learning models.",
        "Understand the complete data science workflow from start to finish.",
        "Develop a portfolio of real-world data science projects.",
    ],
    included: [
        "Lifetime access to all course materials",
        "Verifiable Certificate of Completion",
        "Access to a private student community",
        "Downloadable code and project files",
    ],
};

const instructorData = {
    name: "Rohit Sharma",
    photoUrl: "https://avatars.githubusercontent.com/u/94161768?v=4",
    bio: "Dr. Reed is a lead data scientist with over 12 years of experience in machine learning and AI. She holds a Ph.D. in Computer Science from Stanford University and has mentored hundreds of aspiring data scientists. Her passion is making complex topics accessible and engaging.",
};

const curriculumData = [
    {
        module: 1,
        title: "Introduction to Python for Data Science",
        duration: "2 hours",
        subtopics: [
            "Python Basics & Syntax",
            "Data Structures: Lists, Dictionaries",
            "Control Flow",
            "Functions",
        ],
    },
    {
        module: 2,
        title: "Data Analysis with NumPy & Pandas",
        duration: "4 hours",
        subtopics: [
            "NumPy Arrays and Operations",
            "Pandas DataFrames and Series",
            "Data Cleaning and Preprocessing",
            "Data Grouping and Aggregation",
        ],
    },
    {
        module: 3,
        title: "Data Visualization with Matplotlib & Seaborn",
        duration: "3 hours",
        subtopics: [
            "Creating various plot types",
            "Customizing plots for clarity",
            "Statistical data visualization",
            "Building interactive dashboards",
        ],
    },
    {
        module: 4,
        title: "Machine Learning Fundamentals",
        duration: "5 hours",
        subtopics: [
            "Supervised vs. Unsupervised Learning",
            "Linear & Logistic Regression",
            "Model Evaluation Metrics",
            "Cross-Validation Techniques",
        ],
    },
    {
        module: 5,
        title: "Advanced Machine Learning",
        duration: "5 hours",
        subtopics: [
            "Decision Trees and Random Forests",
            "Support Vector Machines (SVM)",
            "Introduction to Neural Networks",
            "Clustering with K-Means",
        ],
    },
];

const testimonialsData = [
    {
        name: "Alex Johnson",
        quote:
            "This course was a game-changer. The hands-on projects helped me build a strong portfolio and land my first data analyst job!",
        avatarUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=AJ",
    },
    {
        name: "Maria Garcia",
        quote:
            "The instructor explains complex concepts in a simple way. The curriculum is well-structured and perfect for beginners.",
        avatarUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=MG",
    },
    {
        name: "Samuel Chen",
        quote:
            "I've taken many online courses, and this is by far the best. The community support is fantastic, and the content is top-notch.",
        avatarUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=SC",
    },
];

// Reusable CTA Button Component
const EnrollButton = ({ text = "Enroll Now", className = "" }) => (
    <a
        href="#pricing"
        className={`cta-button inline-block bg-orange-500 text-white font-bold text-lg text-center py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 ${className}`}
    >
        {text}
    </a>
);

// Header Component
const Header = () => (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
                <span className="text-blue-600">Mastering</span>DataScience
            </div>
            <div>
                <a
                    href="#pricing"
                    className="cta-button bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 hidden md:inline-block"
                >
                    Enroll Now
                </a>
            </div>
        </nav>
    </header>
);

// Hero Section Component
const HeroSection = () => (
    <section className="bg-blue-700 text-white">
        <div className="container mx-auto px-6 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                {courseData.title}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto text-blue-100">
                {courseData.tagline}
            </p>
            <p className="mb-10 max-w-2xl mx-auto text-blue-200">
                {courseData.description}
            </p>
            <EnrollButton />
        </div>
    </section>
);

// Course Overview Section
const CourseOverviewSection = () => (
    <section id="overview" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    What You'll Learn
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Gain the skills to excel in the world of data.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                        Key Learning Outcomes
                    </h3>
                    <ul className="space-y-4">
                        {courseData.learningOutcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start">
                                <svg
                                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                                <span className="text-gray-700">{outcome}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <h4 className="font-bold text-blue-800 text-lg">Course Duration</h4>
                        <p className="text-blue-700 text-xl">{courseData.duration}</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <h4 className="font-bold text-blue-800 text-lg">Learning Mode</h4>
                        <p className="text-blue-700 text-xl">{courseData.mode}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Curriculum Section Component with Accordion
const CurriculumSection = () => {
    const [openModule, setOpenModule] = useState(curriculumData[0].module);

    const toggleModule = (module) => {
        setOpenModule(openModule === module ? null : module);
    };

    return (
        <section id="curriculum" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Course Curriculum
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A detailed breakdown of every topic covered in the course.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    {curriculumData.map((item) => (
                        <div key={item.module} className="border-b last:border-b-0">
                            <button
                                className="w-full text-left p-6 focus:outline-none"
                                onClick={() => toggleModule(item.module)}
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <span className="text-blue-600 font-bold text-xl mr-4">{`0${item.module}`}</span>
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center">
                    <span className="text-gray-500 mr-4 hidden md:inline">
                      {item.duration}
                    </span>
                                        <svg
                                            className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                                                openModule === item.module ? "rotate-180" : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openModule === item.module ? "max-h-96" : "max-h-0"
                                }`}
                            >
                                <div className="bg-gray-50 p-6 border-t">
                                    <ul className="space-y-3">
                                        {item.subtopics.map((subtopic, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center text-gray-600"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                {subtopic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Instructor Section
const InstructorSection = () => (
    <section id="instructor" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Meet Your Instructor
                </h2>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center bg-slate-50 p-8 rounded-xl shadow-sm">
                <div className="md:col-span-1">
                    <img
                        src={instructorData.photoUrl}
                        alt={instructorData.name}
                        className="rounded-full w-48 h-48 mx-auto object-cover shadow-lg"
                    />
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800">
                        {instructorData.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                        Lead Data Scientist & Educator
                    </p>
                    <p className="text-gray-600 leading-relaxed">{instructorData.bio}</p>
                </div>
            </div>
        </div>
    </section>
);

// Testimonials Section
const TestimonialsSection = () => (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    What Our Students Say
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Success stories from our growing community.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.avatarUrl}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">
                                    {testimonial.name}
                                </h4>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Pricing Section
const PricingSection = () => (
    <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center bg-blue-600 text-white p-8 md:p-12 rounded-xl shadow-2xl">
                <h2 className="text-4xl font-extrabold mb-4">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-5xl font-bold mb-6">{courseData.price}</p>
                <div className="text-left max-w-sm mx-auto mb-8 space-y-3">
                    {courseData.included.map((item, index) => (
                        <p key={index} className="flex items-center text-blue-100">
                            <svg
                                className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            {item}
                        </p>
                    ))}
                </div>
                <EnrollButton className="w-full text-xl py-4" />
            </div>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-8 text-center">
            <p>
                &copy; {new Date().getFullYear()} Mastering Data Science. All rights
                reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="hover:text-white">
                    About
                </a>
                <a href="#" className="hover:text-white">
                    FAQ
                </a>
                <a href="#" className="hover:text-white">
                    Contact
                </a>
                <a href="#" className="hover:text-white">
                    Privacy Policy
                </a>
            </div>
        </div>
    </footer>
);

// Main App Component
const App = () => {
    return (
        <div>
            <Header />
            <main>
                <HeroSection />
                <CourseOverviewSection />
                <CurriculumSection />
                <InstructorSection />
                <TestimonialsSection />
                <PricingSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
