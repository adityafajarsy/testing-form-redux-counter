import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [], // daftar todo
  },
  reducers: {
    // tambah todo pakai payload (teks yang diketik user)
    addTodo: (state, action) => {
      state.list.push({
        id: Date.now(),     // id unik
        text: action.payload, // ambil dari payload
        done: false,
      });
    },
    // toggle status todo selesai / belum
    toggleTodo: (state, action) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    // hapus todo
    removeTodo: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
