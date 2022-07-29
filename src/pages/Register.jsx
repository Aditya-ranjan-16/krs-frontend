import React from "react";
import Form from "../components/register/Form";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import bg from "../public/bg.png";
import Info from "../components/register/Info";
import { useState } from "react";

function Register() {
  const [submit, setSubmit] = useState(false);

  const onSubmit = () => {
    console.log("going")
    setSubmit(true);}
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-fixed bg-black bg-bottom py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
        }}
      >
        <div
          className="border-2 border-yellow-500 rounded-lg ml-14 mb-10 items-center"
          style={{ width: "90%", background: "rgba(4, 0, 0, 0.60)" }}
        >
          <div className="flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse items-center">
            {/* {!submit && <Form onsubmit={onSubmit} />} */}
            <Form />
            <Info />
            {/* {submit && <div>SUBMITTED</div>} */}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Register;
