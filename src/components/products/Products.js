import React, { useState, useEffect } from "react"
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { Container } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
import { Camera } from 'react-bootstrap-icons';
import Cards from "../cards/Cards";

const Products = () => {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("")
    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false)

    const SearchProducts = async (e) => {
      setLoading(true)
      const response = await axios.post(`https://api2.mymarket.ge/api/ka/products?Keyword=${search}`)
      setCards(response.data.data.Prs)
      setLoading(false)
    }

    useEffect(() => {
      if(search?.length > 5){
        setDisabled(false)
      }else{
        setDisabled(true)
      }
    },[search])

  return (
    <>
        <Container className="d-flex justify-content-center mt-2">
          <input type="text" placeholder="mymarket"
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: "1px solid #d9d9d9",
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              height: "40px",
              width: "40%"
            }} />

          <button style={{
            height: "40px",
            width: "50px",
            backgroundColor: "white",
            border: "1px solid #d9d9d9"
          }}><Camera /></button>

          <button style={{
            height: "40px",
            width: "60px",
            backgroundColor: "white",
            border: "1px solid #d9d9d9",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px"
          }}
            disabled={disabled}
            type="submit"
            onClick={() => SearchProducts()}><Search /></button>
        </Container>
        <span className="d-flex justify-content-center mt-1">{loading ? <Spinner animation="border" variant="warning" /> : loading}</span>
        <Cards cards={cards} />
    </>
  )
}

export default Products