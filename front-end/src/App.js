/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { StyledRoot, StyledContent, StyledToolbar } from './components/styles';
import { Home, Actors, Movies, MovieInformation, Profile, Navbar } from './components';

const App = () => {
  console.log('App.jsx');
  return (
    <StyledRoot>
      <CssBaseline />
      <Navbar />
      <StyledContent>
        <StyledToolbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/actors" element={<Actors />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/movies/:movieId" element={<MovieInformation />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </StyledContent>
    </StyledRoot>
  );
};

export default App;

