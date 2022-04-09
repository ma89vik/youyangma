import Search from './components/Search';
import { useState } from 'react';
import ShowCases from './components/ShowCases';

function App() {
  const [cases, setCases] = useState([])

  return (
    <div className="App" style={{textAlign: 'center'}}>
      {cases.length > 0 ? <ShowCases cases = {cases} /> : <Search setCases = {setCases}/>}
    </div>
  );
}

export default App;
