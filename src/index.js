import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ToDoList from './components/toDoList';
import CoinTracker from './components/CoinTracker';
import MovieContainer from './components/MovieContainer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<App />
    //<ToDoList></ToDoList>
    //<CoinTracker></CoinTracker>
    <MovieContainer></MovieContainer>
  //</React.StrictMode>
);

