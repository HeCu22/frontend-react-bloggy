import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/bloggy";

export const listBlogItems = () => axios.get(REST_API_BASE_URL);

export const createBloggy = (bloggy) => axios.post(REST_API_BASE_URL, bloggy);

export const getBloggy = (bloggyId) => axios.get(REST_API_BASE_URL + '/' + bloggyId);

export const updateBloggy = (bloggyId, contact) => axios.put(REST_API_BASE_URL + '/' + bloggyId, bloggy);

export const deleteBloggy = (bloggyId) => axios.delete(REST_API_BASE_URL + '/' + bloggyId);