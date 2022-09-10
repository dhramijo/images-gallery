import { Container, Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = ({ title }) => {
  return (
    <Navbar variant="light" style={navbarStyle}>
      <Container>
        <Logo style={{ maxWidth: '13rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
