import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { BASE_URL } from "../../Redux/constant";

const UpdateDoc = ({ doc, onSave, onCancel, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDoc, setEditedDoc] = useState({
    name: doc.name,
    url: doc.url,
    image: doc.image,
    id: doc._id,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDoc((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditedDoc((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSave = async () => {
    const formData = new FormData();

    formData.append("name", editedDoc.name);
    formData.append("url", editedDoc.url);
    if (editedDoc.image instanceof File) {
      formData.append("image", editedDoc.image);
    }

    await onSave(editedDoc.id, formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    onCancel();
  };

  return (
    <div className="bg-[#e8e5e5] w-[20rem] h-[20rem] rounded-md p-[10px] sm:w-[16rem] usm:w-full relative flex justify-between items-center flex-col  ">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedDoc.name}
            onChange={handleInputChange}
            placeholder="Document Name"
            className="w-full text-[20px] text-center font-semibold p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="url"
            value={editedDoc.url}
            onChange={handleInputChange}
            placeholder="Document URL"
            className="w-full text-[20px] text-center font-semibold p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-[16px] text-center font-medium p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="w-full flex justify-around items-center">
            <button
              onClick={handleSave}
              className="w-[8rem] h-[2.5rem] flex justify-center items-center gap-[5px] bg-green-500 hover:bg-green-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-white p-[5px] rounded-md"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="w-[8rem] h-[2.5rem] flex justify-center items-center gap-[5px] bg-gray-500 hover:bg-gray-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 text-white p-[5px] rounded-md"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-[25px] text-center font-semibold mb-4">
            {doc.name}
          </div>
          <img
            src={doc.image}
            alt={doc.name}
            className="w-[80%] h-max max-h-[12rem] object-cover object-center rounded-md shadow-md mb-4 mx-auto"
          />
          <div className="w-full flex justify-around items-center">
            <button
              onClick={handleEdit}
              className="w-[8rem] h-[2.5rem] flex justify-center items-center gap-[5px] bg-blue-500 hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white p-[5px] rounded-md"
            >
              Edit
              <MdEdit style={{ fontSize: "20px" }} />
            </button>
            <button
              onClick={() => handleDelete(doc._id)}
              className="w-[8rem] h-[2.5rem] flex justify-center items-center gap-[5px] bg-red-500 hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 text-white p-[5px] rounded-md"
            >
              Delete
              <MdDelete style={{ fontSize: "20px" }} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const UpdateDocuments = () => {
  const [docs, setDocs] = useState([]);

  const getAllDocs = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/api/document/all`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setDocs(res.data.docs);
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const handleSave = async (id, updatedDoc) => {
    try {
      await axios.put(`${BASE_URL}/api/document/update/${id}`, updatedDoc, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      toast.success("Document updated successfully!");
      getAllDocs();
    } catch (error) {
      toast.error("Failed to update document");
    }
  };

  const handleCancel = () => {};
  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${BASE_URL}/api/document/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <div className="w-full font2 min-h-screen p-6">
      <div className="text-gray-600  text-[22px] font-[400] my-4 text-center">
        Update Documents
      </div>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-2 pdusm:grid-cols-1">
        {docs?.length !== 0 &&
          docs?.map((doc) => (
            <UpdateDoc
              key={doc.id}
              doc={doc}
              onSave={handleSave}
              onCancel={handleCancel}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default UpdateDocuments;
