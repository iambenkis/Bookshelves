import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const BOOKS_API = 'https://bookshelves.p.rapidapi.com/books';

// Action Type for fetching books
const FETCH_BOOKS = '/get/books/all';

// Redux Thunk For Handling Book API
export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  let payload = await fetch(BOOKS_API, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '19e9b2a0fbmsh7c8eba53d77664fp1299bdjsnf9911bd557e8',
      'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com'
    }
  }).then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => console.error(err));
    return payload;
});

const books = createSlice ({
    name : "book",
    initialState : { payload : []},
    reducers : {
        getBooks : (state , action ) => {
            state.value =  action.payload
        }
    },
    extraReducers: {
        [fetchBooks.fulfilled]: (state, action) => {
          return action.payload;
      },
}
})

export const { getBooks } = books.actions;
export default books.reducer;