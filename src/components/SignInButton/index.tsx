import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import s from './styles.module.sass'

export default function SignInButton() {
  const [session] = useSession()

  return session ? (
    <button
      type="button"
      className={s.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={s.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={s.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  )
}
