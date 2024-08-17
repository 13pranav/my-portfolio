import React, { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import img1 from "../images/colour.jpg";
import img2 from "../images/me.jpg";
import img3 from "../images/Covid.jpg";

const posts = [
  { title: "Uplifted Soul", image: img1 },
  { title: "Bag of Dreams", image: img2 },
  { title: "Impact of COVID-19", image: img3 }
];

const preloadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
  });
};

const Blog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    // Preload images when the component mounts
    posts.forEach((post) => {
      preloadImage(post.image);
    });
  }, []);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [selectedImage]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16">Portraits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => openPopup(post.image)}>
              <LazyLoadImage
                src={post.image}
                alt={post.title}
                effect="blur"
                className="w-full h-60 object-cover"
                wrapperClassName="w-full h-60"
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div ref={popupRef} className="relative max-w-4xl w-full h-full">
            <button 
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closePopup}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Full size"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
