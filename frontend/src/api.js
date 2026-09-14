import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const createEnquiry = (data) => axios.post(`${API}/enquiries`, data);

export const COMPANY_PROFILE_PDF = `${API}/company-profile.pdf`;
