import { configureStore } from "@reduxjs/toolkit";
import  oneReducer  from "./slice/oneSlice"; //引入後todoSlice.reducer需改成todoReducer
export const store = configureStore({
    reducer: { // 必要加入 reducer
        one: oneReducer, // todo 是todoSlice.reducer的名稱而todoReducer名稱需要相同
      }
});
export default configureStore;
