import './App.css';
import { Languages } from './Components/Languages/Languages';
import { HOBBIES } from './Data/Hobbies.Data';
import { Read } from './Components/Read/Read';
import { Sports } from './Components/Sports/Sports';
import { Movies } from './Components/Movies/Movies';
import { SongsHeard } from './Components/SongsHeard/SongsHeard';

function App() {
  const languages = HOBBIES.languages;
  const read = HOBBIES.read;
  const sports = HOBBIES.sports;
  const movies = HOBBIES.movies;
  const songsHeard = HOBBIES.songsHeard;

  return (
    <>
      <Languages languages={languages} />
      <Read read={read} />
      {sports.map((el, index) => (
        <Sports key={index} name={el.name} indoor={el.indoor} favoriteTeam={el.favoriteTeam} />
      ))}
      {movies.map((el, index) => (
        <Movies key={index} name={el.name} type={el.type} genre={el.genre} vote={el.vote} />
      ))}
      <SongsHeard songs={songsHeard} />
    </>
  );
}

export default App;
