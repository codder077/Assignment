import React from "react";

function GalleryItem({ src }) {
  return (
    <div className="relative w-1/5 h-20 overflow-visible">
      <div className="group relative w-full h-full transition-all duration-300 ease-in-out">
        <img
          src={src}
          alt="Gallery Item"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:-rotate-8 group-hover:-translate-y-4 group-hover:-translate-x-2 group-hover:shadow-2xl"
        />
      </div>
    </div>
  );
}

export default GalleryItem;
