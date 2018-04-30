import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB-Jswq7TIXGpf5yBDfjAG-j9ZwDfBmm6A';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App /> , document.querySelector('.container'));
