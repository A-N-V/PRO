import dynamic from 'next/dynamic';
import styles from '../../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = dynamic(() => import('remote/REMOTE'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Main />
      <Main />
      <Main />
      <Main />
      <div className={styles.aaaaa}></div>
      <Footer />
    </div>
  )
}
