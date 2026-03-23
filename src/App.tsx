import './App.css';
import Home from './pages/Home';
import CharacterDetail from './components/CharacterDetail';
import Navbar from './components/Navbar';
import { useState, FC } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MotionDiv = motion.div;

const App: FC = () => {
  const [likedCharacters, setLikedCharacters] = useState<string[]>([]);
  const [showOnlyLiked, setShowOnlyLiked] = useState<boolean>(false);

  const handleFavClick = (): void => setShowOnlyLiked((prev) => !prev);
  const handleAllCharactersClick = (): void => setShowOnlyLiked(false);

  return (
    <BrowserRouter>
      <div className="main">
        <Navbar
          likesCount={likedCharacters.length}
          onFavClick={handleFavClick}
          favActive={showOnlyLiked}
          onAllCharactersClick={handleAllCharactersClick}
        />
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  likedCharacters={likedCharacters}
                  setLikedCharacters={setLikedCharacters}
                  showOnlyLiked={showOnlyLiked}
                />
              }
            />
            <Route
              path="/character/:id"
              element={
                <CharacterDetail
                  likedCharacters={likedCharacters}
                  setLikedCharacters={setLikedCharacters}
                />
              }
            />
          </Routes>
        </MotionDiv>
      </div>
    </BrowserRouter>
  );
};

export default App;
