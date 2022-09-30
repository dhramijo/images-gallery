import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorPortfolioUrl = image.user?.portfolio_url;
  const authorName = image.user?.name || 'No Author Name';

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
      <Card.Footer className="text-center text-muted">
        {authorPortfolioUrl && (
          <Nav.Link href={authorPortfolioUrl} target="_blank">
            {authorName}
          </Nav.Link>
        )}
        {!authorPortfolioUrl && authorName.toUpperCase()}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
