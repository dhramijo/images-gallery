import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage, saveImage }) => {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img
        style={{ height: '18rem' }}
        variant="top"
        src={image.urls.small}
      />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text style={{ width: '100%', height: '8rem' }}>
          {image.description || image.alt_description}
        </Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>{' '}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
