// src/api.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const sendNotification = (message: string) =>
  API.post("/notify", { message });

export const getNotifications = () =>
  API.get("/notify");
