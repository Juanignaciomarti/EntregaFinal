Este es el proyecto final del curso dictado por CoderHouse de React Js.

Descripción del proyecto:

Esta aplicación consiste en una tienda en línea que permite a los usuarios explorar y comprar productos. Cuenta con un carrito de compras donde los usuarios pueden ver y modificar el contenido del carrito, y calcular el precio total de los productos seleccionados. Desde la página principal se pueden ver todos los productos que contiene la tienda. Dentro de la barra de navegación podemos filtrar los productos por categoría. Cada ítem muestra información detallada incluyendo una imagen, un título, una descripción. 
A continuación se explicaran los componentes principales y su función dentro del proyecto:

#ItemList:

Este componente es responsable de mostrar una lista de productos. Recibe una lista de objetos de producto como propiedad y los renderiza utilizando el componente Item.

ItemListContainer:

Este componente es un contenedor que se encarga de obtener la lista de productos de la base de datos y proporcionarla al componente ItemList. También maneja la paginación y el filtrado de la lista de productos.

#Item:

Este componente muestra información detallada de un producto específico, incluyendo una imagen, un título, una descripción y la cantidad disponible en stock.

#ItemDetail:

Este componente es responsable de mostrar información detallada de un producto específico. Recibe el ID del producto como propiedad y obtiene la información del producto de la base de datos. Luego renderiza la información utilizando el componente Item.

#ItemDetailContainer:

Este componente es un contenedor que se encarga de obtener los detalles de un producto específico de la base de datos y proporcionarlos al componente ItemDetail Acepta un parámetro "id" a través de la función "useParams" de para saber qué producto se debe mostrar.

#Cart:

Este componente es el encargado de mostrar el contenido del carrito de compras y el formulario de pago al usuario. También maneja el envío del formulario y la creación de la orden en la base de datos.

#CartWidget:

Muestra un icono de carrito de compras en la barra de navegación de la aplicación y la cantidad total de productos en el carrito.

#ItemCount:

Componente que se utilizado para mostrar la cantidad de un producto en el carrito de compras. Recibe el ID del producto como propiedad y utiliza el contexto del carrito de compras para obtener la cantidad del producto en el carrito. Luego muestra la cantidad utilizando un elemento de contador. También proporciona botones para aumentar o disminuir la cantidad del producto en el carrito, y actualiza la cantidad en el contexto del carrito de compras al hacer clic en ellos.

#CartContext:

Proporciona acceso a la información del carrito de compras y funciones para manipular el carrito a través de la aplicación. Incluye información sobre los productos agregados al carrito, la cantidad de cada producto en el carrito y el precio total de los productos en el carrito. También incluye funciones para agregar productos al carrito, eliminar productos del carrito y vaciar el carrito completamente. Este contexto se utiliza en varios componentes de la aplicación para tener acceso a la información del carrito de compras y actualizarla de manera correcta.

A su vez, este proyecto implemto Firebase y React Router.
Firebase hace posible el almacenamiento y creacion de ordenes de compra. Posibilitando tener una base de datos en tiempo real, facilitando asi la gestion de datos para un optimo funcionamiento.
React Router, por su parte, permite la navegacion entre paginas dentro de la aplicación.
