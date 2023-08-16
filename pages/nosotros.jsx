import Image from 'next/image'
import Layout from '../components/layaout'
import styles from '../styles/nosotros.module.css'

function Nosotros () {
  return (
    <Layout
      title='Nosotros'
      description='Sobre Nosotros GuitarraLa Tienda de Musica'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen Sobre Nosotross' />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad, maiores sed dolorum quibusdam suscipit! Unde libero nulla cumque distinctio sit earum velit ipsa consequuntur nesciunt. Repellendus, doloribus! Quidem deleniti numquam nostrum ipsum ut, itaque totam omnis cupiditate veniam dignissimos asperiores quod neque esse expedita. Similique voluptates accusamus fugit neque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus harum deserunt quibusdam tempore assumenda saepe nemo consectetur, ex voluptatem odit unde excepturi culpa voluptas perferendis eveniet corporis aliquam veritatis! Quidem cum ex beatae repellendus vel, sint exercitationem deserunt eos itaque cumque maxime nam obcaecati impedit iusto at odio velit aut?</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default Nosotros
