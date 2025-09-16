/*
*Purpose:
Clearly show pricing, inclusions, and CTA to enroll.
* */
import reactLogo from '../assets/react.svg';

export default function PriceEnrollment(){
    return(
        <section className="bg-gray-900 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    {/*<h2> (section heading: “Pricing & Enrollment”)*/}
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Pricing & Enrollment
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        One single payment. Unlimited access. Unbeatable value.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Lifetime Membership</h3>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            Join thousands of successful developers. This single purchase grants you lifetime access to all current and future course content, including all project files and community access.
                        </p>
                        {/*<ul> + <li> (what’s included: certificate, lifetime access, etc.)*/}
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-400">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100/10" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                        >
                            <li className="flex gap-x-3">
                                <CheckIcon />
                                250+ Hours of HD Video Content
                            </li>
                            <li className="flex gap-x-3">
                                <CheckIcon />
                                Lifetime Access & Free Updates
                            </li>
                            <li className="flex gap-x-3">
                                <CheckIcon />
                                Access to All Project Files
                            </li>
                            <li className="flex gap-x-3">
                                <CheckIcon />
                                Private Discord Community
                            </li>
                            <li className="flex gap-x-3">
                                <CheckIcon />
                                Certificate of Completion
                            </li>
                             <li className="flex gap-x-3">
                                <CheckIcon />
                                Downloadable Resources & Cheatsheets
                            </li>
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-800/80 py-10 text-center ring-1 ring-inset ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                {/*<p> (price information)*/}
                                <p className="text-base font-semibold text-gray-300">One-time payment</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">$299</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-400">USD</span>
                                </p>
                                {/*<button> (CTA → Enroll Now)*/}
                                <button
                                    className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-3 text-center text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-transform transform hover:scale-105"
                                >
                                    Enroll Now
                                </button>
                                <p className="mt-6 text-xs leading-5 text-gray-400">
                                    30-day money-back guarantee. Secure payment with Stripe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// A simple check icon component for the features list
function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-5 flex-none text-blue-500">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
        </svg>
    )
}