import htmllogo from "../assets/html.jpg";
import csslogo from "../assets/css.jpg";
import jslogo from "../assets/js.jpg";
import reactlogo from "../assets/react.svg";
import typescriptlogo from "../assets/typeScript.jpg";
import nodejslogo from "../assets/nodejs.jpg";
import expresslogo from "../assets/express.jpg";
import mongodblogo from "../assets/mongodb.jpg";
import mysqllogo from "../assets/sql.jpg";
import csharplogo from "../assets/c-sharp.jpg";
function Skills() {
  return (
    <div id="skills" className="bg-cyan-950 text-white p-8">
      <h2 className="text-3xl text-center font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={htmllogo}
            alt="Html Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title  text-xl font-semibold text-center">HTML</p>
          <p>The standard markup language for creating web pages.</p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={csslogo}
            alt="CSS Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">CSS</p>
          <p>
            Cascading Style Sheets used for describing the presentation of a
            document written in HTML.
          </p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img src={jslogo} alt="JS Logo" className="w-16 h-16 mx-auto mb-4" />
          <p className="skill-title">JavaScript</p>
          <p>A high-level programming language that enables web development.</p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={typescriptlogo}
            alt="TypeScript Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">TypeScript</p>
          <p>
            A strongly typed programming language that builds on JavaScript.
          </p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={reactlogo}
            alt="React Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">React</p>
          <p>A JavaScript library for building user interfaces.</p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={nodejslogo}
            alt="Nodejs Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">Node.js</p>
          <p>
            A JavaScript runtime built on V8 JavaScript engine running in
            chrome.
          </p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={expresslogo}
            alt="Expressjs Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">Express</p>
          <p>
            A fast, minimalist web framework for Node.js used to build web
            applications and APIs.{" "}
          </p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={mongodblogo}
            alt="MongoDB Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">MongoDB</p>
          <p>
            A NoSQL database that stores data in a flexible, JSON-like document
            format instead of traditional rows and columns like relational
            databases.
          </p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={mysqllogo}
            alt="MySQL Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">MySQL</p>
          <p>
            An open-source relational database management system (RDBMS) that
            stores and manages structured data using SQL (Structured Query
            Language
          </p>
        </div>
        <div className="skills-content  bg-white text-black p-6 rounded-lg shadow-md">
          <img
            src={csharplogo}
            alt="C-Sharp Logo"
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="skill-title">C-Sharp</p>
          <p>
            A modern, object-oriented programming language developed by
            Microsoft as part of the .NET framework.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
