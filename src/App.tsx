import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path=":articleId" element={<ArticlePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
