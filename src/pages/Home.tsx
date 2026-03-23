import './Home.css';
import SearchIcon from '../icons/SearchIcon';
import CharacterList from '../components/CharacterList';
import { useEffect, useState, FC, ChangeEvent } from 'react';
import { Character, SetLikedCharacters } from '../types';

interface HomeProps {
  likedCharacters: string[];
  setLikedCharacters: SetLikedCharacters;
  showOnlyLiked: boolean;
}

const Home: FC<HomeProps> = ({
  likedCharacters,
  setLikedCharacters,
  showOnlyLiked,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchCharacter, setSearchCharacter] = useState<string>('');
  const [resultsCounter, setResultsCounter] = useState<number>(0);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchCharacter.toLowerCase()),
  );

  const displayedCharacters = showOnlyLiked
    ? filteredCharacters.filter((character) =>
        likedCharacters.includes(character.id),
      )
    : filteredCharacters;

  useEffect(() => {
    setResultsCounter(displayedCharacters.length);
  }, [displayedCharacters]);

  useEffect(() => {
    fetch('https://68012ab881c7e9fbcc41be05.mockapi.io/api/v1/characters')
      .then((response) => response.json())
      .then((data: Character[]) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchCharacter(e.target.value);
  };

  return (
    <>
      <div className="main-container">
        <div className="search-bar-container">
          <div className="search-bar">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="SEARCH A CHARACTER..."
              onChange={handleSearchChange}
            />
          </div>
          <span className="results-counter">{resultsCounter} Results</span>
        </div>
        <div className="character-list-container">
          <CharacterList
            characters={displayedCharacters}
            likedCharacters={likedCharacters}
            setLikedCharacters={setLikedCharacters}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
