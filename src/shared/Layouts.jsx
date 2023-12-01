import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <>
      <Header />
      <Outlet
        style={{
          background: "rgba(0, 0, 0, 0.04)",
          backdropFilter: "blur(5.9px)",
        }}
      />
      <Footer />
    </>
  );
}

export default Layouts;
