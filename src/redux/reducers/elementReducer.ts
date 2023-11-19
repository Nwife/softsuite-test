import { createSlice } from "@reduxjs/toolkit";
import elementServices from "../../api/services/element";

const initialState = {
    total: null,
    content: [],
    isLoading: false,
    error: ""
}

const elementSlice = createSlice({
    name: "element",
    initialState,
    reducers: {
        setElements: (state, action) => {
            state.total = action.payload.total
            state.content = action.payload.content
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    },
});


export const { setElements, setIsLoading, setError } = elementSlice.actions;

export const selectTotal = (state) => state.element.total;
export const selectIsLoading = (state) => state.element.isLoading;
export const selectError = (state) => state.element.error;
export const selectContent = (state) => state.element.content;

export default elementSlice.reducer;

export function GetElements(){
  return async (dispatch) => {
    try{
      dispatch(setIsLoading(true));

      const res = await elementServices.getElements();

      if(res.data.status === "OK"){
          dispatch(setIsLoading(false))
          dispatch(setElements(res.data.data))
      }else{
          dispatch(setError("An error occured"))
      }
    }catch(err){
        console.log(err);
        dispatch(setIsLoading(false))
    }
  }
}