import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'; 
import JobList from '../components/JobList'; 
import Jobfooter from '../components/Jobfooter';

const JobPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <Sidebar onCategorySelect={handleCategorySelect} />
        <JobList selectedCategory={selectedCategory} />
      </div>
      <Jobfooter />
    </div>
  );
};

export default JobPage;