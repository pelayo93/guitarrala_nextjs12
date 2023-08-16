import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'
function Header () {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href='/'>
          <Image src='/img/logo.svg' alt='Logo' width={300} height={40} />
        </Link>
        <nav className={styles.navegacion}>
          <Link className={router.pathname === '/' ? styles.active : ''} href='/'>Inicio</Link>
          <Link className={router.pathname === '/nosotros' ? styles.active : ''} href='/nosotros'>Sobre Nosotros</Link>
          <Link className={router.pathname === '/tienda' ? styles.active : ''} href='/tienda'>Tienda</Link>
          <Link className={router.pathname === '/posts' ? styles.active : ''} href='/posts'>Blog</Link>
          <Link className={router.pathname === '/posts' ? styles.active : ''} href='/carrito'><Image width={30} height={25} src='/img/carrito.png' alt='Imagen carrito' /></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
