/*
* Purpose:
Display full course modules in an accordion (expand/collapse).
* */
import { useState } from 'react';

// --- Dummy Data for the Curriculum ---
const curriculumData = [
    {
        id: 1,
        title: 'Module 1: Foundations of the Web',
        totalDuration: '2h 15m',
        lessons: [
            { title: 'The Anatomy of a Modern Web Page', duration: '12 min' },
            { title: 'Core HTML5 Elements and Structure', duration: '45 min' },
            { title: 'Essential CSS3 for Styling', duration: '60 min' },
            { title: 'Introduction to Git and Version Control', duration: '30 min' },
        ],
    },
    {
        id: 2,
        title: 'Module 2: Advanced CSS and Responsive Design',
        totalDuration: '3h 30m',
        lessons: [
            { title: 'Flexbox: Mastering 1D Layouts', duration: '75 min' },
            { title: 'CSS Grid: Mastering 2D Layouts', duration: '90 min' },
            { title: 'Media Queries for Responsive Breakpoints', duration: '45 min' },
        ],
    },
    {
        id: 3,
        title: 'Module 3: JavaScript Fundamentals',
        totalDuration: '5h',
        lessons: [
            { title: 'Variables, Data Types, and Operators', duration: '60 min' },
            { title: 'Functions and Scope', duration: '75 min' },
            { title: 'DOM Manipulation and Events', duration: '90 min' },
            { title: 'Asynchronous JavaScript: Promises & Async/Await', duration: '75 min' },
        ],
    },
    {
        id: 4,
        title: 'Module 4: Building with React',
        totalDuration: '6h 45m',
        lessons: [
            { title: 'Thinking in Components', duration: '60 min' },
            { title: 'State, Props, and Hooks (useState, useEffect)', duration: '120 min' },
            { title: 'Client-Side Routing with React Router', duration: '90 min' },
            { title: 'Global State Management with Redux Toolkit', duration: '135 min' },
        ],
    },
];


export default function Curriculum(){
    // State to track which module is open. `null` means all are closed.
    // We'll default to the first module being open.
    const [openModule, setOpenModule] = useState(curriculumData[0].id);

    const handleToggle = (moduleId) => {
        // If the clicked module is already open, close it. Otherwise, open it.
        setOpenModule(openModule === moduleId ? null : moduleId);
    };

    return (
        // <section> (wrapper)
        <section className="bg-gray-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    {/*<h2> (section heading: “Curriculum”)*/}
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Course Curriculum
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        A detailed breakdown of every topic, project, and skill you'll master.
                    </p>
                </div>

                {/*<div> (accordion container)*/}
                <div className="mt-16 mx-auto max-w-4xl divide-y divide-gray-900/10">
                    {curriculumData.map((module) => (
                        <ModuleItem
                            key={module.id}
                            module={module}
                            isOpen={openModule === module.id}
                            onToggle={() => handleToggle(module.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Reusable ModuleItem Component ---
function ModuleItem({ module, isOpen, onToggle }) {
    return (
        <div className="py-5">
            {/*<h3> (module title)*/}
            <h3>
                {/*<button> (expand/collapse trigger)*/}
                <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`module-panel-${module.id}`}
                >
                    <span className="text-lg font-semibold leading-7">{module.title}</span>
                    <span className="ml-6 flex h-7 items-center">
                        <ChevronIcon isOpen={isOpen} />
                    </span>
                </button>
            </h3>

            {/* Panel with list of lessons */}
            <div
                id={`module-panel-${module.id}`}
                role="region"
                aria-labelledby={`module-button-${module.id}`}
                className={`mt-4 pr-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                {/*<ul> (list of lessons)*/}
                <ul className="pl-6 border-l border-gray-300">
                    {module.lessons.map((lesson, index) => (
                        <LessonItem key={index} lesson={lesson} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

// --- Reusable LessonItem Component ---
function LessonItem({ lesson }) {
    return (
        // <li> (lesson name & duration)
        <li className="flex justify-between items-center py-3">
            <div className="flex items-center">
                <PlayCircleIcon />
                <span className="ml-3 text-base text-gray-700">{lesson.title}</span>
            </div>
            <span className="text-sm text-gray-500 font-mono">{lesson.duration}</span>
        </li>
    );
}

// --- Icon Components ---
function ChevronIcon({ isOpen }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? '-rotate-180' : 'rotate-0'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function PlayCircleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
        </svg>
    );
}