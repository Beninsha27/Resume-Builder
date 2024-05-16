import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Welcome to Resume Builder Application</h1>
        <h3>Welcome to our resume builder! We're here to make creating your resume easy and effective. 
          Our tool guides you through each step, from entering your information to formatting your resume. 
          Stand out to employers with a professional-looking resume that highlights your strengths. 
          Whether you're a recent graduate or a seasoned professional, our platform is designed for everyone. 
          Start building your resume today and land your dream job!</h3>
        <Link to='/create'>
        <button type='submit' class="btn btn-success">Create New Resume</button></Link>
    </div>
  )
}

export default Home