
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { BookHub } from './pages/BookHub';
import { DiagnosticHub } from './pages/DiagnosticHub';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="abc" element={<BookHub />} />
          <Route path="diagnostico" element={<DiagnosticHub />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
