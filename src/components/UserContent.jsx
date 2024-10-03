
import React, { useState } from "react";
import "../styles/layout.css"; // Import CSS styles
import Modal from "./Modal"; // Import the Modal component

// Import images from the assets folder
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

const UserContent = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // State to track the selected image
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  const [showSidebarModal, setShowSidebarModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [modalTimeout, setModalTimeout] = useState(null);

  // Handlers for the image modal
  const handleImageClick = (index) => {
    setSelectedImageIndex(index); // Set clicked image as the selected one
  };

  const handleNext = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleClose = () => {
    setSelectedImageIndex(null); // Reset selected image to close viewer
  };

  // Handlers for header and sidebar modals (unchanged)
  const handleHeaderMouseEnter = (e) => {
    setShowHeaderModal(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY - 99,
      left: rect.left + window.scrollX,
    });
  };

  const handleHeaderMouseLeave = () => {
    setShowHeaderModal(false);
  };

  const handleSidebarMouseEnter = (e) => {
    setShowSidebarModal(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + window.scrollY - 70,
      left: rect.left - 205,
    });
  };

  const handleSidebarMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowSidebarModal(false);
    }, 100);
    setModalTimeout(timeout);
  };

  const handleModalMouseEnter = () => {
    if (modalTimeout) {
      clearTimeout(modalTimeout);
      setModalTimeout(null);
    }
  };

  const handleModalMouseLeave = () => {
    setShowSidebarModal(false);
  };

  return (
    <section className="user-section">
      <div className="p-container">
        <main className="main-content">
          {/* Header Section */}
          <div className="p-header">
            <div
              className="h-profile"
              onMouseEnter={handleHeaderMouseEnter}
              onMouseLeave={handleHeaderMouseLeave}
            >
              <button className="btn">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/user/50/bae8791272723445.66a2223992876.jpg"
                  alt="Profile"
                />
              </button>
              <div className="profile-text">
                <h2>Harley-Davidson UX/UI</h2>
                <span className="tonic-black">Tonic Black</span>
                <span className="follow">Follow</span>
              </div>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="image-grid">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                loading="lazy"
                onClick={() => handleImageClick(index)} // Click event to open the image
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          {/* New Section for Likes, Views, Comments */}
          <div className="pro-info-container">
            <div className="pro-like-blue">
              <button className="pro-button">
                <i className="fa-solid fa-thumbs-up"></i>
              </button>
              <h2 className="pro-like-heading">Harley-Davidson UX/UI</h2>
            </div>
            <div className="pro-stats">
              <button className="pro-button">
                <i className="fa-solid fa-thumbs-up"></i> 711k
              </button>
              <button className="pro-button">
                <i className="fa-solid fa-eye"></i> 3.9k
              </button>
              <button className="pro-button">
                <i className="fa-solid fa-message"></i> 1.2k
              </button>
            </div>
            <div className="pro-publish">
              <p>Published: March 17th 2023</p>
            </div>
          </div>
        </main>

        {/* Sidebar Navigation */}
        <nav className="sidebar">
          <div
            className="n-profile"
            onMouseEnter={handleSidebarMouseEnter}
            onMouseLeave={handleSidebarMouseLeave}
          >
            <button>
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/50/bae8791272723445.66a2223992876.jpg"
                alt="Profile"
              />
            </button>
            <div className="plus-icon">
              <i className="fa-solid fa-plus"></i>
            </div>
            <span>Follow</span>
          </div>
          <div>
            <button>
              <i className="fa-sharp fa-solid fa-envelope"></i>
            </button>
            <span>Hire</span>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </button>
            <span>Tools</span>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <span>Save</span>
          </div>
          <div>
            <button>
              <i className="fa-solid fa-share-from-square"></i>
            </button>
            <span>Share</span>
          </div>
          <div>
            <button className="btn-black">
              <i className="fa-solid fa-thumbs-up"></i>
              <p className="btn-text">711</p>
            </button>
          </div>
        </nav>

        {/* Full-screen Image Viewer Modal */}
        {selectedImageIndex !== null && (
          <div className="image-viewer full-screen">
            <div className="image-viewer-content">
              <button className="close-btn" onClick={handleClose}>X</button>

              {/* Left Arrow */}
              {selectedImageIndex > 0 && (
                <button className="arrow-left" onClick={handlePrevious}>
                  {"<"}
                </button>
              )}

              <img
                src={images[selectedImageIndex]}
                alt={`Selected Image ${selectedImageIndex + 1}`}
                className="full-screen-image"
              />

              {/* Right Arrow */}
              {selectedImageIndex < images.length - 1 && (
                <button className="arrow-right" onClick={handleNext}>
                  {">"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserContent;
