import s from './styles.module.sass'

type SubscribeButtonProps = {
  priceId: string
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type='button'
      className={s.subscribeButton}
    >
      Inscreva-se
    </button>
  )
}
