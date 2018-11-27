export const WEBSITE_URL = window.location.origin;

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "270010330782892032";
export const AUTH_URL = `${API_URL}/auth/discord/?callback=${WEBSITE_URL}`;
