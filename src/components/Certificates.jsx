import React from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Certificate";
import personalProjects from "../data/certificates";
import GridLayout from "./GridLayout";
const Certificates = () => {
  return (
    <div
      name="Projects"
      className=" h-full min-h-screen w-full flex items-center  bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="section">
        <SectionHeading heading="Skillset Spotlight" />

        <GridLayout style="sm:grid-cols-2 md:max-w-2xl  mx-auto lg:max-w-none lg:grid-cols-4 ">
          {personalProjects.map((project) => {
            return <Project key={project.name} project={project} />;
          })}
        </GridLayout>
      </div>
    </div>
  );
};

export default Certificates;
