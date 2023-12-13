
import React from "react";
import Layout from "./layout/Layout";
import Home from "./dashbord";
import AboutPage from "./about";

export default function HomePage() {
  return (
    <>
      <Layout>
        <AboutPage/>
        {/* <Home /> */}
      </Layout>
    </>
  );
}
