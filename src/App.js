import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"

let actors = contacts.slice(0,5)

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>picture</th><th>name</th><th>popularity</th>
        </tr>
      </table>
    </div>
  );
}

export default App;
