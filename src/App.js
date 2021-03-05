import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './components/SideBar';
import ListItems from './components/ListItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">   
      <Container fluid>
        <br/>
        <Row className="justify-content-md-center">
          <Col md="auto">Select Builder Schedule - 2019 Fall Cohort</Col>
        </Row>
        <br/>
        <Row>
          <Col md="auto"><SideBar/></Col>
          <Col md="auto"><ListItems/></Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
