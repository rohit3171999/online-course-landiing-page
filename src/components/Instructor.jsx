/*
* Purpose:
Show instructor’s photo, bio, and credibility markers.
* */
import instructorImage from '../assets/instructor-photo.jpg';

export default function Instructor(){
    return (
        // <section> (wrapper)
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    {/*<h2> (section heading: “Meet Your Instructor”)*/}
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Meet Your Instructor</h2>
                </div>

                <div className="mt-16 grid grid-cols-1 items-center gap-y-12 lg:grid-cols-3 lg:gap-x-12">
                    {/*<img> (instructor photo)*/}
                    <div className="flex justify-center">
                        <img
                            className="h-64 w-64 rounded-full object-cover shadow-2xl"
                            src="https://lh3.googleusercontent.com/a/ACg8ocLnsQ1vvQUG2zQha4aaNQ2y9MhiTCFULkKgxV8rItoytfUl47I=s360-c-no"
                            alt="Photo of Jane Doe, the instructor"
                        />
                    </div>

                    {/* Bio and Name */}
                    <div className="lg:col-span-2">
                        {/*<h3> (instructor name)*/}
                        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center lg:text-left">Rohit Sharma</h3>
                        <p className="mt-1 text-base font-semibold text-blue-600 text-center lg:text-left">Lead Full-Stack Engineer & Educator</p>

                        {/*<p> (bio, credentials, achievements)*/}
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            With over a decade of experience as a Senior Software Engineer at top-tier tech companies like Google and Netflix, Jane has a deep understanding of what it takes to succeed in the industry. She is the creator of the popular open-source library 'JS-Boost' and is passionate about mentoring the next generation of developers through hands-on, project-based learning.
                        </p>

                        {/* Social Links */}
                        <div className="mt-8 flex justify-center gap-x-6 lg:justify-start">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <GithubIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <TwitterIcon />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Icon Components for Social Links ---

function GithubIcon() {
    return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
            />
        </svg>
    );
}