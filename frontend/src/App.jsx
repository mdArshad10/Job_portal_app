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
import { RotatingLines } from "react-loader-spinner";
import Error from "./components/shared/Error";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/shared/Loader";
import { useGetJobQuery } from "./redux/Services/jobServices";

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
      <Route
        path="job/description/:jobId"
        element={<JobDescription />}
        errorElement={<Error />}
      />
      <Route path="browse" errorElement={<Error />} element={<Browse />} />
      <Route path="profile" errorElement={<Error />} element={<Profile />} />


      <Route path="admin/companies/">
        <Route index element={<Companies />} errorElement={<Error />} />
        <Route
          path="create"
          element={<CreateCompany />}
          errorElement={<Error />}
        />
        <Route path=":id" element={<CompanySetup />} errorElement={<Error />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
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
