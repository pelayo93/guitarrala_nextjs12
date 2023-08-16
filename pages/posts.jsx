import Layout from '../components/layaout'
import Posts from '../components/posts'
import styles from '../styles/grid.module.css'

function Blog ({ posts }) {
  console.log(posts)
  return (
    <Layout
      title='Blog'
      description='Blog sobre GuitarraLa Tienda de Musica'
    >
      <main className='contenedor'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post => (
            <Posts
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}
export default Blog

export async function getStaticProps () {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=*`)
  const { data: posts } = await respuesta.json()
  return {
    props: {
      posts
    }
  }
}
