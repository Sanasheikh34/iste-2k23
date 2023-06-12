import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ImageGalleryPage from './pages/ImageGalleryPage';
import GalleryPageWrapper from './components/GalleryPageWrapper';
import DarkMode from './components/DarkMode/DarkMode';

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/gallery"
          element={
            <GalleryPageWrapper>
              <ImageGalleryPage />
            </GalleryPageWrapper>
          }
        />
      </Routes>
    </Router>
    </>
  );
};

export default App;
