import React from "react";
import axios from 'axios';



const Api = () => {
    const options = {
        method: 'GET',
        url: 'https://bookshelves.p.rapidapi.com/books',
        headers: {
          'X-RapidAPI-Key': '19e9b2a0fbmsh7c8eba53d77664fp1299bdjsnf9911bd557e8',
          'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

};

export default Api;