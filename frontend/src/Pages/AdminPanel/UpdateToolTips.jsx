import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import Annotation from "react-image-annotation";
import { toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "../../assets/createToolTip.css";
import { useUploadProductImageMutation } from "../../Redux/Api/productSlice";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from "../../Redux/constant";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const UpdatePanel = ({ ImageHotSpot, setEdit }) => {
  const [annotations, setAnnotations] = useState([]);
  const [annotation, setAnnotation] = useState({});
  const [image, setImage] = useState("");
  const [redirectUrls, setRedirectUrls] = useState({});
  const [uploadImage] = useUploadProductImageMutation();
  const [viewAnnotationsModal, setViewAnnotationsModal] = useState(false);
  const [annotationImage, setAnnotationImage] = useState("");

  const onChange = useCallback((annotation) => {
    setAnnotation({
      ...annotation,
      data: { ...annotation.data, id: annotation?.data?.id || uuidv4() },
    });
  }, []);

  const onSubmit = useCallback(
    (annotation) => {
      const { geometry, data } = annotation;
      const id = data.id;
      setAnnotations((prevAnnotations) => [
        ...prevAnnotations,
        {
          id,
          geometry,
          data: {
            ...data,
            redirectUrl: redirectUrls[id] || "",
            image: annotationImage,
          },
        },
      ]);
      setAnnotation({});
      setAnnotationImage(""); // Reset annotation image after submission
    },
    [redirectUrls, annotationImage]
  );

  const uploadAnnotationImageHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadImage(formData).unwrap();
      setAnnotationImage(res.image);
    } catch (error) {
      toast.error("Failed to upload image. Please try again.");
    }
  };
  const handleUpdateUpload = async () => {
    if (!image || !annotations) {
      return toast.error("Please fill in all fields!");
    }

    console.log("Annotations being uploaded:", annotations);

    try {
      const res = await axios.post(
        `${BASE_URL}/api/tooltip/update`,
        { image, annotations, id: ImageHotSpot._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Upload failed. Please try again.");
      console.error("Error during upload:", error);
    }
  };

  const handleUrlChange = (id, value) => {
    setRedirectUrls((prevUrls) => ({
      ...prevUrls,
      [id]: value,
    }));
  };

  const handleAnnotationClick = (url) => {
    if (url) {
      window.location.href = url;
    }
  };

  const deleteAnnotation = (id) => {
    setAnnotations((prevAnnotations) =>
      prevAnnotations.filter((annot) => annot.id !== id)
    );
    toast.success("Annotation deleted successfully.");
  };

  const toggleViewAnnotationsModal = () => {
    setViewAnnotationsModal((prev) => !prev);
  };

  const deleteAnnotationImage = () => {
    setAnnotationImage("");
  };

  useEffect(() => {
    if (ImageHotSpot) {
      setImage(ImageHotSpot.image);
      setAnnotations(ImageHotSpot.annotations || []);
    }
  }, [ImageHotSpot]);

  return (
    <div className="p-5 flex flex-col justify-center items-center w-full gap-5 md:gap-10 overflow-auto">
      <button
        onClick={() => {
          setEdit(false);
        }}
        className="text-red-600 text-[30px] absolute top-0 right-0 m-[50px]"
      >
        <CgClose />
      </button>

      <div className="wrapper-main rounded-xl relative h-max max-w-3xl overflow-hidden shadow-lg  py-[60px]">
        <Annotation
          src={image}
          alt="Annotatable"
          annotations={annotations}
          type="POINT"
          value={annotation}
          onChange={onChange}
          onSubmit={onSubmit}
        />
        {annotations.map((annot) => (
          <div
            key={annot.id}
            data-tip={annot.data.text}
            onClick={() => handleAnnotationClick(annot.data.redirectUrl)}
            style={{
              position: "absolute",
              top: `${annot.geometry.y * 100}%`,
              left: `${annot.geometry.x * 100}%`,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "red",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              cursor: "pointer",
            }}
          />
        ))}
        <ReactTooltip />
      </div>
      <div>
        {annotation.geometry && annotation.data?.id && (
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Enter redirect URL for this annotation"
              value={redirectUrls[annotation.data.id] || ""}
              onChange={(e) =>
                handleUrlChange(annotation.data.id, e.target.value)
              }
              className="mt-4 p-2 border rounded w-full"
            />
            <div className="mt-2">
              {annotationImage ? (
                <div className="relative">
                  <img
                    src={annotationImage}
                    alt="Annotation"
                    className="w-full h-48 object-cover rounded"
                  />
                  <button
                    onClick={deleteAnnotationImage}
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    Delete Image
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadAnnotationImageHandler}
                  className="mt-2 p-2 border rounded w-full"
                />
              )}
            </div>
          </div>
        )}
        <button
          className="w-full max-w-xs md:max-w-md bg-blue-500 h-12 py-3 text-lg rounded-lg text-white shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={handleUpdateUpload}
        >
          Update Annotations
        </button>

        {/* Modal for viewing annotations */}
        {viewAnnotationsModal && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg max-w-md">
              <h2 className="text-xl font-bold mb-4">Annotations</h2>
              <ul>
                {annotations.map((annot) => (
                  <li key={annot.id} className="mb-2">
                    <p>{annot.data.text}</p>
                    <button
                      onClick={() => deleteAnnotation(annot.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={toggleViewAnnotationsModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Button to toggle view annotations modal */}
        <button
          className="mt-4 bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={toggleViewAnnotationsModal}
        >
          View Annotations
        </button>
      </div>
    </div>
  );
};

const UpdateToolTips = () => {
  const [imageHotSpots, setImageHotSpots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [edit, setEdit] = useState(false);
  const [annotData, setAnnotData] = useState(null);

  const getAllToolTipImages = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/tooltipimages/all`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setImageHotSpots(res.data.imageHotspots);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    getAllToolTipImages();
  }, [getAllToolTipImages]);

  const deleteAnnotationImage = async (id) => {
    if (!id) {
      return toast.error("ID not found!");
    }
    try {
      const res = await axios.get(`${BASE_URL}/api/tooltip/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success(res.data.message);
      // Refresh imageHotSpots after deletion
      handleNext();
      getAllToolTipImages();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imageHotSpots.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < imageHotSpots.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleEdit = () => {
    setAnnotData(imageHotSpots[currentIndex]);
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <UpdatePanel ImageHotSpot={annotData} setEdit={setEdit} />
      ) : (
        <div className="p-5 flex flex-col items-center w-full gap-5 md:gap-10 overflow-auto">
          <div className="text-gray-800 text-2xl font-semibold mt-5 tracking-wide w-full text-center">
            Select an Image to Update Hotspots
          </div>
          <div className="flex flex-col items-center">
            {imageHotSpots.length > 0 && (
              <>
                <div className="wrapper-main rounded-xl relative h-max max-w-3xl overflow-hidden shadow-lg ">
                  <Annotation
                    src={imageHotSpots[currentIndex].image}
                    alt="Annotatable"
                    annotations={imageHotSpots[currentIndex].annotations}
                    type="POINT"
                    value={imageHotSpots[currentIndex].annotation}
                  />
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={handlePrevious}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <IoIosArrowBack size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white p-2 rounded-full ml-4 hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <IoIosArrowForward size={24} />
                  </button>
                </div>
                <div className="flex justify-center items-center gap-[20px]">
                  <button
                    onClick={handleEdit}
                    className="mt-4 bg-blue-500 h-12 w-48 py-2 text-lg rounded-lg text-white shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      deleteAnnotationImage(imageHotSpots[currentIndex]._id)
                    }
                    className="bg-red-500 text-white  w-48 texxt-lg mt-4 h-12 rounded hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateToolTips;
