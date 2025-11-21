import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./Home";
import Login from './components/Login.jsx';
import Profile from "./components/Profile.jsx";
import Signup from './components/signup.jsx';

import StudentDashboard from "./StudentDashboard";
import TutorDashboard from "./TutorDashboard";
import PrivateRoute from "./PrivateRoute";

// (IMPORT THESE IF THEY EXIST)
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <NavBar />
        <Signup />
      </>
    ),
  },

  // STUDENT DASHBOARD
  {
    path: "/studentdashboard",
    element: (
      <PrivateRoute allowedType="student">
        <StudentDashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Profile type="student" /> },
    ],
  },

  // TUTOR DASHBOARD
  {
    path: "/tutordashboard",
    element: (
      <PrivateRoute allowedType="tutor">
        <TutorDashboard />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Profile type="tutor" /> },
      { path: "requests", element: <Requests /> },
      { path: "upcoming-sessions", element: <UpcomingSessions /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
