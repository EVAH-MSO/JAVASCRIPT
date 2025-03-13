import React from 'react'

const About = () => {
  return (
    <div id='about' className="bg-cyan-950 text-white id-about">
      <h1
        className="bg-white  text-black text-3xl text-center font-bold mb-4"
        id="about"
      >
        About Me.
      </h1>
      <p className=" mb-4 text- leading-relaxed">
        I am a second year student pursuing Bachelor of Science in Software
        Engineering passionate about technology and Full Stack Web Development.{" "}
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Currently, I am diving into different technologies and a proud member of
        Computer Society of Kirinyaga.Outside coding I enjoy listening to music,
        travelling and participating in Community Development.{" "}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="block bg-blue-500 text-white px-6 py-2 rounded-full text-sm w-1/4">
          HTML
        </span>
        <span className="block bg-green-500 text-white px-6 py-2 rounded-full text-sm w-1/3">
          CSS
        </span>
        <span className="block bg-yellow-500 text-white px-6 py-2 rounded-full text-sm w-1/2">
          Node.js
        </span>
        <span className="block bg-purple-500 text-white px-6 py-2 rounded-full text-sm w-1/4">
          React
        </span>
      </div>
    </div>
  );
}
export default About
