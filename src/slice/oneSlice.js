

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// createSlice為基本引入
// createAsyncThunk為使用異布函式所使用(如async)
import axios from "axios";
export const oneSlice = createSlice({ // todoSlice可任意取名
    name:"one", //此名稱為連接main.jsx的名稱
    initialState:{  //初始資料狀態
       data:
       [
       	    {
                
            }
       ]
    },
    reducers:{  //更新資料函示或狀態
        updataOne(state,{payload}){ // updataTodo為自由命名
            state.data = payload;
        }
    }
})
export const {updataOne} = oneSlice.actions; // updataTodo需要在此引出這樣外部檔案才可以利用
// todoSlice和上方todoSlice名稱需相同
//如果使用異步函示則需如下
export const asyncFetchOne = createAsyncThunk(
    "one/asyncFetchOne", //todo為上方名稱需要相同asyncFetchTodo為函式名稱也需要相同
        async(payload,{dispatch})=>{ //{dispatch}這樣宣告以後才可以在下方直接使用dispatch
            // console.log({dispatch});
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log("取得資料成功",res.data);
            dispatch(updataTodo(res.data));
        }
)
export default oneSlice.reducer; // 和todoSlice名稱需要相同
