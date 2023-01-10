import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Articles will be here</h1>}>
          <Route
            path=":articleId"
            element={<h1>Articles content will be here</h1>}
          />
        </Route>

        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
