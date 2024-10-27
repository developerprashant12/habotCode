import React from "react";
import { useAuth } from "../context/AuthContext";
import resumePdf from "../assests/PrashantMishraResumeSD.pdf";

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="bg-white rounded-lg p-6 w-full shadow-md">
        <h2 className="text-2xl font-semibold mb-8 text-center text-buttonColor1">
          Profile
          <hr />
        </h2>

        {/* Display User Information */}
        <div className="mb-4">
          <p className="text-black">
            <strong>ID:&nbsp;</strong> {user?.id || "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-black">
            <strong>Name:&nbsp;</strong> {user?.name || "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-black">
            <strong>Email:&nbsp;</strong> {user?.email || "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-black">
            <strong>Phone:&nbsp;</strong> {user?.phone || "N/A"}
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="w-full md:w-60 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 w-full shadow-md">
        <h2 className="text-2xl font-semibold mb-8 text-center mt-8 text-buttonColor1">
          Personal Information <hr />
        </h2>
        <div className="mb-4">
          <p className="text-black">Hello Sir,</p>
          <br />
          <p className="text-black text-justify">
            My name is <strong>Prashant Mishra</strong>. I am writing to express
            my interest in the UI and UX Developer position I saw posted on
            Indeed. I have 1.7 years of experience in this field with including
            an internship. I have designed all the UI using Figma and Adobe XD,
            and I have also developed the UI. I have worked with HTML, CSS,
            SCSS, Bootstrap, and JavaScript frameworks and libraries. I have
            completed 6 live projects, and I have mentioned the live URLs in my
            CV.
          </p>
          <br />
          <p className="text-black text-justify">
            Additionally, I have worked with React, Redux Toolkit, Material UI,
            Tailwind CSS and Chart UI. Now, I am now looking for a job in a
            similar profile. Please find my CV attached for your review.
          </p>
          <br />
          <p className="text-black mb-3 text-justify">
            <strong>Note:</strong> If possible can you please call me between
            2PM to 2:30PM and after 6PM
          </p>
          <p className="text-black">
            <strong>Portfolio Link:</strong>{" "}
            <a
              href="https://pm-tech.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              https://pm-tech.netlify.app/
            </a>
            <br />
            <strong>GitHub Profile:</strong>{" "}
            <a
              href="https://github.com/developerprashant12"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              https://github.com/developerprashant12
            </a>
            <br />
            <strong>Deploy Link:</strong>{" "}
            <a
              href="https://habotsite.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              https://habotsite.netlify.app/
            </a>
            <br />
            <strong>Download CV:</strong>{" "}
            <a
              href={resumePdf}
              download
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              Click here
            </a>
          </p>
          <br />
          <p>Thank you for your consideration.</p>
          <br />
          <p>
            Thanks and Regards,
            <br />
            <strong>Prashant Mishra</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
