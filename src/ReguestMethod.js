import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzE4NDBhMmM4YzgwNjEzODE1ZDhjNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODEzODY4MCwiZXhwIjoxNjQ4NTcwNjgwfQ.f28sqamfU9BBCcZNbEIkqayD0OSZK_DXh8fdstusSSI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userReguest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
