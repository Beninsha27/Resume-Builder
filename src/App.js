import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Home';
import CreateResume from './CreateResume';
import ViewResumes from './ViewResumes';

function App() {
  const [resumeData, setResumeData] = useState({
    personal: {
      name: '',
      email: '',
      phone: ''
    },
    education: [],
    experience: []
  });

  return (
    <BrowserRouter><center>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateResume setResumeData={setResumeData} />} />
          <Route path="/view" element={<ViewResumes resumeData={resumeData} />} />
        </Routes>
      </div></center>
    </BrowserRouter>
  );
}

export default App;
