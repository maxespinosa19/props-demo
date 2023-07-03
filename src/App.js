import './App.css';
import Greeting from './components/Greeting';

const students = ['Andrew', 'Ariana', 'Cihan', 
'Danny', 'Jennifer','John' ,'Kevin D' , 'Kevin' , 'Lorenzo', 'Max' ,'Pat', 'Sam', 'Yaslin' ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Props Demo</h1>
        {students.map(student => <Greeting key={student} name={student} />)}
      </header>
    </div>
  );
}

export default App;
