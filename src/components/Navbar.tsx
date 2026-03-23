import { FC } from 'react';
import './Navbar.css';
import MarvelIcon from '../icons/MarvelIcon';
import HeartIcon from '../icons/HeartIcon';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  likesCount: number;
  onFavClick: () => void;
  favActive: boolean;
  onAllCharactersClick: () => void;
}

const Navbar: FC<NavbarProps> = ({
  likesCount,
  onFavClick,
  favActive,
  onAllCharactersClick,
}) => {
  const navigate = useNavigate();

  const handleFavClick = (): void => {
    onFavClick();
    navigate('/');
  };

  return (
    <div className="navbar-background">
      <div className="navbar-container">
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <div
            className="icono"
            style={{ cursor: 'pointer' }}
            onClick={onAllCharactersClick}
          >
            <MarvelIcon />
          </div>
        </Link>
        <div
          className={`fav${favActive ? ' fav-active' : ''}`}
          style={{ cursor: 'pointer' }}
          onClick={handleFavClick}
        >
          <HeartIcon
            width="24"
            height="21.68"
            fill={favActive ? '#fff' : '#EC1D24'}
          />
          <span className="fav-counter">{likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
