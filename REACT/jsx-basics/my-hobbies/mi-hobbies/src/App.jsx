import './App.css'
import { Languages } from './Components/Languages/Languages';
import { HOBBIES } from './Data/Hobbies.Data'
import { Read } from './Components/Read/Read';
import { Sports } from './Components/Sports/Sports';
function App() {
 const languages = HOBBIES.languages;
 const read = HOBBIES.read;
 const sports = HOBBIES.sports;
  return (
    <>
      <Languages languages={languages}/>
      <Read  read={read}/>
      {sports.map((el,index)=>{
        <Sports name ={el.name} indoor={el.indoor} favoriteTeam={el.favoriteTeam}/>
      })}

    </>
  )
}

export default App
