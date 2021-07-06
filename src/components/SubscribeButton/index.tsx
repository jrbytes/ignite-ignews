import s from './styles.module.sass'

export default function SubscribeButton() {
  return (
    <button
      type='button'
      className={s.subscribeButton}
    >
      Subscribe now
    </button>
  )
}
