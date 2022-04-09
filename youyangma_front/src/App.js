import Search from './components/Search';
import { useState, useEffect } from 'react';
import ShowCases from './components/ShowCases';
import background from './resources/background.png'

function App() {
  const [cases, setCases] = useState([])

  useEffect(() => {
    //preloading backgrund
    const background_img = new Image();
    background_img.src = background;

  }, []);

  return (
    <div className="App" style={{textAlign: 'center'}}>
      {cases.length > 0 ? <ShowCases cases = {cases} background = {background} /> : <Search setCases = {setCases}/>}
    </div>
  );
}

export default App;
