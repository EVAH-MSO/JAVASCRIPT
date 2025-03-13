import React from 'react'
import profile from '../assets/profile-pic.jpg'

const Hero = () => {
  return (
    <div id='hero' className="bg-cyan-950 text-white text-center py-16">
      <img
        src={profile}
        alt=""
        className="mx-auto mb-8 w-72  h-60 rounded-full object-cover transform transition-transform duration-300 hover:scale-150"
      />
      <h1 className="text-transparent bg-clip-text bg-gray-50">Hello,I am</h1>{" "}
      <b>EVA MUTHONI</b> <br />
      <br />
      Full stack developer
      <p>
        I am an enthusiastic Software Engineer and a Full Stack Web Developer,
        passionate about technology, creating innovative web applications and
        solving complex problems with code. With expertise in various modern
        technologies, I strive to build solutions that are both functional and
        user-friendly.
      </p>
      <h3 className="">An enthusiastic Software Engineer </h3>
      <div className="space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          connect with me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          RESUME
        </button>
      </div>
    </div>
  );
}

export default Hero