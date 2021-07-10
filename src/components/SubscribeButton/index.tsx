import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import s from './styles.module.sass'

type SubscribeButtonProps = {
  priceId: string
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      console.log(err)
      alert(err.message)
    }
  }

  return (
    <button
      type='button'
      className={s.subscribeButton}
      onClick={handleSubscribe}
    >
      Inscreva-se
    </button>
  )
}
