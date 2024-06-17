
import Name from './Components/Name/Name';
import './App.css';
import Board from './Components/Board/Board';
import { useEffect,useState } from 'react';

function App() {

  const [currentView, setView] = useState('Name')

  const setViewFunction = (value) => {
    setView(value)
  }

  useEffect(() => {
    const storedName = localStorage.getItem("username")

    if (storedName) {
      setView('Board')
    }
    else {
      setView('Name')
    }
  })

  return (
    <div className="App">
      {currentView === 'Name' ? (
        <Name handlePlayClick = {setViewFunction}/>
      ):(
        <Board/>
      )}
    </div>
  );
}

export default App;
