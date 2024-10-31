import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import glb from "../../assets/steel-page.glb";
import pressBrake from "../../assets/press-brake.png";
import laserCutter from "../../assets/laser-cuttern.jpg";
import laserWelder from "../../assets/welding-bays.jpg";
import guillotine from "../../assets/gullotine.jpg";
import studWelder from "../../assets/stud-welder.jpg";
import steel1 from "../../assets/STEEL 1.png";
// import steel3 from "../../assets/Steel 2.jpg";
import steel3 from "../../assets/STEEL 3.jpg";
// import steel4 from "../../assets/Steel 4.jpg";
import steel5 from "../../assets/STEEL 5.jpg";
import steel6 from "../../assets/STEEL 6.jpg";
import steel7 from "../../assets/STEEL 7.png";
import steel8 from "../../assets/STEEL 8.jpg";
import steel9 from "../../assets/STEEL 9.jpg";

function SteelEnclosureModel() {
  const { scene } = useGLTF(glb);
  return <primitive object={scene} scale={1} />;
}

export default function SteelEnclosurePage() {
  const [infoExpanded, setInfoExpanded] = useState(false);
  const machines = [
    { title: "Laser Cutter", image: laserCutter },
    { title: "Press Brake", image: pressBrake },
    { title: "Laser Welder", image: laserWelder },
    { title: "Laser Cutter", image: laserCutter },
    { title: "Guillotine", image: guillotine },
    { title: "Stud Welder", image: studWelder },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center font-sans">
      <header className="w-[65%] mt-5 text-center py-8 text-gray-600">
        <h1 className="text-4xl font-bold text-gray-600">
          Precision Steel Enclosures for Electrical Distribution Boards
        </h1>
        <p className="text-xl mt-2 text-[#82828B]">
          High-Quality, Customizable Enclosures for Distribution Boards and
          Electrical Systems
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="text-[#FFFFFF] bg-[#525CEB] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Request a Quote
          </button>
          <button className="bg-transparent border border-[#525CEB] text-[#525CEB] px-6 py-2 rounded-lg font-semibold hover:bg-[#525CEB] hover:text-white">
            Explore Our Enclosures
          </button>
        </div>
      </header>

      <section className="w-[65%] mt-0 flex justify-center bg-gray-300">
        <div className="relative w-full h-[400px] md:h-[600px]">
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight intensity={1.5} position={[5, 10, 5]} />
            <OrbitControls enableZoom={true} />
            <Environment preset="sunset" />
            <SteelEnclosureModel />
          </Canvas>
        </div>
      </section>

      <section className="w-[65%] my-12 text-center  p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-600">
          Expert Fabrication of Steel Enclosures
        </h2>
        <p className="text-[#82828B] mt-4">
          Our steel section specializes in the fabrication of high-performance
          steel enclosures for Distribution Boards and electrical systems. We
          use cutting-edge machinery and materials to deliver robust,
          customizable solutions.
        </p>
        <button className="text-[#525CEB] border border-[#525CEB] px-6 py-2 mt-6 rounded-lg font-semibold hover:bg-[#525CEB] hover:text-white">
          Learn More
        </button>
      </section>

      <section className="w-[65%] my-8 bg-white    p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-600">
          Our Advanced Machinery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2rem] mt-6">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="bg-[#EDEBE9] p-4 rounded-lg flex justify-between items-center flex-col shadow-md text-center"
            >
              <img
                src={machine.image}
                alt={machine.title}
                className="h-full w-full max-h-80 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold text-[#525CEB]">
                {machine.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="w-[65%] my-8 bg-white  p-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-gray-600">
          Premium Steel Materials
        </h2>
        <p className="text-[#82828B] mt-4">
          We manufacture enclosures using high-quality steel materials, ensuring
          strength, corrosion resistance, and long-term durability. Our options
          include stainless, galvanized, mild, and Aluzinc steel.
        </p>
      </section>

      <section className="w-[65%] my-8 bg-white  p-6 rounded-lg">
        <h2 className="text-3xl mb-[5rem] font-bold text-gray-600 ">
          Custom-Built Steel Enclosures
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2rem] mt-6">
          {[steel1, steel3, steel5, steel6, steel7, steel8, steel9].map(
            (id) => (
              <img
                key={id}
                src={id}
                alt={`Steel Enclosure ${id}`}
                className="h-80 w-full object-contain object-center rounded-lg shadow-md"
              />
            )
          )}
        </div>
      </section>

      <section className="w-[65%] my-12 bg-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-600 mb-4">
          Why Choose Us?
        </h2>
        <ul className="text-[#82828B] mt-6 list-disc list-inside space-y-2 text-left text-[20px]">
          <li>Precision manufacturing with advanced machinery</li>
          <li>
            High-quality steel materials, including Aluzinc and Stainless Steel
          </li>
          <li>
            Custom enclosures designed to fit your electrical distribution
            boards
          </li>
          <li>
            Trusted by industry leaders for durable and reliable solutions
          </li>
        </ul>
      </section>
    </div>
  );
}
