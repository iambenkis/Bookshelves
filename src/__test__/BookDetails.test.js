import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
// import store from '../redux/Rockets/configurationStore';
// import Rocket from '../pages/Rocket/Rocket';
import BookDetail from '../components/BookDetails/BookDetails';
import store from '../redux/configureStore';

describe('Test Rocket component ', () => {
  test('Does Books match the snapshot ?', () => {
    const book = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <BookDetail />
        </Provider>
      </BrowserRouter>,
    );
    expect(book).toMatchSnapshot();
  });
});
