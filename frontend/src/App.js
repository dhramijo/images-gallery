import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Col, Container, Row } from 'react-bootstrap';

const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const UNSPLASH_API_URL = 'https://api.unsplash.com';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(
      `${UNSPLASH_API_URL}/photos/random/?query=${word}&client_id=${UNSPLASH_API_KEY}`
    )
      .then((result) => result.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });

    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => (
            <Col className="pb-3" key={index}>
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
