import React, { useState } from "react";

export default function App() {
    const [openModule, setOpenModule] = useState(null);

    const toggleModule = (index) => {
        setOpenModule(openModule === index ? null : index);
    };

    return (
        <div className="font-sans m-0 p-0">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#004e92] to-[#000428] text-white text-center px-5 py-16">
                <h1 className="text-4xl font-bold my-2">
                    Mastering Data Science with Python
                </h1>
                <p className="text-lg mb-5">
                    Learn Data Science with Python – From Zero to Job Ready
                </p>
                <a
                    href="#pricing"
                    className="bg-orange-500 px-6 py-3 rounded-md no-underline text-white font-bold"
                >
                    Enroll Now
                </a>
            </section>

            {/* Course Overview */}
            <section className="px-5 py-12 text-center">
                <h2 className="text-2xl font-bold">Course Overview</h2>
                <p className="max-w-2xl mx-auto my-2">
                    This course covers Python fundamentals, data analysis, machine
                    learning, and visualization. By the end, you’ll have hands-on
                    experience and projects to showcase.
                </p>
                <ul className="list-none p-0 mt-5 space-y-2">
                    <li>✔ Data Analysis with Pandas & NumPy</li>
                    <li>✔ Machine Learning with Scikit-learn</li>
                    <li>✔ Data Visualization with Matplotlib & Seaborn</li>
                    <li>✔ Real-world projects and case studies</li>
                </ul>
                <p className="mt-4 italic">
                    Duration: 12 weeks | Mode: Self-paced
                </p>
            </section>

            {/* Curriculum Section */}
            <section className="px-5 py-12">
                <h2 className="text-2xl font-bold text-center">Course Curriculum</h2>
                <div className="max-w-3xl mx-auto mt-5">
                    {[
                        {
                            title: "Introduction to Python for Data Science",
                            lessons: ["Python Basics", "Data Types", "Control Flow"],
                            duration: "2 hours",
                        },
                        {
                            title: "Data Analysis with Pandas",
                            lessons: ["Series & DataFrames", "Data Cleaning", "Aggregations"],
                            duration: "3 hours",
                        },
                        {
                            title: "Machine Learning Fundamentals",
                            lessons: ["Supervised Learning", "Unsupervised Learning"],
                            duration: "4 hours",
                        },
                    ].map((module, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-md mb-4 p-4"
                        >
                            <h3
                                className="m-0 cursor-pointer text-[#004e92] font-semibold"
                                onClick={() => toggleModule(index)}
                            >
                                {module.title} ({module.duration})
                            </h3>
                            {openModule === index && (
                                <ul className="mt-3 list-disc list-inside">
                                    {module.lessons.map((lesson, i) => (
                                        <li key={i}>{lesson}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Instructor Section */}
            <section className="bg-gray-100 px-5 py-12 text-center">
                <h2 className="text-2xl font-bold">
                    Meet Your Instructor Divyansh Bhardwaj "DBC"
                </h2>
                <img
                    src="https://thafd.bing.com/th/id/OIP.nP1iwdRjPKu-RF4wV-0-1gAAAA?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?text=Instructor"
                    alt="Instructor"
                    className="rounded-full mx-auto my-5"
                />
                <p className="max-w-xl mx-auto">
                    Dedicated Programming Trainer with a Passion for Developing Future Tech Talent.
                </p>
            </section>

            {/* Testimonials */}
            <section className="px-5 py-12 text-center">
                <h2 className="text-2xl font-bold">What Students Say</h2>
                <blockquote className="italic my-5 max-w-xl mx-auto">
                    “This course gave me the confidence to land my first Data Science job!” — Anjali, Student
                </blockquote>
                <blockquote className="italic my-5 max-w-xl mx-auto">
                    “Very practical and hands-on. Loved the projects.” — Raj, Professional
                </blockquote>
            </section>

            {/* Pricing & Enrollment */}
            <section
                id="pricing"
                className="bg-[#004e92] text-white px-5 py-12 text-center"
            >
                <h2 className="text-2xl font-bold">Pricing & Enrollment</h2>
                <p className="text-2xl my-5">
                    ₹4,999 | Lifetime Access | Certificate Included
                </p>
                <a
                    href="#"
                    className="bg-orange-500 px-7 py-3 rounded-md no-underline text-white font-bold text-lg"
                >
                    Enroll Now
                </a>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white px-5 py-5 text-center">
                <p>
                    © 2025 Mastering Data Science with Python |{" "}
                    <a href="#" className="text-orange-500 no-underline">
                        FAQ
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-orange-500 no-underline">
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-orange-500 no-underline">
                        Terms
                    </a>
                </p>
            </footer>
        </div>
    );
}
