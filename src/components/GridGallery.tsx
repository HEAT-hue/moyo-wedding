"use client";
import { useState, useEffect } from "react";

type ImageUrl = string;

interface GridImage {
  url: string;
  caption?: string; 
}

interface ImageStyle {
  src: ImageUrl;
  aspectRatio: number;
  gridColumn?: "span 1" | "span 2";
  gridRow?: "span 1" | "span 2";
  priority?: boolean;
  height: number;
  width: number;
  caption?: string;
}

interface Props {
  images: GridImage[];
}

const ImageGrid: React.FC<Props> = ({ images }) => {
  const [imageStyles, setImageStyles] = useState<ImageStyle[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageStyle | null>(null);

  useEffect(() => {
    const loadImages = images.map(({ url, caption }) => {
      const img = new Image();
      img.src = url;
      return new Promise<ImageStyle>((resolve) => {
        img.onload = () => {
          resolve({
            src: url,
            aspectRatio: img.width / img.height,
            height: img.height,
            width: img.width,
            caption,
          });
        };
        img.onerror = () => {
          resolve({
            src: url,
            aspectRatio: 1,
            height: 300,
            width: 300,
            caption,
          });
        };
      });
    });

    Promise.all(loadImages).then(setImageStyles);
  }, [images]);

  const handleImageClick = (image: ImageStyle) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
        {imageStyles.map(({ src, aspectRatio, caption }, index) => {
          const displayHeight = Math.min(
            Math.max(250, aspectRatio < 1 ? 400 : 300),
            500
          );

          return (
            <div
              key={index}
              className="break-inside-avoid mb-4"
              onClick={() => handleImageClick(imageStyles[index])}
            >
              <div className="relative overflow-hidden rounded-md group cursor-pointer">
                <img
                  src={src}
                  alt={caption || `Gallery image ${index + 1}`}
                  className="w-full object-cover hover:scale-105 transition-all duration-300 object-fit"
                  style={{
                    height: `${displayHeight}px`,
                  }}
                  loading={index < 6 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption || "Modal image"}
              className="max-h-[80vh] w-auto rounded-lg m-auto"
            />
            {selectedImage.caption && (
              <div className="text-white text-center mt-4 p-2">
                {selectedImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;
