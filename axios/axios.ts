import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  responseType: 'json',
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
});

type Blog = {
  title: string;
  text: string;
  image?: String;
};

// Blog
export const CreateBlog = async (url: string, newBlog: Blog) => {
  return await API.post(url, newBlog).then((res) => res.data);
};

export const GetBlog = async (url: string) => {
  return await API.get(url).then((res) => res.data);
};

export const BlogList = async (url: string) => {
  return await API.get(url).then((res) => res.data);
};

export const UpdateBlog = async (url: string, updateBlog: any) => {
  return await API.put(url, updateBlog).then((res) => res.data);
};

export const DeleteBlog = async (url: string) => {
  return await API.delete(url).then((res) => res.data);
};

type Question = {
  text: string;
};

// Question
export const CreateQ = async (url: string, newQ: Question) => {
  return await API.post(url, newQ).then((res) => res.data);
};

export const GetQ = async (url: string) => {
  return await API.get(url).then((res) => res.data);
};

export const QList = async (url: string) => {
  return await API.get(url).then((res) => res.data);
};

export const QSearch = async (url: string) => {
  return await API.get(url).then((res) => res.data);
};

export const UpdateQ = async (url: string, updateQ: Question) => {
  return await API.put(url, updateQ).then((res) => res.data);
};

export const DeleteQ = async (url: string) => {
  return await API.delete(url).then((res) => res.data);
};

type Answer = {
  text: string;
  answer_id: number;
};

// Answer
export const CreateA = async (url: string, newA: Answer) => {
  return await API.post(url, newA).then((res) => res.data);
};

export const GetA = async (url: string) => {
  return await API.get(url).then((res) => res.data);
};

export const AList = async (url: string) => {
  return await API.get(url).then((res) => res.data);
};

export const UpdateA = async (url: string) => {
  return await API.put(url).then((res) => res.data);
};

export const DeleteA = async (url: string) => {
  return await API.delete(url).then((res) => res.data);
};
