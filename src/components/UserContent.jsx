import React from "react";
import "../styles/layout.css"; // Import CSS styles

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
  return (
    <section className="user-section">
      <div className="p-container">
        <main className="main-content">
          <div className="p-header">
            <div className="h-profile">
              <button>
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

          <div className="image-grid">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </main>
        <nav className="sidebar">
          <div className="n-profile">
            <button>
              <img
                src="https://mir-s3-cdn-cf.behance.net/user/50/bae8791272723445.66a2223992876.jpg"
                alt="Profile"
              />
            </button>
            <div className="plus-icon">
              <i className="fa-solid fa-plus"></i> {/* Corrected */}
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
      </div>
    </section>
  );
};

export default UserContent;
