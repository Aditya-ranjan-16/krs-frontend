import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import ForgetPasswordC from "./../components/signin/ForgetPassword";

export default function ForgetPassword() {
  return (
    <div>
      <Navbar />
      <ForgetPasswordC />
      <Footer />
    </div>
  );
}