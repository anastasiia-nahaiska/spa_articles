import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/articles" element={<h1>Articles will be here</h1>}>
          <Route
            path=":articleId"
            element={<h1>Articles content will be here</h1>}
          />
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
