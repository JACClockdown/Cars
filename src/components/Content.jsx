import { Card, Badge, Button } from 'bootstrap-4-react';



// eslint-disable-next-line react/prop-types
export default function Content({item, addToCart}){
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { id, name, image, description, price } = item

    return (
        <>        
            <Card key={id}>
                <Card.Body>
                    <Card.Title>
                        <img className="img-fluid" src={`/img/${image}.png`} alt="imagen guitarra" />
                    </Card.Title>
                    <Card.Text>
                        <h2>
                            {name} 123
                        </h2>
                        <table className="table table-hover" border={0}>
                            <tr>
                                <td>
                                    <span>Auto Economico</span>
                                </td>
                                <td>
                                    <span>ECMR</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>A/C</span>
                                </td>
                                <td>
                                    <span>X2</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Manual</span>
                                </td>
                                <td>
                                    <span>X2</span>
                                </td>
                            </tr>
                        </table>

                        <center>
                            <Badge pill success>
                                <h5>
                                    ${price}.00 USD
                                </h5>
                            </Badge>
                        </center>
                        <br />
                        <center>
                            <Button 
                                primary 
                                onClick={() => addToCart(item)}
                            >
                                Reservar Auto
                            </Button>
                        </center>
                    </Card.Text>
                </Card.Body>
            </Card>           
        </>
    )
}