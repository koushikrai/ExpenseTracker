import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      {/* <Route
  path="/HomePage"
  element={
    <ProtectedRoutes>
      <HomePage />
    </ProtectedRoutes>
  }
/> */}
<Route path="/HomePage" element={<HomePage />} />


      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
