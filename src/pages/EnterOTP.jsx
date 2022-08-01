import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import EnterOTPC from "../components/signin/EnterOTP";

export default function EnterOTP() {
  return (
    <div>
      <Navbar />
      <EnterOTPC />
      <Footer />
    </div>
  );
}