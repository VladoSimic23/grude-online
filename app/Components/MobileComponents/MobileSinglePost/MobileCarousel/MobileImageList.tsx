"use client";
import React, { useState } from "react";
import Image from "next/image";

const MobileImageList = ({
  images,
}: //title,
{
  images: string[];
  title: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div className="row m-0">
        {images.map((item: string, index) => {
          return (
            <div key={index} className="col-3 py-1 px-1">
              <Image
                src={item}
                alt={`Extra ${index + 1}`}
                width={100}
                height={100}
                className="d-block w-100"
                style={{
                  borderRadius: "12px",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
                priority
                onClick={() => setSelectedImage(item)}
              />
            </div>
          );
        })}
      </div>

      {/* Fullscreen Overlay */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full  bg-black bg-opacity-80 flex justify-center items-center z-500"
          style={{ position: "fixed", left: "0", zIndex: "50", height: "100%" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full" style={{ height: "100%" }}>
            {/* Close button */}
            <div className="d-flex justify-content-end">
              <i
                onClick={(e) => {
                  e.stopPropagation(); // prevent closing when clicking on image
                  setSelectedImage(null);
                }}
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "24px",
                  margin: "10px 15px",
                }}
                className="bi bi-x-lg"
              ></i>
            </div>
            {/* <button
              onClick={(e) => {
                e.stopPropagation(); // prevent closing when clicking on image
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            >
              ×
            </button> */}

            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={600}
              className="object-contain max-w-full max-h-screen rounded-lg"
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileImageList;
