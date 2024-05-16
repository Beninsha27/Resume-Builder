

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateResume({ setResumeData }) {
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handlePersonalInfoChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const [education, setEducation] = useState([{ degree: '', institution: '', gpa: '' }]);

  const handleEducationChange = (index, e) => {
    const updatedEducation = [...education];
    updatedEducation[index][e.target.name] = e.target.value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { degree: '', institution: '', gpa: '' }]);
  };

  const [experience, setExperience] = useState([{ company: '', position: '', duration: '' }]);

  const handleExperienceChange = (index, e) => {
    const updatedExperience = [...experience];
    updatedExperience[index][e.target.name] = e.target.value;
    setExperience(updatedExperience);
  };

  const addExperience = () => {
    setExperience([...experience, { company: '', position: '', duration: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData({
      personal: { ...personal },
      education: [...education],
      experience: [...experience]
    });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Create Resume</h1>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" className="form-control-sm" name="name" value={personal.name} onChange={handlePersonalInfoChange} required />

        <label>Email:</label>
        <input type="email" className="form-control-sm" name="email" value={personal.email} onChange={handlePersonalInfoChange} required />

        <label>Phone:</label>
        <input type="tel" className="form-control-sm" name="phone" value={personal.phone} onChange={handlePersonalInfoChange} required />
        <br /><br />
        <h2>Education</h2>
        <br />
        {education.map((edu, index) => (
          <div key={index}>
            <label>Degree:</label>
            <input type="text" className="form-control-sm" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} required />

            <label>Institution:</label>
            <input type="text" className="form-control-sm" name="institution" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} required />

            <label>GPA:</label>
            <input type="text" className="form-control-sm" name="gpa" value={edu.gpa} onChange={(e) => handleEducationChange(index, e)} required />
            <br />
          </div>
        ))}<br />
        <button type="button" className="btn btn-success" onClick={addEducation}>Add Education</button>
        <br /><br />
        <h2>Work Experience</h2><br />
        {experience.map((exp, index) => (
          <div key={index}>
            <label>Company:</label>
            <input type="text" className="form-control-sm" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} required />

            <label>Position:</label>
            <input type="text" className="form-control-sm" name="position" value={exp.position} onChange={(e) => handleExperienceChange(index, e)} required />

            <label>Duration:</label>
            <input type="text" className="form-control-sm" name="duration" value={exp.duration} onChange={(e) => handleExperienceChange(index, e)} required />
            <br />
          </div>
        ))}<br />
        <button type="button" className="btn btn-success" onClick={addExperience}>Add Work Experience</button>
        <br /><br/>
        <button type="submit" className="btn btn-primary">Save Resume</button>
        <Link to='/view' className="btn btn-secondary ml-2">View Resume</Link>
      </form>
    </div>
  );
}

export default CreateResume;
