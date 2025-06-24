import React from "react";
import ProfileImage from "./PortfolioImage";
import ContentSection from "./ContentSection";

const Main = () => {
  return (
    <section className="pt-16 py-16  lg:py-24" id="about">
      <div className=" max-w-7xl mx-auto px-4 lg:px-8 h-max">
        <div className=" grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ProfileImage />
          <ContentSection />
          
        </div>
      </div>
    </section>
  );
};

export default Main;


