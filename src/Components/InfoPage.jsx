// export default InfoPage
import React, { useState } from "react";
import Heading from "./SubComponents/Heading";
import { headingAndSub } from "../Utils/headingsAndSub";

function InfoPage({ setPage }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });
  const head = headingAndSub[0].heading;
  const subHead = headingAndSub[0].subHeading;
  function handleInputChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleNextPage() {
    let errors = {
      nameError: data.name === "",
      emailError: data.email === "",
      phoneError: data.phone === "",
    };

    setError(errors);

    // Checking if there are no errors
    if (!Object.values(errors).some((error) => error)) {
      setPage("Plan");
    }

    // Remove errors after 3 seconds
    setTimeout(() => {
      setError({
        nameError: false,
        emailError: false,
        phoneError: false,
      });
    }, 3000);
  }

  return (
    <div className="w-[400px] my-12">
      <Heading heading={head} subHeading={subHead} />
      <div className="flex flex-col mt-4">
        <div className="flex justify-between items-end">
          <label htmlFor="name" className="text-xs mb-2 mt-4 text-[#0a00c6]">
            Name
          </label>
          {error.nameError ? (
            <p className="text-red-500 font-bold text-xs">Please Enter Name</p>
          ) : (
            ""
          )}
        </div>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={data.name}
          onChange={(e) => handleInputChange(e)}
          className={`outline ${
            error.nameError ? "outline-red-400" : "outline-gray-200"
          } rounded-md px-3 py-2 text-sm focus:outline-[#0a00c6]  text-[#0a00c6]`}
        />
        <div className="flex justify-between items-end">
          <label htmlFor="email" className="text-xs mb-2 mt-4 text-[#0a00c6]">
            Email
          </label>
          {error.emailError ? (
            <p className="text-red-500 font-bold text-xs">Please Enter Email</p>
          ) : (
            ""
          )}
        </div>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => handleInputChange(e)}
          className={`outline ${
            error.emailError ? "outline-red-400" : "outline-gray-200"
          } rounded-md px-3 py-2 text-sm focus:outline-[#0a00c6] text-[#0a00c6] `}
        />
        <div className="flex justify-between items-end">
          <label htmlFor="phone" className="text-xs mb-2 mt-4 text-[#0a00c6]">
            Phone
          </label>
          {error.phoneError ? (
            <p className="text-red-500 font-bold text-xs">Please Enter Phone</p>
          ) : (
            ""
          )}
        </div>

        <input
          type="text"
          id="phone"
          placeholder="e.g. +91 8845454598"
          name="phone"
          value={data.phone}
          onChange={(e) => handleInputChange(e)}
          className={`outline ${
            error.phoneError ? "outline-red-400" : "outline-gray-200"
          } rounded-md px-3 py-2 text-sm focus:outline-[#0a00c6]  text-[#0a00c6]`}
        />
      </div>
      <div className="w-full flex justify-end mt-12">
        <button
          onClick={() => handleNextPage()}
          className="py-2 px-4 rounded-md bg-[#483eff] text-white hover:bg-[#746df8] text-sm"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default InfoPage;
