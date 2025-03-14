import React from "react";

const Certificates = () => {
  return (
    <div id="certificates" className="bg-cyan-950 text-white p-8">
      <h2 className="text-3xl text-center font-bold mb-8">My Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="certificate-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            C# on Microsoft Learn
          </h3>
          <p className="text-center mb-4">
            Certificate for completing the C# course on Microsoft Learn.
          </p>
          <a
            href="https://media.licdn.com/dms/image/v2/D5622AQFqPucK1zml4g/feedshare-shrink_800/feedshare-shrink_800/0/1733228565285?e=1744848000&v=beta&t=wZ_i7xaa1X0SMoRhCu_dYzcGPrUU61GgfHdre1SVnEw"
            className="block text-center text-blue-500 hover:underline"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            Next.js on LinkedIn Learning
          </h3>
          <p className="text-center mb-4">
            Certificate for completing the Next.js course on LinkedIn Learning.
          </p>
          <a
            href="https://static.licdn.com/aero-v1/sc/h/7oolxobtyqqttan1bjkk5yowb"
            className="block text-center text-blue-500 hover:underline"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            React on LinkedIn Learning
          </h3>
          <p className="text-center mb-4">
            Certificate for completing the React course on LinkedIn Learning.
          </p>
          <a
            href="https://www.linkedin.com/learning/"
            className="block text-center text-blue-500 hover:underline"
          >
            View Certificate
          </a>
        </div>
        <div className="certificate-content bg-white text-black p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">
            JavaScript on LinkedIn Learning
          </h3>
          <p className="text-center mb-4">
            Certificate for completing the JavaScript course on LinkedIn
            Learning.
          </p>
          <a
            href="https://www.linkedin.com/learning/"
            className="block text-center text-blue-500 hover:underline"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
