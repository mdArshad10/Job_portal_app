const basicURL = import.meta.env.VITE_BASIC_URL;

// for user routers
const USER_REGISTER = "/register";
const USER_LOGIN = "/login";
const USER_LOGOUT = "/logout";
const USER_PROFILE_UPDATE = "/profile/update";
const USER_DETAILS = "/profile";

// for job's routes
const JOB_CREATE = "/job/create";
const JOB_GET = "/jobs";

// for company routes
const COMPANY_CREATE = "/company/register";
const COMPANY_GET = "/company";

// for application
const APPLICANT_CREATE = "/apply";
const APPLICANT_GET_ALL = "/appliedJobs";
const APPLICANT_GET = "/applicants";

export {
  basicURL,
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
  USER_PROFILE_UPDATE,
  JOB_CREATE,
  JOB_GET,
  COMPANY_CREATE,
  COMPANY_GET,
  APPLICANT_CREATE,
  APPLICANT_GET_ALL,
  APPLICANT_GET,
  USER_DETAILS,
};
