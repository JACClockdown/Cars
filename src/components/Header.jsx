/* eslint-disable react/prop-types */
import { useMemo  } from "react"
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';



export default function Header({contenido, deleteCart, incrementCantidad, decrementCantidad, clearCarrito}){

    const isEmpty = useMemo( () => contenido.length == 0, [contenido])
    
    const cartTotal = useMemo( () => contenido.reduce( (total, item) => total + (item.cantidad * item.price), 0 ), [contenido])

    const myStyles = {
        
        marginleft: '500px',
    };

    return (
        <>
            <Navbar expand="lg" dark bg="primary" mb="3">
                <Navbar.Brand href="#">
                    <img src="./img/AMERICA LOGO.png" alt="" width={200} height={130}/>
                </Navbar.Brand>
                <Navbar.Toggler target="#navbarColor2" />
                <Collapse navbar id="navbarColor2" style={myStyles}>
                    <Navbar.Nav >
                        <Nav.ItemLink href="#" active>Inicio</Nav.ItemLink>
                        <Nav.ItemLink href="#">Vehiculos</Nav.ItemLink>
                        <Nav.ItemLink href="#">Ofertas</Nav.ItemLink>
                        <Nav.ItemLink href="#">Sucursales</Nav.ItemLink>
                        <Nav.ItemLink href="#">Politicas</Nav.ItemLink>
                        <Nav.ItemLink href="#">Contacto</Nav.ItemLink>
                    </Navbar.Nav>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div 
                                className="carrito"
                            >
                                <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" width={50} height={50} />

                                <div id="carrito" className="bg-white p-3">
                                   
                                    { isEmpty ? (
                                            <>
                                                <p className="text-center">El carrito esta vacio</p>
                                            </>
                                    ) :(
                                            <>
                                                <table className="w-100 table">
                                                    <thead>
                                                        <tr>
                                                            <th>Imagen</th>
                                                            <th>Nombre</th>
                                                            <th>Precio</th>
                                                            <th>Cantidad</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {contenido.map( (i) =>(
                                                            <tr key={i.id}>
                                                                <td>
                                                                    <img className="img-fluid" src={`/img/${i.image}.png`} alt="imagen guitarra"  />   
                                                                </td>
                                                                <td>
                                                                    {i.name}
                                                                </td>
                                                                <td className="fw-bold">
                                                                        ${i.price}
                                                                </td>
                                                                <td className="flex align-items-start gap-4">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-dark"
                                                                        onClick={ () => decrementCantidad(i.id) }
                                                                    >
                                                                        -
                                                                    </button>
                                                                        {i.cantidad}
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-dark"
                                                                        onClick={ () => incrementCantidad(i.id) }
                                                                    >
                                                                        +
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-danger"
                                                                        type="button"
                                                                        onClick={ () => deleteCart(i.id) }
                                                                    >
                                                                        X
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            <p className="text-end">Total pagar: <span className="fw-bold">${ cartTotal }</span></p>
                                            <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCarrito}>Vaciar Carrito</button>
                                        </>
                                    )}
                                </div>
                            </div>
                    </nav>
                </Collapse>
            </Navbar>
        </>
    )
}
