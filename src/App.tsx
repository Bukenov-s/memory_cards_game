import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Table from './containers/Table';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
};

export default App;
