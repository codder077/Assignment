import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle, BsPlusCircle } from "react-icons/bs";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const initialImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8Hg7W_MXeeKhuUBPVB7FMrYOMhIUHdllpQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8Hg7W_MXeeKhuUBPVB7FMrYOMhIUHdllpQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8Hg7W_MXeeKhuUBPVB7FMrYOMhIUHdllpQ&s",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8Hg7W_MXeeKhuUBPVB7FMrYOMhIUHdllpQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8Hg7W_MXeeKhuUBPVB7FMrYOMhIUHdllpQ&s"
  ];

  const [images, setImages] = useState(initialImages);
  const [visibleImages, setVisibleImages] = useState([0, 1, 2, 3]);

  const handleLeftClick = () => {
    if (visibleImages[0] > 0) {
      setVisibleImages(visibleImages.map((index) => index - 1));
    }
  };

  const handleRightClick = () => {
    if (visibleImages[3] < images.length - 1) {
      setVisibleImages(visibleImages.map((index) => index + 1));
    }
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);

      if (visibleImages[3] === images.length - 1) {
        setVisibleImages(visibleImages.map((index) => index + 1));
      }
    }
  };

  return (
    <div
      className="rounded-2xl p-4 sm:p-6 shadow-lg"
      style={{ width: "100%", maxWidth: "500px", height: "auto", background: "#4f4f4f" }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="bg-black text-white text-lg py-1 px-4 rounded-full">Gallery</div>
        <div className="flex space-x-2">
          <div className="relative">
            <button className="text-white flex items-center space-x-1 bg-gray-600/70 rounded-full p-2">
              <BsPlusCircle size={20} />
              <span className="hidden sm:block">Add Image</span>
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleAddImage}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          <button
            onClick={handleLeftClick}
            className={`text-white p-2 rounded-full bg-gray-600/70 focus:outline-none ${
              visibleImages[0] === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={visibleImages[0] === 0}
          >
            <BsArrowLeftCircle size={20} />
          </button>
          <button
            onClick={handleRightClick}
            className={`text-white p-2 rounded-full bg-gray-600/70 focus:outline-none ${
              visibleImages[3] === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={visibleImages[3] === images.length - 1}
          >
            <BsArrowRightCircle size={20} />
          </button>
        </div>
      </div>

      <div className="flex space-x-4 overflow-visible">
        {visibleImages.map((index) => (
          <GalleryItem key={index} src={images[index]} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
