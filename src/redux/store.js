// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './counter'
// export default configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// })

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/Users"

export default configureStore({
    reducer: {
        users: usersReducer,
    }
})