import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MERN Mastermind | About Me",
  description: "Learn more about me",
};

const AboutMe = () => {
  return (
    <section className="max-w-5xl mx-auto p-6">
      {/* Responsive Flex Layout */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-full md:w-1/3">
          <Image
            src="/my_photo.png" // Replace with your actual image path
            alt="Sayed Zulfikar Mahmud"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* About Me Content */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold ">About Me</h1>
          <p className="mt-4 ">
            Hi, I am{" "}
            <span className="font-semibold">Sayed Zulfikar Mahmud</span>, a
            passionate{" "}
            <span className="font-semibold">MERN Stack Developer</span>
            &nbsp; with experience in building scalable web applications using
            MongoDB, Express.js, React, and Node.js.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold ">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Tailwind CSS",
                "TypeScript",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border  rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience & Projects */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold ">Projects</h2>
            <ul className="mt-2 list-disc list-inside ">
              <li>
                <span className="font-medium ">
                  Home rentals support web app
                </span>
                <Link
                  className="underline text-blue-500"
                  href="https://coruscating-bonbon-3879b6.netlify.app/"
                >
                  Full-stack Web application using MERN & Stripe as payment
                  gateway.
                </Link>
                <small className="text-gray-500  ">
                  <br />
                  <div className="ps-4">
                    <Link
                      className="underline"
                      href="https://github.com/zulfikar2022/assignment-4-frontend"
                    >
                      Source Code (frontend)
                    </Link>{" "}
                    <br />
                    <Link
                      className="underline"
                      href="https://github.com/zulfikar2022/assignment-4-backend"
                    >
                      Source Code (backend)
                    </Link>{" "}
                    <br />
                    <Link
                      className="underline"
                      href="https://drive.google.com/file/d/1vrHehFn95IjdZ53OQzh9m-vH_g0qINM5/view?usp=sharing"
                    >
                      Video Explanation
                    </Link>
                  </div>
                </small>
              </li>
              <li>
                <span className="font-medium ">E-commerce Web App:</span>
                <Link
                  className="underline text-blue-500"
                  href="https://home-hunt-frontend.vercel.app/admin"
                >
                  Full-stack store using MERN & Shurjopay as payment gateway.
                </Link>
                <small className="text-gray-500  ">
                  <br />
                  <div className="ps-4">
                    <Link
                      className="underline"
                      href="https://github.com/zulfikar2022/home-hunt-frontend"
                    >
                      Source Code (frontend)
                    </Link>{" "}
                    <br />
                    <Link
                      className="underline"
                      href="https://github.com/zulfikar2022/home-hunt-backend"
                    >
                      Source Code (backend)
                    </Link>{" "}
                    <br />
                    <Link
                      className="underline"
                      href="https://drive.google.com/file/d/1GgG1n3IyTJhKOAydUTFcOdrQp5vDKFF8/view"
                    >
                      Video Explanation
                    </Link>
                  </div>
                </small>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold ">Contact</h2>
            <p className=" mt-2">
              📧 Email:{" "}
              <Link
                href="mailto:sayedzulfikar2019@gmail.com?subject=Let's%20Connect&body=Hi%20there!"
                className="text-blue-600"
              >
                sayedzulfikar2019@gmail.com
              </Link>
            </p>
            <p className="">
              💼 LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/sayed-zulfikarmahmud/"
                className="text-blue-600"
              >
                linkedin.com/in/yourname
              </Link>
            </p>
            <p className="">
              🐙 GitHub:{" "}
              <Link
                href="https://github.com/zulfikar2022"
                className="text-blue-600"
              >
                github.com/zulfikar2022
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
