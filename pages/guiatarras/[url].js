import { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/guitarras.module.css'
import Layout from '../../components/layaout'

// PRIMERO ANTES QUE TODO EL NOMBRE DE LA CARPETA ES EL NOMBRE DEL END POINT EN ESTE CASO
// ME EQUIVOQUE EN LA API SIN DARME CUENTA Y EL ERROR ES QUE ERA GUIATARRAS Y NO GUITARRAS
// YO DEL FUTURO TE REIRAS DE ESTO

function Producto ({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0)
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes
  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad < 1) {
      alert('Cantidad no valida')
      return
    }
    // Contruir un Objeto para el carrito
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    // Pasando informacion al context
    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor='cantidad'>Cantidad</label>
            <select onChange={e => setCantidad(Number(e.target.value))} name='cantidad' id='cantidad'>
              <option value='0'>-- Seleccione --</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <input type='submit' value='Agregar al Carrito' />
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default Producto

export async function getStaticPaths () {
  const respuesta = await fetch(`${process.env.API_URL}/guiatarras`)
  const { data } = await respuesta.json()
  const paths = data
    .map(guitarra => ({
      params: {
        url: guitarra.attributes.url
      }
    }))
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps ({ params: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/guiatarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json()
  return {
    props: {
      guitarra
    }
  }
}
// los mismo aqui si cambiamos la api se modifica en pantalla
// export default Producto
// export async function getServerSideProps ({ query: { url } }) {
//   const respuesta = await fetch(`${process.env.API_URL}/guiatarras?filters[url]=${url}&populate=imagen`)
//   const { data: guitarra } = await respuesta.json()
//   return {
//     props: {
//       guitarra
//     }
//   }
// }
