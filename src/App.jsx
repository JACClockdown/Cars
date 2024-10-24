import { useState } from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import './App.css'
import { db } from "./data/db"

import { Container, Row, Col, Card } from 'bootstrap-4-react';

function App() {
    const Limit_MAX = 5
    const Limit_MIN = 1

    const styles = {
        textAlign: 'center',
        color: 'black',
    }
  
    const [ data ] = useState(db)
    const [ cart, setCart] = useState([])

    function addToCart(item){
        const itemExist = cart.findIndex( (car) => car.id === item.id )
        if(itemExist >= 0){
          const updateCart = [...cart]
          updateCart[itemExist].cantidad++
          setCart(updateCart)
        }else{
          item.cantidad = 1
          setCart([...cart, item])
        }
        
    }

    function deleteCart(id){
      setCart(prevCart => prevCart.filter(carrito => carrito.id !== id) )
    }

    function incrementCantidad(id){
      const updateCantidad = cart.map( item => {
        if(item.id === id && item.cantidad < Limit_MAX){
          return {
            ...item,
            cantidad: item.cantidad + 1
          }
        }
        return item
      })
      setCart(updateCantidad)
    }
  
    function decrementCantidad(id){
      const rerduceCantidad = cart.map( item => {
        if(item.id === id && item.cantidad > Limit_MIN){
          return {
            ...item,
            cantidad: item.cantidad - 1
          }
        }
        return item
      })
      setCart(rerduceCantidad)
    }
  
    function clearCarrito(){
      setCart([])
    }

    console.log(cart)

  return (
    <>
      <Header 
        contenido={cart}
        deleteCart={deleteCart}
        incrementCantidad={incrementCantidad}
        decrementCantidad={decrementCantidad}
        clearCarrito={clearCarrito}
      />
        <Container>
                  <Row>
                      <Col>
                          <div style={styles}>
                              <h1>
                                  Autos Disponibles para ti
                              </h1>
                              <span>Encuentra el auto perfecto al mejor prrecio del mercado</span>
                          </div>
                      </Col>
                  </Row>
                  <Row>
                      <Col mt="4">
                        <Card.Deck mb="3">
                          {data.map((car)=>(
                            <Content 
                              key={car.id}
                              item={car}
                              addToCart={addToCart}
                            />                          
                          ))}
                        </Card.Deck>
                      </Col>
                  </Row>
        </Container>
      
    </>
  )
}

export default App
