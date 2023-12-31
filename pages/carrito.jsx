import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'

import Image from 'next/image'
import Layout from '../components/layaout'
import styles from '../styles/carrito.module.css'

function Carrito ({ carrito, actualizarCantidad, eliminarProducto }) {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])

  const Confirmar = (id) => {
    eliminarProducto(id)
    toast.success('Producto Retirado del Carrito de Compra')
  }

  return (
    <Layout>
      <Toaster position='top-center' richColors />
      <main className='contenedor'>
        <h1 className='heading'>Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.lenght === 0
              ? 'Carrito de Compra Vacio'
              : (
                  carrito.map(producto => (
                    <div className={styles.producto} key={producto.id}>
                      <div>
                        <Image width={250} height={480} src={producto.imagen} alt={producto.nombre} />
                      </div>
                      <div>
                        <p className={styles.nombre}>{producto.nombre}</p>
                        <div className={styles.cantidad}>
                          <p>Cantidad: </p>
                          <select
                            onChange={e => actualizarCantidad({
                              id: producto.id,
                              cantidad: e.target.value
                            })}
                            value={producto.cantidad}
                            className={styles.select}
                            name='cantidad'
                          >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                          </select>
                        </div>
                        <p className={styles.precio}>$<span>{producto.precio}</span></p>
                        <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                      </div>
                      <button
                        className={styles.eliminar}
                        type='button'
                        onClick={() => Confirmar(producto.id)}
                      >X
                      </button>
                    </div>
                  ))
                )}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a Pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default Carrito
