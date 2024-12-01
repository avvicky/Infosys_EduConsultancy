import "./App.css";

// import HeroComponent from "./components/HeroComponent";
// import About from "./components/About";
// import Products from "./components/Products";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import ParentsPage from "./pages/ParentsPage";
import HeroComponent from "./components/HeroComponent";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs"
import About from "./pages/About"

// import

function App() {
  return (
    <Router>
      <div className='bg-custom-image  bg-center bg-no-repeat  min-h-[100vh] w-full'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HeroComponent />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<HeroComponent />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About/>} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute roles={["ADMIN", "STUDENT", "PARENT"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["ADMIN"]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student"
          element={
            <ProtectedRoute roles={["STUDENT"]}>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent"
          element={
            <ProtectedRoute roles={["PARENT"]}>
              <ParentsPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </div>
    </Router>
    //   <>
    //     <Router>
    //    <div className='bg-gradient-to-r from-blue-500/75 to-purple-500/75  min-h-[100vh]'>
    //     <Routes>
    //       {/* Routs for all pages */ }
    //       <Route path="/" element={<HeroComponent />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/blogs" element={<Blogs />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/forgot-password" element={<ForgotPassword />} />
    //       <Route path="/dashboard" element={<Dashboard userRole="admin" />} />
    //     </Routes>
    //    </div>
    //  </Router>
    //   </>
  );
}

export default App;
