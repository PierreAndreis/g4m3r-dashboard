export const WEBSITE_URL = window.location.origin;

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
export const AUTH_URL = `${API_URL}/auth/discord/?callback=${WEBSITE_URL}`;
