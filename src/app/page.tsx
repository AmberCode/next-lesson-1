import styles from './page.module.css'
import Counter from './components/counter'

export default function Home() {
  return (
    <main className={styles.main}>
      <span>Hi Next.js v3</span>
      <Counter />
    </main>
  )
}
