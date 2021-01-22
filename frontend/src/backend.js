export const API =
  process.env.NODE_ENV === "production"
    ? "https://e-comstore.herokuapp.com/api"
    : process.env.REACT_APP_BACKEND;

// export const API = process.env.REACT_APP_BACKEND;
