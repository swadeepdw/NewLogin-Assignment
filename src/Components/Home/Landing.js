import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const handleAgree = () => {
    navigate("login");
  };

  return (
    <div>
      {" "}
      <div className="card mt-10 h-2/3">
        <div className="fixed top-0 z-10 w-full">
          <div
            className="max-w-screen-xl text-black py-5 flex flex-wrap items-center justify-around mx-auto"
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center space-x-16 rtl:space-x-reverse pl-5">
              <p>PROJECTS</p>
              <p>EXPERTISE</p>
              <p>ABOUT US</p>
              <p>PEOPLE</p>
            </div>
            <div className="flex items-center justify-between gap-10">
              <p>CAREERS</p>
              <p>AU</p>
            </div>
            <button
              onClick={handleAgree}
              className="bg-blue-600 text-white py-2 px-14 rounded-full"
            >
              Login
            </button>
          </div>
          <hr />
        </div>

        <div className="text-center mt-28 flex items-center justify-center flex-col">
          <img
            src="/Images/imageCarousel.svg"
            alt=""
            width={100}
            height={100}
            priority={true}
            className="w-1/3 h-auto"
          />
          <br />
          <div className="w-full">
            <p className="text-2xl font-quicksand mt-4">Dummy Landing Page</p>
            <p className="font-quicksand px-40 py-10">
              By agreeing to our terms of service, you&apos;re joining a
              community committed to excellence in project management supported
              by Smartgig Technologies. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Sunt, similique iusto maiores pariatur
              repellendus aspernatur beatae consectetur delectus asperiores
              expedita dolore, quaerat aut iste commodi animi ratione aliquam
              odio. Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
