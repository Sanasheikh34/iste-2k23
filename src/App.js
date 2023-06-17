import React from 'react';
import { HashRouter} from 'react-router-dom';

import Navbar from './components/navbar';
import Headroom from 'react-headroom';
import AnimatedCursor from './components/animatedCursor';
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {

  return (
    <>
    {/* <DarkMode /> */}
    <AnimatedCursor />
    <HashRouter>
    <Headroom>
      <Navbar /> 
    </Headroom>
      {/* <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/blogs" element={<MembersPage />} />
        <Route
          path="/gallery"
          element={
            <GalleryPageWrapper> 
              <ImageGalleryPage />
            </GalleryPageWrapper>
          }
        />
      </Routes> */}
      <AnimatedRoutes />
    </HashRouter>

    </>
  );
};

export default App;
