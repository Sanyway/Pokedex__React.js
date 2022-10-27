import { configureStore } from "@reduxjs/toolkit";
import userName from "./slices/userName.slice";
import initialId from "./slices/initialId.slice";

export default configureStore({
reducer: {
userName,
initialId
}

})