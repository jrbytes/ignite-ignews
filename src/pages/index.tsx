import { GetStaticProps } from 'next'
import Head from 'next/head'

import { stripe } from '../services/stripe'

import SubscribeButton from '../components/SubscribeButton'

import s from './home.module.sass'

type HomeProps = {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <main className={s.contentContainer}>
        <section className={s.hero}>
          <span>👏 Hey, bem-vindo</span>
          <h1>Notícias sobre o mundo <span>React</span>.</h1>
          <p>
            Acesso a todas publicações <br />
            <span>por {product.amount} mensal</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JALeGGSJsRLHBdheY8KjVkh')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24,
  }
}
