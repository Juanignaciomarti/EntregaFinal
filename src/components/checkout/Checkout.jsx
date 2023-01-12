import React, { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';

const Checkout = () => {

  const { cart, clear, sumaTotal } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const generarOrden = () => {
    const fecha = new Date();
    const order = {
      buyer: { name: nombre, phone: telefono, email: email },
      items: cart.map(item => ({ id: item.id, title: item.name, price: item.price })),
      total: sumaTotal(),
      order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}: ${fecha.getSeconds()}`
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((snapShot) => {
      setOrderId(snapShot.id);
      clear()
    });
  }

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col md-6'>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="nombre" placeholder='Ingrese su Nombre' onInput={(e) => { setNombre(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Telefono:</label>
              <input type="number" className="form-control" id="telefono" placeholder='Ingrese su Telefono' onInput={(e) => { setTelefono(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" placeholder='Ingrese su Email' onInput={(e) => { setEmail(e.target.value) }} />
            </div>
            <button type="button" className="btn btn-primary" onClick={generarOrden} >Generar Orden</button>
          </form>

        </div>
        <div className='col-md-6'>
          <table className="table">
            <tbody>

              {cart.map((item) =>
                <tr key={item.id}>
                  <td><img src={item.img} alt={item.name} width={100} /></td>
                  <td className='align-middle'>{item.name}</td>
                  <td className='align-middle'>{item.cantidad}</td>
                  <td className='align-middle'>${item.cantidad * item.price}</td>
                </tr>
              )}
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td>Total a pagar</td>
                <td>${sumaTotal()}</td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='row'>
        <div className='col text-center'>
          {orderId !== "" ? <Navigate to={"/buyorder/" + orderId } /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Checkout