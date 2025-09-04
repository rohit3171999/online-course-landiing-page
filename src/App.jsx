import React, { useState } from "react";

export default function App() {
    const [openModule, setOpenModule] = useState(null);

    const toggleModule = (index) => {
        setOpenModule(openModule === index ? null : index);
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
            {/* Hero Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #004e92, #000428)",
                    color: "white",
                    textAlign: "center",
                    padding: "60px 20px",
                }}
            >
                <h1 style={{ fontSize: "2.5rem", margin: "10px 0" }}>
                    Mastering Data Science with Python
                </h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                    Learn Data Science with Python – From Zero to Job Ready
                </p>
                <a
                    href="#pricing"
                    style={{
                        background: "orange",
                        padding: "12px 25px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    Enroll Now
                </a>
            </section>

            {/* Course Overview */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h2>Course Overview</h2>
                <p style={{ maxWidth: "700px", margin: "10px auto" }}>
                    This course covers Python fundamentals, data analysis, machine
                    learning, and visualization. By the end, you’ll have hands-on
                    experience and projects to showcase.
                </p>
                <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                    <li>✔ Data Analysis with Pandas & NumPy</li>
                    <li>✔ Machine Learning with Scikit-learn</li>
                    <li>✔ Data Visualization with Matplotlib & Seaborn</li>
                    <li>✔ Real-world projects and case studies</li>
                </ul>
                <p style={{ marginTop: "15px", fontStyle: "italic" }}>
                    Duration: 12 weeks | Mode: Self-paced
                </p>
            </section>

            {/* Curriculum Section */}
            <section style={{ padding: "50px 20px" }}>
                <h2 style={{ textAlign: "center" }}>Course Curriculum</h2>
                <div style={{ maxWidth: "800px", margin: "20px auto" }}>
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
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                marginBottom: "15px",
                                padding: "15px",
                            }}
                        >
                            <h3
                                style={{
                                    margin: 0,
                                    cursor: "pointer",
                                    color: "#004e92",
                                }}
                                onClick={() => toggleModule(index)}
                            >
                                {module.title} ({module.duration})
                            </h3>
                            {openModule === index && (
                                <ul style={{ marginTop: "10px" }}>
                                    {module.lessons.map((lesson, i) => (
                                        <li key={i}>- {lesson}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Instructor Section */}
            <section
                style={{
                    background: "#f5f5f5",
                    padding: "50px 20px",
                    textAlign: "center",
                }}
            >
                <h2>Meet Your Instructor Divyansh Bhardwaj "DBC"</h2>
                <img
                    src="https://thafd.bing.com/th/id/OIP.nP1iwdRjPKu-RF4wV-0-1gAAAA?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3?text=Instructor"
                    alt="Instructor"
                    style={{ borderRadius: "50%", margin: "20px 0" }}
                />
                <p style={{ maxWidth: "600px", margin: "0 auto" }}>

                    Dedicated Programming Trainer with a Passion for Developing Future Tech Talent.

                </p>
            </section>

            {/* Testimonials */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h2>What Students Say</h2>
                <blockquote style={{ fontStyle: "italic", margin: "20px auto" }}>
                    “This course gave me the confidence to land my first Data Science job!”
                    — Anjali, Student
                </blockquote>
                <blockquote style={{ fontStyle: "italic", margin: "20px auto" }}>
                    “Very practical and hands-on. Loved the projects.” — Raj, Professional
                </blockquote>
            </section>

            {/* Pricing & Enrollment */}
            <section
                id="pricing"
                style={{
                    background: "#004e92",
                    color: "white",
                    padding: "50px 20px",
                    textAlign: "center",
                }}
            >
                <h2>Pricing & Enrollment</h2>
                <p style={{ fontSize: "1.5rem", margin: "20px 0" }}>
                    ₹4,999 | Lifetime Access | Certificate Included
                </p>
                <a
                    href="#"
                    style={{
                        background: "orange",
                        padding: "14px 30px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }}
                >
                    Enroll Now
                </a>
            </section>

            {/* Footer */}
            <footer
                style={{
                    background: "#111",
                    color: "white",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <p>
                    © 2025 Mastering Data Science with Python |{" "}
                    <a href="#" style={{ color: "orange", textDecoration: "none" }}>
                        FAQ
                    </a>{" "}
                    |{" "}
                    <a href="#" style={{ color: "orange", textDecoration: "none" }}>
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" style={{ color: "orange", textDecoration: "none" }}>
                        Terms
                    </a>
                </p>
            </footer>
        </div>
    );
}
