// import axios from "axios"

export const fetcher = async (endpoint, options ={}, auth=true) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    projectID: "f1set4c",
  }
  if (auth) {
    options.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  }
  const url = `https://academics.newtonschool.co/api/v1/${endpoint}`
  const response = await fetch(url, options);
  return response.json();
}

