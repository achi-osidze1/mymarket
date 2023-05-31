import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { Heart } from 'react-bootstrap-icons';
import '../cards/Cards.css'

const Cards = (props) => {
  return (
    <Container className='mt-3' style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        {props.cards.map((card, index) => {
          return <Card key={index} style={{ width: '16rem', margin:"8px", border:"none"}}>
            <Card.Img variant="top" style={{ borderRadius:"10px" }} src={card?.photos[0]?.thumbs} />
            <Card.Body>
              <p>{card?.user}</p>
              <Card.Text>{card?.lang_data.title}</Card.Text>
              <p style={{ border: "2px solid #f1f3f6" }}></p>
              <Card.Text className='d-flex justify-content-between align-items-center'>{card?.price} ლ <Heart style={{color:"orange"}}/></Card.Text>
            </Card.Body>
          </Card>;
        })}
    </Container>
  )
}

export default Cards