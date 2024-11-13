import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAllProjectQuery } from "../../Redux/Api/projectSlice";

const Projects = () => {
  const { data: projects, isLoading, error } = useAllProjectQuery();

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <Message variant="error">{error?.data?.error || error?.error}</Message>
  ) : (
    <div className="w-full min-h-screen p-6 font2">
      <div className="text-gray-600 text-[25px] font-[400] my-4 text-center">
        Projects
      </div>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {projects?.length !== 0 &&
          projects?.map((project) => (
            <div
              key={project._id}
              className="bg-[#e8e5e5] w-[20rem] h-[20rem] rounded-md p-[10px] sm:w-[16rem] relative flex justify-between items-center flex-col cursor-pointer"
              onClick={() =>
                (window.location.href = `/adminMenu/update/project/${project._id}`)
              }
            >
              <div className="text-[25px] text-center font-semibold mb-4">
                {project.title}
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-[80%] h-max max-h-[12rem] object-cover object-center rounded-md shadow-md mb-4 mx-auto"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
