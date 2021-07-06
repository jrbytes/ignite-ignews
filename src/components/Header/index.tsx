import SignInButton from '../SignInButton'
import s from './styles.module.sass'

export default function Header() {
  return (
    <header className={s.headerContainer}>
      <div className={s.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={s.active}>home</a>
          <a >posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
