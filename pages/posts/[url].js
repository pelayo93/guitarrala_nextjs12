import Layout from '../../components/layaout'
import Image from 'next/image'
import styles from '../../styles/blog.module.css'
import { formatearFecha } from '../../utils/helpers'

function Post ({ blog }) {
  const { titulo, contenido, imagen, publishedAt } = blog[0].attributes
  return (
    <Layout
      title={titulo}
      description={`Inforamcion sobre ${titulo}`}
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={imagen.data.attributes.url} alt={`Imagen de blog ${titulo}`} width={1000} height={1000} />
        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}

export default Post

export async function getServerSideProps ({ query: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const { data: blog } = await respuesta.json()
  return {
    props: {
      blog
    }
  }
}
