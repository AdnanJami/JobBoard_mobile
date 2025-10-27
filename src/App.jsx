
import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Job_board from './pages/Job_board';
import Basic_Intro from './pages/Basic_Intro';
import ProtectedRoot from "./Components/ProtectedRoot";
import Post_Job from './pages/Post_Job';
import Job_form from './Components/job_form';
import JobBoard from './pages/job_Board_Jami';
import My_Job from './pages/My_job';
function App() {


  return (
  <>
  <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />}>
      <Route path="/" element={
        <ProtectedRoot>
<Basic_Intro/>
        </ProtectedRoot>
        
    
    }/>
      <Route path="/job-board" element={
        <ProtectedRoot>
           <JobBoard/>
        </ProtectedRoot>
       
      }/>
      <Route path="/post-job" 
      element={
        <ProtectedRoot>
          <Post_Job/>
      
        </ProtectedRoot>
      
        
      }
      />
      <Route path="/job-form" 
      element={
      <ProtectedRoot>
        <Job_form/>
      </ProtectedRoot>
      }
      />
      <Route path="/my-job" 
      element={
      <ProtectedRoot>
        <My_Job/>
      </ProtectedRoot>
      }
      />
      </Route>
      {/* Protected routes */}
    
      

      {/* Logout and fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
}

export default App
