import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import s from './styles.module.sass'

export default function SignInButton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button
      type="button"
      className={s.signInButton}
    >
      <FaGithub color="#04d361" />
      Jr Bytes
      <FiX color="#737380" className={s.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={s.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}
