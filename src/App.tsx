import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onClickButton={handleClickButton} selected={selectedGenreId} />
      <Content selected={selectedGenreId} />
    </div>
  )
}