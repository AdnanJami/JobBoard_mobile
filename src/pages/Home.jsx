import React, { useState } from 'react';
import {
  Search,
  X,
  ChevronDown,
  Bell,
  HelpCircle,
  Settings,
  Menu,
  LogOut
} from 'lucide-react';
import '../styles/Home.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const handleProfileClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    handleLogout();
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="app">
      {/* Header - Desktop */}
      <header className="header desktop-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <Link to="/" style={{ color: 'green', textDecoration: 'none' }}>Jobaroo</Link>
            </div>
            <nav className="nav">
              <button className="nav-btn"><Link to="/job-board" style={{ fontSize: "14px", textDecoration: 'none' }}>Find Job</Link></button>
              <button className="nav-btn"><Link to="/post-job" style={{ fontSize: "14px", textDecoration: 'none' }}>Post Job</Link></button>
              <button className="nav-btn"><Link to="/my-job" style={{ fontSize: "14px", textDecoration: 'none' }}>My Job</Link></button>
            </nav>
          </div>

          <div className="header-right">
            <button className="icon-btn" aria-label="Help"><HelpCircle size={20} /></button>
            <button className="icon-btn" aria-label="Notifications"><Bell size={20} /></button>
            <button className="icon-btn" aria-label="Settings"><Settings size={20} /></button>
            <div className="avatar" onClick={handleProfileClick} style={{ cursor: 'pointer' }}></div>
          </div>
        </div>
      </header>

      {/* Header - Mobile */}
      <header className="header mobile-header">
        <div className="mobile-header-content">
          <button className="icon-btn" onClick={() => setShowMobileMenu(true)} aria-label="Open menu"><Menu size={24} /></button>
          <div className="logo">Jobaroo</div>
          <button className="icon-btn" aria-label="Search"><Search size={24} /></button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <a href="https://adnanjami.github.io/">About Us</a>
            <a href="#">Feedback</a>
            <a href="#">Trust, Safety & Security</a>
          </div>
          <div className="footer-column">
            <a href="#">Help & Support</a>
            <a href="#">Jobaroo Foundation</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-column">
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer-column">
            <a href="#">Desktop App</a>
            <a href="#">Enterprise Solutions</a>
            <a href="#">Release Notes</a>
          </div>
        </div>

        <div className="footer-social">
          <div className="social-left">
            <span>Follow Us</span>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/adnan-jami-27795823b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
              <a href="https://github.com/AdnanJami" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <hr />
          <p>© 2025 Jobaroo Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Menu Modal */}
      {showMobileMenu && (
        <div className="modal-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="logo">Jobaroo</div>
              <button onClick={() => setShowMobileMenu(false)} className="modal-close"><X size={24} /></button>
            </div>

            <div className="mobile-menu-body">
              <nav className="mobile-nav">
                <button className="mobile-nav-item">Find Job</button>
                <button className="mobile-nav-item">
                  <span>Post Job</span>
                  <ChevronDown size={20} />
                </button>
              </nav>

              <div className="mobile-menu-divider"></div>

              <div className="mobile-menu-actions">
                <button className="mobile-menu-action"><HelpCircle size={20} /><span>Help</span></button>
                <button className="mobile-menu-action"><Bell size={20} /><span>Notifications</span></button>
                <button className="mobile-menu-action"><Settings size={20} /><span>Settings</span></button>
              </div>

              <div className="mobile-menu-divider"></div>

              <div className="mobile-menu-profile" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
                <div className="avatar"></div>
                <div className="profile-info">
                  <div className="profile-name">My Profile</div>
                  <div className="profile-email">View profile settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay" onClick={cancelLogout}>
          <div className="logout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="logout-modal-header">
              <LogOut size={24} color="#ef4444" />
              <h2>Confirm Logout</h2>
            </div>
            <p className="logout-modal-text">Are you sure you want to logout?</p>
            <div className="logout-modal-actions">
              <button className="logout-cancel-btn" onClick={cancelLogout}>Cancel</button>
              <button className="logout-confirm-btn" onClick={confirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
