import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import JobList from '../components/JobList';
import Jobfooter from '../components/Jobfooter';
import JobModal from '../components/JobModal'; // Import the modal component

const JobPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenModal = () => {
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="app">
      <Header />
      <button 
        className="new_job_btn-pro" 
        style={{width:"15%", margin:"20px"}} 
        onClick={handleOpenModal} // Open modal on button click
      >+ <span>New Job</span></button>
      
      {isModalOpen && <JobModal onClose={handleCloseModal} />} {/* Render the modal if it's open */}

      <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <Sidebar onCategorySelect={handleCategorySelect} />
        <JobList selectedCategory={selectedCategory} />
      </div>
      <Jobfooter />
    </div>
  );
};

export default JobPage;
