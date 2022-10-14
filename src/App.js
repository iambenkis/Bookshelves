import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import BookDetail from './components/BookDetails/BookDetails';
import { fetchBooks ,getBooks } from './redux/bookReducer/reducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(getBooks());
}, [dispatch]);
      return (
        <>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/detail/:id" element={<BookDetail />} />
            </Routes>
        </>
      );
};

export default App;