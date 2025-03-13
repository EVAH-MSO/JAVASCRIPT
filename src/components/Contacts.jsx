import React from "react";

const Contacts = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="contact" className="bg-cyan-950 text-white p-8">
      <h2 className="text-3xl text-center font-bold mb-8">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-white text-black p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
      <div className="text-center mt-8">
        <p>
          Email:{" "}
          <a
            href="mailto:your-muthonikahari@gmail.com"
            className="text-blue-500 hover:underline"
          >
           muthonikahari@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/EVAH-MSO"
            className="text-blue-500 hover:underline"
          >
            github.com/EVAH-MSO
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/Evah Muthoni.k"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/Evah Muthoni.k
          </a>
        </p>
      </div>
      <footer className="text-center mt-8">
        <p>&copy; {currentYear} EVA MUTHONI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contacts;
