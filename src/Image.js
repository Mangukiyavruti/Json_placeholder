import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Image() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])
  return (
    <div>
      <Container>

        <Row>
        
    
      

      {
        data.map((ele, ind) => {
          return (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ele.url} />
                <Card.Body>
                  <Card.Title>{ele.albumId}</Card.Title>
                  <Card.Text>{ele.id}</Card.Text>
                  <Card.Text>{ele.thumbnailUrl}</Card.Text>

                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
              </Col>
          )
        }
        )

      }
      
      </Row>
    
      </Container>
    </div>
  );
}

export default Image;
