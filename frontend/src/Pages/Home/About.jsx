import React from "react";

const About = () => {
  return (
    <div className="w-full flex justify-center mt-12 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[85%] sm:max-w-[90%]">
        <div className="text-lg md:text-lg lg:text-2xl font-semibold mb-4 text-gray-800 t">
          Leading Experts in Low Voltage Distribution Boards
        </div>
        <div className="text-sm md:text-base lg:text-lg font-light tracking-wide leading-6 md:leading-8 text-gray-700z  ">
          <p className="mb-6 font3">
            With years of experience in Electrical Consulting and Manufacturing
            of Low-Medium Voltage Switchgear Panels,{" "}
            <strong className="font-bold">
              Distribution Boards SA (PTY) Ltd{" "}
            </strong>
            is your go-to partner for complex and large-scale projects. Our team
            includes ECSA registered Professionals and highly trained Engineers
            dedicated to providing Efficient and Effective Engineering
            Solutions.
          </p>
          <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-lg lg:text-xl font-semibold mb-4 text-gray-800">
                Our Product Range
              </h3>
              <p className="mb-4 font3">
                We specialize in a wide array of products including:
              </p>
              <ul className="list-disc list-inside space-y-2 font3">
                <li>Electrical Boards</li>
                <li>Motor Control Panels</li>
                <li>Electrification Equipment</li>
                <li>Switchboards</li>
                <li>AC Combiner Panels</li>
                <li>DC Fuse Boxes</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-lg lg:text-xl font-semibold mb-4 text-gray-800">
                Comprehensive Electrical Solutions
              </h3>
              <p className="mb-4 font3">
                Beyond our complete Electrical Board Systems, we offer a range
                of design services:
              </p>
              <ul className="list-disc list-inside space-y-2 font3">
                <li>Single Line Diagrams</li>
                <li>General Arrangements</li>
                <li>Technical Drawings</li>
                <li>Technical Drawings</li>
                <li>Solar Design</li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-lg lg:text-xl font-semibold mb-4 text-gray-800">
                Loose Supply of Equipment for Maintenance
              </h3>
              <p className="mb-4 font3">
                We provide Loose Supply of high-quality equipment for
                maintenance purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 font3">
                <li>Circuit Breakers</li>
                <li>Isolators</li>
                <li>Earth Leakage Units</li>
                <li>Switches</li>
                <li>Meters</li>
                <li>Din Rail Products</li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg md:text-lg lg:text-xl font-semibold mb-4 text-gray-800">
            Why Choose Distribution Boards SA?
          </h3>
          <p className="font3">
            At Distribution Boards SA, we have the facilities to Design,
            Manufacture, Assemble, Wire, and Test Electrical Boards and
            Distribution Panels of any kind. Trust us to deliver superior
            quality and performance for your electrical needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
