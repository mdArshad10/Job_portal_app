import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import JobDescription from "./pages/JobDescription";
import Companies from "./components/admin/Companies";
import CreateCompany from "./components/admin/CreateCompany";
import CompanySetup from "./components/admin/CompanySetup";
import RootLayout from "./pages/RootLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/jobs",
//     element: <Jobs />,
//   },
//   {
//     path: "/job/description/:jobId",
//     element: <JobDescription />,
//   },
//   {
//     path: "/browse",
//     element: <Browse />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   // for admin
//   {
//     path: "/admin/companies",
//     element: <Companies />,
//   },
//   {
//     path: "/admin/companies/create",
//     element: <CreateCompany />,
//   },
//   {
//     path: "/admin/companies/:id",
//     element: <CompanySetup />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="job/description/:jobId" element={<JobDescription />} />
      <Route path="browse" element={<Browse />} />
      <Route path="profile" element={<Profile />} />

      {/* <Route path="admin/companies" element={<Companies />} />
      <Route path="admin/companies/create" element={<CreateCompany />} />
      <Route path="admin/companies/:id" element={<CompanySetup />} /> */}
      
      <Route path="admin/companies/">
        <Route index element={<Companies />} />
        <Route path="create" element={<CreateCompany />} />
        <Route path=":id" element={<CompanySetup />} />
      </Route>
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/jobs",
//     element: <Jobs />,
//   },
//   {
//     path: "/job/description/:jobId",
//     element: <JobDescription />,
//   },
//   {
//     path: "/browse",
//     element: <Browse />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   // for admin
//   {
//     path: "/admin/companies",
//     element: <Companies />,
//   },
//   {
//     path: "/admin/companies/create",
//     element: <CreateCompany />,
//   },
//   {
//     path: "/admin/companies/:id",
//     element: <CompanySetup />,
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
