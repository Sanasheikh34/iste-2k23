import React from 'react'
import { Routes, Route,useLocation } from 'react-router-dom';
import HomePage from '../pages/home';
import EventsPage from "../pages/eventsPage"
import EventPage from "../pages/eventPage"
import MembersPage from "../pages/membersPage.jsx"
import ImageGalleryPage from '../pages/ImageGalleryPage';
import GalleryPageWrapper from './GalleryPageWrapper';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence >
        <Routes location={location} key={location.pathname}>  
            <Route path="/" element={<HomePage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/events" element={<EventsPage />} />
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
        </Routes>
    </AnimatePresence>
)
}

export default AnimatedRoutes