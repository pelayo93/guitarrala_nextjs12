import Layout from '../components/layaout'
import Link from 'next/link'

function Pagina404 () {
  return (
    <Layout
      title='Pagina no encontrada'
    >
      <p className='error'>Pagina no Encontrada</p>
      <Link href='/' className='error-enlace'>Ir al Inicio</Link>
    </Layout>
  )
}

export default Pagina404
