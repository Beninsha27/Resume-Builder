
import React from 'react';

function ViewResumes({ resumeData }) {
  
  const renderPersonalInfo = () => {
    if (!resumeData.personal) return null;
    return (
      <>
        <h2>Personal Information</h2>
        <p>Name: {resumeData.personal.name}</p>
        <p>Email: {resumeData.personal.email}</p>
        <p>Phone: {resumeData.personal.phone}</p>
      </>
    );
  };

  const renderEducation = () => {
    if (!resumeData.education) return null;
    return (
      <>
        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <p>Degree: {edu.degree}</p>
            <p>Institution: {edu.institution}</p>
            <p>GPA: {edu.gpa}</p>
          </div>
        ))}
      </>
    );
  };

  const renderExperience = () => {
    if (!resumeData.experience) return null;
    return (
      <>
        <h2>Work Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Position: {exp.position}</p>
            <p>Duration: {exp.duration}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container">
      <h1>View Resume</h1>
      {renderPersonalInfo()}
      {renderEducation()}
      {renderExperience()}
    </div>
  );
}

export default ViewResumes;
