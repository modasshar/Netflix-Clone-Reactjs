import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  console.log("User:", user); // Debugging log

  if (!user) {
    return <Navigate to='/' />; // Redirect to home if user is not logged in
  }

  return children; // Allow access if user is logged in
};

export default ProtectedRoute;