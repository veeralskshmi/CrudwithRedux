  import {createSlice} from "@reduxjs/toolkit";
  import { userList } from "./Data";
import Update from "./Update";
  
  const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
            state.push(action.payload)
        },
        UpdateUser: (state,action) => {
            const {id, name, email} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                uu.name = name;
                uu.email = email;
            }

        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const uu = state.find(user => user.id == id);
            if(uu){
                return state.filter(f => f.id !==id);
            }
        }

    }
  })

  export const {addUser,UpdateUser,deleteUser} = userSlice.actions;
  export default userSlice.reducer;