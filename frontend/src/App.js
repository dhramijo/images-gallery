import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  console.log(images);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
    fetch(
      `${UNSPLASH_API_URL}/photos/random/?query=${word}&client_id=${UNSPLASH_API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });

    setWord('');
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
