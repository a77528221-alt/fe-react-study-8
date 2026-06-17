import FoodCard from "../components/FoodCard";
import { Button, Spinner, Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';

function Home({ foods}){

    return(

        <div>

            

        <div className='main-bg'></div>

        <Container>
                <Row>
                    {

                        foods.map((food, index)=>{
                            return (
                                <Col md={4} sm={2} key={index}>
                                    <FoodCard food={food} foods={foods} index={index}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </div>

    )            
}

export default Home;