import React, { useState } from 'react';
import { Search, X, ChevronDown, ChevronUp, Heart, ThumbsDown, Bell, HelpCircle, Settings, Bookmark, Menu, SlidersHorizontal } from 'lucide-react';
import '../styles/Job_board.css';
function Job_board() {

  return (
    <div className="app">


      {/* Mobile Search Bar */}
      <div className="mobile-search-bar">
        <div className="mobile-search-wrapper">
          
        </div>
        <button className="advanced-search-btn">Advanced search</button>
        
        <div className="mobile-actions">
          <button className="action-btn">
            <Bookmark size={20} />
            Save search
          </button>
          <button className="action-btn">
            <Heart size={20} />
            Saved jobs
          </button>
        </div>
      </div>

      {/* Mobile Sort Bar */}
      <div className="mobile-sort-bar">
        <select className="mobile-sort-select">
          <option>Sort by: Newest</option>
          <option>Sort by: Oldest</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar Filters - Desktop Only */}
        <aside className="sidebar">
          <div className="sidebar-search">
            <div className="sidebar-search-wrapper">
           
            </div>
            <button className="advanced-search-btn">Advanced search</button>
          </div>

          <div className="clear-filters-section">
            <button className="clear-filters-btn">Clear filters</button>
          </div>

          <div className="filter-group">
           
          </div>

          
        </aside>

        {/* Job Listings */}
        <main className="job-listings">
          {/* Top Bar - Desktop Only */}
          <div className="top-bar">

            <div className="top-bar-right">
             
              <select className="sort-select">
                <option>Sort by: Newest</option>
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="job-cards">
            
              <div  className="job-card">
                <div className="job-card-header">
                  <div className="job-card-main">
                    <div className="job-posted"></div>
                    <h3 className="job-title"></h3>
                  </div>
                  <div className="job-actions">
                    <button className="job-action-btn">
                      <ThumbsDown size={20} />
                    </button>
                    <button 
                      className="job-action-btn"
                    >
                      <Heart 
                        size={20}
                        className={ 'saved'}
                      />
                    </button>
                  </div>
                </div>
                
                <div className="job-meta">
                
                  <span className="job-meta-item"> spent</span>
                  <span className="job-meta-item">📍 </span>
                </div>

                <div className="job-details">
                </div>

                  <p className="job-description">{job.description}</p>

                  <div className="job-skills">
                      <span 
                        className={'skill-tag primary' }
                      >
                      </span>
                  </div>
                  <div className="job-proposals">
                    Proposals: 
                  </div>
              </div>
          </div>
        </main>
      </div>

      {/* Mobile Filter Button */}
      <button 
        className="mobile-filter-btn"
      >
        <SlidersHorizontal size={24} />
      </button>

      {/* Mobile Filter Modal */}
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Filter By</h2>
              <button className="modal-close">
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <FilterContent />
              
              <div className="modal-actions">
                <button 
                  className="modal-btn secondary"
                >
                  Clear filters
                </button>
                <button 
                  className="modal-btn primary"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Mobile Menu Modal */}
        <div className="modal-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="logo">upwork</div>
              <button  className="modal-close">
                <X size={24} />
              </button>
            </div>
            
            <div className="mobile-menu-body">
              <nav className="mobile-nav">
                <button className="mobile-nav-item">
                  <span>Find work</span>
                  <ChevronDown size={20} />
                </button>
                <button className="mobile-nav-item">
                  <span>Deliver work</span>
                  <ChevronDown size={20} />
                </button>
                <button className="mobile-nav-item">
                  <span>Manage finances</span>
                  <ChevronDown size={20} />
                </button>
              </nav>

              <div className="mobile-menu-divider"></div>

              <div className="mobile-menu-actions">
                <button className="mobile-menu-action">
                  <HelpCircle size={20} />
                  <span>Help</span>
                </button>
                <button className="mobile-menu-action">
                  <Bell size={20} />
                  <span>Notifications</span>
                </button>
                <button className="mobile-menu-action">
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
              </div>

              <div className="mobile-menu-divider"></div>

              <div className="mobile-menu-profile">
                <div className="avatar"></div>
                <div className="profile-info">
                  <div className="profile-name">My Profile</div>
                  <div className="profile-email">View profile settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
  );
}

export default Job_board