import { configureStore } from "@reduxjs/toolkit";
import { editorReducer } from "./Editor.store";
import { postReducer } from "./Post.slice";

const store = configureStore({
  reducer: {
    post: postReducer,
    editor: editorReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
