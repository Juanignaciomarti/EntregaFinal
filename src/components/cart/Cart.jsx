import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, cartTotal, removeItem, clear, sumaTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <div className='alert alert-danger' role='alert'>
                            No se encontraron productos en el carrito!
                        </div>
                        <Link to={"/"} className="btn btn-primary">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>

                    {cart.map((item) =>
                        <tr key={item.id}>
                            <td><img src={item.img} alt={item.name} width={100} /></td>
                            <td className='align-middle'><b>{item.name}</b></td>
                            <td className='align-middle'>{item.cantidad}</td>
                            <td className='align-middle'>${item.cantidad * item.price}</td>
                            <td className='align-middle'><Link onClick={() => { removeItem(item.id) }}><img src={"/img/trash3-fill.svg"} alt={"Eliminar Producto"} width={30} />
                            </Link>
                            </td>

                        </tr>
                    )}
                    <tr>
                        <td colSpan={2}>&nbsp;</td>
                        <td><b>Total a pagar</b></td>
                        <td><b>${sumaTotal()}</b></td>
                        <td colSpan={2}>&nbsp;</td>
                    </tr>

                    <tr>
                        <th scope='col' colSpan={5} className="text-center"><Link onClick={clear} className="btn btn-warning m-4">
                            Vaciar Carrito
                        </Link>
                            <td className='btn btn-warning m-4 '><Link to={"/checkout"} className='btn-finalizarCompra'>Finalizar Compra</Link></td>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart