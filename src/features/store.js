import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import car from "./car/carSlice";
import rental from "./rental/rentalSlice";

const store = configureStore({
  reducer: { auth, car, rental },
});

export default store;
