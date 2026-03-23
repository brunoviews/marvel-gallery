import "./CharacterList.css";
import CharacterCard from "./CharacterCard";
import { AnimatePresence, motion } from "framer-motion";

const MotionDiv = motion.div;

function CharacterList({ characters, likedCharacters, setLikedCharacters }) {
  return (
    <div className="character-list">
      <AnimatePresence>
        {characters.map((character) => (
          <MotionDiv
            key={character.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ display: "flex" }}
          >
            <CharacterCard
              character={character}
              likedCharacters={likedCharacters}
              setLikedCharacters={setLikedCharacters}
            />
          </MotionDiv>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default CharacterList;
