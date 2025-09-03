import React from "react";
import "./App.css";

export default function App() {
    return (
        <div className="course-container">
            {/* Header */}
            <header className="course-header">
                <h1 className="logo">🎓 Learnify</h1>
                <nav>
                    <a href="#about">About</a>
                    <a href="#curriculum">Curriculum</a>
                    <a href="#enroll">Enroll</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h2>Master React Development</h2>
                    <p>
                        A complete online course to take you from beginner to advanced React
                        developer. Build real-world projects and boost your career.
                    </p>
                    <a href="#enroll" className="cta-btn">Enroll Now</a>
                </div>
                <div className="hero-img">
                    <img src="https://via.placeholder.com/350x250" alt="Course Preview" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h3>About This Course</h3>
                <p>
                    This course covers everything you need to know to become a proficient
                    React developer. You’ll learn JSX, components, props, state management,
                    hooks, routing, and how to integrate APIs with hands-on projects.
                </p>
            </section>

            {/* Curriculum Section */}
            <section id="curriculum" className="curriculum">
                <h3>Course Curriculum</h3>
                <ul>
                    <li>✅ Introduction to React & JSX</li>
                    <li>✅ Components & Props</li>
                    <li>✅ State & Lifecycle</li>
                    <li>✅ React Hooks (useState, useEffect, etc.)</li>
                    <li>✅ React Router for Navigation</li>
                    <li>✅ Working with APIs</li>
                    <li>✅ Building Real-world Projects</li>
                </ul>
            </section>

            {/* Enroll Section */}
            <section id="enroll" className="enroll">
                <h3>Ready to Start Learning?</h3>
                <p>Join thousands of students mastering React today!</p>
                <button className="enroll-btn">Enroll Now</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 Learnify. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
