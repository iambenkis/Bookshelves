import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import axios from 'axios';



const App = () => {
      return (
        <>
            <Home />
        </>
      );
};

export default App;