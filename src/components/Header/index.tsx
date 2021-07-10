import SignInButton from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

import s from './styles.module.sass'

export default function Header() {
  return (
    <header className={s.headerContainer}>
      <div className={s.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={s.active} href="/">
            <a>home</a>
          </ActiveLink>
          <ActiveLink activeClassName={s.active} href="/posts">
            <a>posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
