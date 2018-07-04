export const WEBSITE_URL = window.location.origin;

export const API_URL = process.env.API_URL || "http://localhost:8080";
export const AUTH_URL = `${API_URL}/auth/discord/?callback=${WEBSITE_URL}`;
