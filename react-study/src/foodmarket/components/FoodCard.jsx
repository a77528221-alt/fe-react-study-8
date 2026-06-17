import { Card, Button } from "react-bootstrap";
import food1 from '../img/food1.jpg';



function FoodCard( { food, foods, index}){

    return(
    
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={import.meta.env.BASE_URL + food.imgPath} />
                <Card.Body>
                        <Card.Title>{foods[index].title}</Card.Title>
                        <Card.Text>{food.content}</Card.Text>
                        <Card.Text>{food.price}</Card.Text>
                        <Button variant="primary">상세보기</Button>
                </Card.Body>
            </Card>
            
    )

}

export default FoodCard;