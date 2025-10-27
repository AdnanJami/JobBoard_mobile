import React, { useState, useEffect } from 'react';
import '../styles/BasicIntro.css';
import api from '../api';
import { Link, useNavigate } from 'react-router-dom';

function BasicIntro() {
  const [username, setUsername] = useState('User');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/api/v1/current-user/');
        setUsername(response.data.username);
      } catch (err) {
        console.error('User fetch error:', err);
        // fallback to local storage
        const storedUser = localStorage.getItem('username');
        if (storedUser) setUsername(storedUser);
      }
    };
    fetchUser();
  }, []);

  // Fetch jobs
  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const response = await api.get('/api/v1/jobs/');
        setJobs(response.data);
      } catch (err) {
        setError(err.response?.data?.detail || err.message || 'Failed to load jobs');
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  return (
    <div className="super-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="title">Welcome to Jobaroo</h1>
        <p className="subtitle">Gateway to Opportunity</p>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Job Board Section */}
        <section className="job-board-section">
          <h2 className="section-title">Job Board</h2>

          <div className="job-items">
            {loading && <p>Loading jobs...</p>}
            {error && <p className="text-red-500">⚠️ {error}</p>}
            {!loading && !error && jobs.length === 0 && (
              <p className="no-results">No jobs found matching your search.</p>
            )}

            {jobs.slice(0, 3).map((job) => (
              <article
                key={job.id}
                className="job-card"
                onClick={() => navigate('/job-board')}
              >
                <header className="job-card-header">
                  <div className="job-titles">
                    <h3 className="title">{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                </header>

                <p className="description">{job.description}</p>
                <p className="location">Location: {job.location}</p>

                {job.skills?.length > 0 && (
                  <div className="skills-section">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <footer className="job-poster">Posted by {job.posted_by_username}</footer>
              </article>
            ))}
          </div>

          <div className="showmore">
            <Link to="/job-board" className="showmore-link">
              Show More
            </Link>
          </div>
        </section>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <div className="sidebar-item">Hello, {username}</div>
          <div className="sidebar-item">
            <Link to="/my-job">Find Job</Link>
          </div>
          <div className="sidebar-item">
            <Link to="/post-job">Post Job</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BasicIntro;
