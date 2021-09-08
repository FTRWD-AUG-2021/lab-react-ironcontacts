import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

let actors = contacts.slice(0,5);
console.log(actors)

const ShowTable = ()=>{
  let list = actors.map(actor=>{
    return (
      <tr>
        <td><img src={actor.pictureUrl} height = "50px"/></td>
        <td>{actor.name}</td>
        <td>{actor.popularity}</td>
      </tr>
    )
  })
  return list
}


function App() {

  return (
    <div className="App">
      <table>
        <tr>
          <th>Picture</th><th>Name</th><th>Popularity</th>
        </tr>
        <ShowTable/>
      </table>
    </div>
  );
}

export default App;
