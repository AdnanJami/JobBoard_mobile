import React, { useState, useEffect } from 'react'
import '../styles/BasicIntro.css'
import api from "../api"; 
import { Link, useNavigate } from "react-router-dom";

function Basic_Intro() {
  const [username, setUsername] = useState("User");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/api/v1/current-user/");
        console.log(response)
        setUsername(response.data.username);
      } catch (err) {
        console.error(err);
        // fallback to localStorage if backend not working
        const storedUser = localStorage.getItem("username");
        if (storedUser) setUsername(storedUser);
      }
    };
    fetchUser();
  }, []);

  const getJobs = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/v1/jobs/');
      setJobs(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className='super-container'>
      <div className="welcome-section">
        <h1 className="title">Welcome to Jobaroo</h1>
        <p className="subtitle">Gateway to hell</p>
      </div>
      
      <div className="content-grid">
        <div className="job-board-section">
          <h2 className="section-title">Job Board</h2>
          <div className="job-items">
            {loading && <p>Loading jobs...</p>}
            {error && <p className="text-red-500">⚠️ {error}</p>}
            {!loading && jobs.length === 0 && (
              <p className="no-results">No jobs found matching your search.</p>
            )}
            {jobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="job-card"
                onClick={() => navigate(`/job-board`)}
              >
                <div className='job-card-header'>
                  <div className='job-titles'>
                    <div className="title">
                      {job.title}
                    </div>
                    <p className="company-name">
                      {job.company}
                    </p>
                  </div>
                </div>
                
                <p className="description">
                  {job.description}
                </p>
                <p className="location">Location: {job.location}</p>

                <div className="skills-section">
                  {job.skills && job.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <div className="job-poster">
                  Posted by {job.posted_by_username}
                </div>
              </div>
            ))}
          </div>
          
          <div className='showmore'>
            <Link to="/job-board" style={{ fontSize: "14px", textDecoration: 'none' }}>
              Show More
            </Link>
          </div>
        </div>
        
        <div className="sidebar">
          <div className="sidebar-item">
            Hello, {username}
          </div>
          <div className="sidebar-item">
            <Link to="/my-job" style={{ fontSize: "14px", textDecoration: 'none' }}>
              Find Job
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to="/post-job" style={{ fontSize: "14px", textDecoration: 'none' }}>
              Post Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basic_Intro