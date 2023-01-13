import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFillDice6Fill } from 'react-icons/bs';
import './App.css';

function App() {
  const [data, setData] = useState({
    id: 1,
    advice: 'Never Give Up',
  });

  const url = 'https://api.adviceslip.com/advice';

  const handleFetch = () => {
    axios.get(url).then((reponse) => {
      setData(reponse.data.slip);
    });
  };

  return (
    <div className="App">
      <div className="advice">
        <h3 className="advice__title">Advice #{data.id}</h3>
        <p className="advice__body">{data.advice}</p>
        <button onClick={handleFetch}>
          <BsFillDice6Fill size={40} />
        </button>
      </div>
    </div>
  );
}

export default App;
