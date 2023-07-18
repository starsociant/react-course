import { configureStore } from "@reduxjs/toolkit";

import users from "./user/reducer";

export default configureStore({
  reducer: {
    users,
  },
});
