export const PRODUCTION_URL =
  process.env.REACT_APP_VERCEL_PROJECT_PRODUCTION_URL ||
  "http://localhost:5000/api";
export const NODE_ENV = process.env.REACT_APP_VERCEL_ENV || "development";
export const DEVELOPMENT_URL =
  process.env.DEVELOPMENT_URL || "http://localhost:5000/api";
