import React, {useState, useEffect} from 'react';
import './index.css'

function App() {

  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch("https://random-word-api.herokuapp.com/word?length=4")
    .then(res => res.json())
    .then(data => {
      setQuotes(data[0])
    })
    
  }

  

  useEffect(() => {
    getQuote();
  },[])
  return (
    <div className="  flex-col flex justify-center dark:bg-slate-700">
      <div className="  flex-col flex justify-center ">
        <h1 className='flex justify-center py-64 font-sans text-9xl dark:text-slate-50'>{quotes}</h1>
        <div className=' py-32 flex justify-center space-x-8 px- '>
          <button onClick={getQuote} className=' bg-violet-400 drop-shadow-lg hover:drop-shadow-2xl rounded-full px-8'>Get New Word</button>
        </div>
      </div>
    </div>
  );
}

export default App;
