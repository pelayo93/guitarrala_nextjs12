import Layout from '../components/layaout'
import Guitarras from '../components/guitarras'
import sytles from '../styles/grid.module.css'

// al Usar getStaticProps si hacemos un build y creamos otra guitarra no se mostratara hasta que se haga otro build
// export async function getStaticProps () {
//   const respuesta = await fetch(`${process.env.API_URL}/guiatarras?populate=image`)
//   const { data: guitarras } = await respuesta.json()
//   return {
//     props: {
//       guitarras
//     }
//   }
// }
// en este caso si se actuliza la pagina al actualizar la api
export async function getServerSideProps () {
  const respuesta = await fetch(`${process.env.API_URL}/guiatarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()
  return {
    props: {
      guitarras
    }
  }
}
function Tienda ({ guitarras }) {
  return (
    <Layout
      title='Tienda'
      description='Tienda sobre GuitarraLa Tienda de Musica'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        <div className={sytles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarras
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}
export default Tienda
