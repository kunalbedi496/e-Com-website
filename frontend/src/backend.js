export const API =
  process.env.NODE_ENV === "production"
    ? "https://backeend.herokuapp.com/api"
    : process.env.REACT_APP_BACKEND;

// export const API = process.env.REACT_APP_BACKEND;
