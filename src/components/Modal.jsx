import React from "react";
import "../styles/modal.css"; // Ensure you have a proper CSS file for modal styles

const Modal = ({ showModal, closeModal }) => {
  return (
    <div
      className={`modal ${showModal ? "visible" : ""}`}
      aria-hidden={!showModal}
      aria-modal={showModal}
      onClick={closeModal} // Modal closes when the user clicks outside the modal content
    >
      <div
        className="modal-content"
        role="dialog"
        aria-labelledby="modal-heading"
        aria-describedby="modal-description"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <img
          src="https://mir-s3-cdn-cf.behance.net/user/100/bae8791272723445.66a2223992876.jpg"
          alt="Tonic Black's Profile"
          className="modal-profile-image"/>
        <h2 id="modal-heading">Tonic Black</h2>
        <div className="location" id="modal-description">
          <i className="fas fa-location-dot"></i> Minsk, Belarus
        </div>
        <div className="tags">
          <button className="tag-1" aria-label="Freelance job status">
            Freelance
          </button>
          <button className="tag-2" aria-label="Full-time job status">
            Full-Time
          </button>
        </div>
        <div className="stats">
          <span>1.6k Appreciations</span>
          <span className="divider">|</span>
          <span>87 Followers</span>
          <span className="divider">|</span>
          <span>9.8k Project Views</span>
        </div>
        <div className="modal-buttons">
          <button className="follow-btn" aria-label="Follow Tonic Black">
            <i className="fas fa-plus"></i> Follow
          </button>
          <button className="hire-btn" aria-label="Hire Tonic Black">
            <i className="fas fa-envelope"></i> Hire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
