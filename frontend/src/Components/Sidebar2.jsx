import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { PiCubeLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { CiDatabase, CiShoppingCart } from "react-icons/ci";
import { MdOutlineCategory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FcElectricity } from "react-icons/fc";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GrTooltip, GrUpdate } from "react-icons/gr";
import { FaSliders, FaUpload } from "react-icons/fa6";

const SideBar2 = () => {
  return (
    <div className="absolute flex-col z-[1000] text-[#757575] font-[500] shadow-slate-500 shadow-md p-3 bg-white border-[1px]  rounded-md border-gray-400 text-[16px] w-[182px] left-0 top-[25px] ">
      <ul className="rounded-md text-start  first:rounded-md last:rounded-md ">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="adminDashboard"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <MdDashboard />
          </span>
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="usersList"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <LuUsers />
          </span>
          Users
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="createProduct"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <PiCubeLight />
          </span>
          Create Products
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
          to="categoryList"
        >
          <span className="text-[18px]">
            <MdOutlineCategory />
          </span>
          Category
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="createCategory"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <MdOutlineCategory />
          </span>
          Create Category
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="brandList"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <FcElectricity />
          </span>
          Brands
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="createBrand"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <FcElectricity />
          </span>
          Create Brand
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="createProject"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <HiOutlineDocumentText />
          </span>
          Create Project
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="projects"
          className="flex justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <HiOutlineDocumentText />
          </span>
          Update Projects
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="scrappeProducts"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <CiDatabase />
          </span>
          Scrape Products
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="createToolTip"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[20px]">
            <GrTooltip />
          </span>
          Create Tool Tip
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="updateToolTips"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[20px]">
            <GrUpdate />
          </span>
          Update Tool Tip
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="uploadDoc"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <FaUpload />
          </span>
          Upload Documents
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="updateDocs"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[20px]">
            <FaUpload />
          </span>
          Update Documents
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="orderList"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[18px]">
            <CiShoppingCart />
          </span>
          Orders
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="createSlide"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[20px]">
            <FaSliders />
          </span>
          Create Slide
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#525CEB" : "#757575",
          })}
          to="updateSlide"
          className="flex h-[32px] text-[12px] font-[500] justify-start items-center gap-1 "
        >
          <span className="text-[20px]">
            <FaSliders />
          </span>
          Update Slide
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar2;
