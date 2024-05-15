import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import blog4 from "../../assets/Screenshot 2023-11-06 130424.png";

const Blog = () => {
  return (
    <div className="max-w-screen-2xl mx-auto relative -mt-10 md:mt-0 mb-10">
      {/* Use Helmet to set the title */}
      <div className="z-0 ">
        <img
          className=" w-full z-0 h-[300px] "
          src={
            "https://img.freepik.com/free-photo/businessman-using-digital-tablet_53876-108317.jpg?t=st=1715527823~exp=1715531423~hmac=52dd02a18fa39a7d90e8798406c3b911a206489f60cf6f0d6527db20c847bfaa&w=826"
          }
          alt=""
        />
      </div>
      <div className="">
        <div className="max-w-4xl mx-auto -mt-[50px] relative z-20 ">
          <div className="shadow  rounded bg-white z-10  p-10 text-center space-y-5">
            <h1 className="text-md bg-[#39AA47] text-white text-center ">
              Interview
            </h1>
            <h1 className="font-bold text-3xl">
              Find The Job That Fits Your Life
            </h1>
            <div className="flex justify-center gap-5">
              <h1>by admin</h1>
              <h1>Date: july 20, 2023</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <img
                className="rounded"
                src={
                  "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241233.jpg?t=st=1715523618~exp=1715527218~hmac=978b7524c9609e2f83b7a9575408d42df9dd07556bb70aababcb6a8c7e4aa317&w=740"
                }
                alt=""
              />
              <img
                className="rounded"
                src={
                  "https://img.freepik.com/premium-photo/business-executives-discussing-laptop_107420-81512.jpg?w=740"
                }
                alt=""
              />
            </div>
            <p className="text-justify">
              Self-Assessment: Start by understanding your strengths,
              weaknesses, skills, and interests. What do you enjoy doing, and
              what are you good at? Assess your values, priorities, and
              long-term goals. This self-awareness will help you identify a job
              that aligns with your life. Set Clear Goals: Define your career
              goals and what you want to achieve in your professional life. This
              could include factors like work-life balance, income, job
              satisfaction, or career growth. Research: Explore different
              industries and job roles that match your skills and interests.
              Research the job market to identify industries with growing
              opportunities and the specific positions that align with your
              career goals. Education and Training: Sometimes, you may need to
              acquire new skills or knowledge to pursue a job that fits your
              life. Consider additional education, certifications, or training
              programs that can enhance your qualifications. Networking: Connect
              with professionals in your desired field. Attend industry events,
              join online forums, and reach out to mentors who can provide
              insights and advice on how to find the right job. Tailor Your
              Resume and Cover Letter: Customize your resume and cover letter
              for each job application. Highlight the skills and experiences
              that are most relevant to the specific job you're applying for.
              Apply Strategically: Don't apply to every job you come across. Be
              selective and apply for positions that genuinely match your goals
              and values. Quality is often more important than quantity. Prepare
              for Interviews: Practice your interview skills and prepare answers
              to common interview questions. Be ready to explain how your skills
              and experience make you a strong fit for the position. Work-Life
              Balance: When considering a job, assess its impact on your
              work-life balance. Does it allow you to maintain a healthy
              equilibrium between your professional and personal life? Evaluate
              Company Culture: Research the company culture of potential
              employers. Are their values and workplace environment in line with
              what you seek in your career? Negotiate Your Terms: If you receive
              a job offer, don't hesitate to negotiate. Discuss aspects like
              salary, benefits, work hours, and remote work options to ensure
              they align with your life goals. Feedback Loop: Be willing to
              reassess and adjust your career goals and job search strategies
              over time. Life circumstances and priorities may change. Remember
              that finding the job that fits your life is a process that may
              take time. It's important to be patient and persistent in your
              pursuit. Additionally, seeking advice from career counselors or
              coaches can be beneficial in helping you navigate the job market
              and make informed decisions that align with your personal and
              professional goals.
            </p>

            <hr />
            {/*blog ans no 1 */}
            <h1 className="text-left text-2xl">
              {" "}
              <span className="text-xl text-[#39AA47] font-bold">
                Qustion no-1:
              </span>{" "}
              What is an access token and refresh token?
            </h1>
            <p className="text-justify">
              Refresh token rotation provides applications and platforms with
              better security measures by decreasing their lifetime. This lowers
              the chance that a hacker can access a valid token, particularly
              for single-page applications (SPAs) and browser-based applications
            </p>
            <img src={blog4} alt="" />
            <p className="text-justify">
              We use tokens to authenticate users and authorize requests without
              keeping session data on the server. Tokens are data confirming a
              user’s identity and are analogous to digital signatures.In this
              tutorial, we’ll clarify the distinction between access and refresh
              tokens and show how to implement them.An access token (from an
              authorization server) allows temporary access to restricted
              resources such as APIs or websites. Generally, access tokens are
              valid for only a few minutes or hours, depending on the setting to
              safeguard the resource server. They also include security features
              like signatures. Any user with an access token is automatically
              authenticated, regardless of whether they are genuine or
              malicious. Let’s check out an example:
            </p>
            <hr />

            {/* blog ans no 2 */}
            <h1 className="text-left text-2xl">
              {" "}
              <span className="text-xl text-[#39AA47]  font-bold">
                Qustion no-2:
              </span>{" "}
              How do they work and where should we store them on the
              client-side?
            </h1>
            <p className="text-justify">
              Modern web browsers support a number of ways for websites to store
              data on the user's computer — with the user's permission — then
              retrieve it when necessary. This lets you persist data for
              long-term storage, save sites or documents for offline use, retain
              user-specific settings for your site, and more. This article
              explains the very basics of how these work.
            </p>
            <p className="text-justify">
              Let's apply this new-found knowledge by writing a working example
              to give you an idea of how web storage can be used. Our example
              will allow you to enter a name, after which the page will update
              to give you a personalized greeting. This state will also persist
              across page/browser reloads, because the name is stored in web
              storage.
            </p>
            <hr />
            {/* blog ans no 3 */}
            <h1 className="text-left text-2xl">
              {" "}
              <span className="text-xl text-[#39AA47]  font-bold">
                Qustion no-3:
              </span>{" "}
              What is express js?
            </h1>
            <p className="text-justify">
              Express.js, often referred to as simply Express, is a popular and
              minimalist web application framework for Node.js, a runtime
              environment for executing JavaScript code on the server-side.
              Express.js provides a set of features and tools for building web
              and mobile applications, as well as APIs. Key features and
              characteristics of Express.js include: Routing: Express simplifies
              the process of defining and handling routes, allowing you to
              define how your application should respond to HTTP requests for
              different URLs. Middleware: Express makes extensive use of
              middleware functions, which are functions that can be executed
              before or after a request is handled. Middleware is used for tasks
              like authentication, logging, and request processing. Template
              Engines: While Express itself is not a template engine, it can be
              used with various template engines such as EJS, Pug, or Handlebars
              to generate dynamic HTML content.
              <img className="w-full rounded" src={""} alt="" />
              HTTP Utilities: It provides built-in utilities for handling HTTP
              requests and responses, making it easier to work with HTTP methods
              like GET, POST, PUT, DELETE, etc. Serving Static Files: Express
              allows you to serve static files (e.g., HTML, CSS, JavaScript,
              images) from specified directories with ease. Integration: It's
              often used with databases, such as MongoDB or MySQL, and can be
              integrated with other Node.js modules and packages. Middleware
              Ecosystem: Express has a rich ecosystem of middleware modules that
              can be easily integrated into your application to add
              functionality like authentication, session management, and more.
            </p>

            <hr />
            {/* blog ans no 4 */}
            <h1 className="text-left text-2xl">
              {" "}
              <span className="text-xl text-[#39AA47] font-bold">
                Qustion no-4:
              </span>{" "}
              What is Nest JS ?
            </h1>
            <p className="text-justify">
              NestJS is a popular and powerful open-source framework for
              building server-side applications using TypeScript or JavaScript.
              It is built on top of Node.js and leverages the capabilities of
              modern JavaScript, making it an excellent choice for building
              scalable and maintainable server-side applications, including web
              applications, APIs, and microservices. NestJS is often used in
              combination with other technologies like Express.js and is
              designed to provide a robust and extensible foundation for
              building enterprise-grade applications.
            </p>

            <hr />

            <div className=" md:flex justify-between">
              <div className="md:flex  gap-3 space-y-4">
                <h1 className="font-bold">Tag :</h1>
                <h1 className="bg-green-100 px-2 py-1 rounded-full">Busness</h1>
                <h1 className="bg-green-100 px-2 py-1 rounded-full">Success</h1>
                <h1 className="bg-green-100 px-2 py-1 rounded-full">
                  Writting
                </h1>
              </div>

              <div className="flex gap-4 justify-center items-center ">
                <h1 className="font-bold">Share this post :</h1>
                <BsFacebook></BsFacebook>
                <BsPinterest></BsPinterest>
                <BsTwitter></BsTwitter>
              </div>
            </div>
            <hr />
            <div className="md:flex justify-between py-5">
              <p className=" font-bold pr-0 md:pr-10">Previus</p>
              <p className="font-bold">Next..</p>
            </div>
            <hr />
            <h1 className="md:text-left font-bold">2 comments</h1>
            <div className="flex justify-center  gap-3">
              <FaUserLarge className="w-[50px] "></FaUserLarge>
              <div className="text-left">
                <h1 className="font-bold">Admin</h1>
                <h1 className="text-sm">Date : jun 30, 2024</h1>
                <p>
                  Donec eu dui condimentum, laoreet nulla vitae, venenatis
                  ipsum. Donec luctus sem sit amet varius laoreet. Aliquam
                  fermentum sit amet urna fringilla tincidunt.
                </p>
                <h2 className="text-[#39AA47]">Reply</h2>
              </div>
            </div>
            <hr />
            <div className="flex justify-center  gap-3">
              <FaUserLarge className="w-[50px] "></FaUserLarge>
              <div className="text-left">
                <h1 className="font-bold">Admin</h1>
                <h1 className="text-sm">Date : jun 30, 2024</h1>
                <p>
                  Donec eu dui condimentum, laoreet nulla vitae, venenatis
                  ipsum. Donec luctus sem sit amet varius laoreet. Aliquam
                  fermentum sit amet urna fringilla tincidunt.
                </p>
                <h2 className="text-[#39AA47]">Reply</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
