import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        const textContainer = document.getElementById('rotating-text1');
        if (textContainer) {
          const text = textContainer.innerText;
          const chars = text.split('');
    
          const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
          textContainer.innerHTML = newText;
        }
      }, []);
  return (
    <div>
        <div className="px-4 py-36 md:px-8 lg:px-16">
            <div className="text-center text-3xl mt-20 text-[goldenrod]">
            <h1 id="rotating-text1" className="text-2xl md:text-3xl lg:text-4xl">
                About
            </h1>
            <p className="text-sm md:text-base pb-24">My Qualification</p>
            </div>
            <div className="flex items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
                <ul className="timeline timeline-vertical">
        <li>
            <div className="timeline-start timeline-box bg-white text-[goldenrod] border-[goldenrod]">
                <h2 className="roboto-condensed-heading">Bangladesh Army International University of Science & Technology</h2>
                <p>CGPA: 3.92 out of 4.00</p>
                <p>2020-2024</p>
            </div>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[goldenrod]">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <hr />
        </li>
        <li>
            <hr className="text-[goldenrod]"/>
            <div className="timeline-middle ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[goldenrod]">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-end timeline-box  bg-white text-[goldenrod] border-[goldenrod]">
                
                <h2 className="roboto-condensed-heading">Noakhali Govt. College</h2>
                <p>GPA: 4.08 out of 4.00</p>
                <p>2017-2019</p>
                </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-start timeline-box  bg-white text-[goldenrod] border-[goldenrod]">
                
                <h2 className="roboto-condensed-heading">Brother Andres High School</h2>
                <p>GPA: 4.41 out of 6.00</p>
                <p>2006-2017</p>
                </div>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[goldenrod]">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
        </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
