import Layout from '../components/layaout'
import styles from '../styles/grid.module.css'
import Guitarras from '../components/guitarras'
import Posts from '../components/posts'
import Curso from '../components/curso'
export default function Home ({ guitarras, posts, curso }) {
  return (
    <Layout
      title='Inicio'
      description='Blog de Musica Venta de Guitarra y mas'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarras
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
      <Curso
        curso={curso.attributes}
      />
      <section className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Posts
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps () {
  const urlGuitarra = `${process.env.API_URL}/guiatarras?populate=*`
  const urlPost = `${process.env.API_URL}/posts?populate=*`
  const urlCurso = `${process.env.API_URL}/curso?populate=*`
  const [resGuitarras, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlPost),
    fetch(urlCurso)
  ])
  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resPost.json(),
    resCurso.json()
  ])
  return ({
    props: {
      guitarras,
      posts,
      curso
    }
  })
}
