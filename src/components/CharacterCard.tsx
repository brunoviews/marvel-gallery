import { FC, useState, MouseEvent } from 'react';
import CardHeart from '../icons/CardHeart';
import UnlikedHeart from '../icons/UnlikedHeart';
import { Character, SetLikedCharacters } from '../types';
import './CharacterCard.css';
import { Link } from 'react-router-dom';

interface CharacterCardProps {
  character: Character;
  likedCharacters: string[];
  setLikedCharacters: SetLikedCharacters;
}

const CharacterCard: FC<CharacterCardProps> = ({
  character,
  likedCharacters,
  setLikedCharacters,
}) => {
  const isLiked = likedCharacters.includes(character.id);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleLikeClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    e.preventDefault();
    if (isLiked) {
      setLikedCharacters(likedCharacters.filter((id) => id !== character.id));
    } else {
      setLikedCharacters([...likedCharacters, character.id]);
    }
  };

  return (
    <>
      <Link
        to={`/character/${character.id}`}
        style={{ textDecoration: 'none', cursor: 'pointer' }}
      >
        <div
          className="marvel-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={`${character.path}`} alt={character.name} />
          <div className="character-info">
            <p className="character-name">{character.name}</p>
            <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
              {isLiked ? (
                <CardHeart
                  width="12"
                  height="10.84"
                  fill={isHovered ? '#fff' : '#EC1D24'}
                />
              ) : (
                <UnlikedHeart width="12" height="10.84" />
              )}
            </div>
          </div>
          <div className="cut-white"></div>
        </div>
      </Link>
    </>
  );
};

export default CharacterCard;
