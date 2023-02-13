import Head from 'next/head'
import Categories from '../components/home/Categories'
import Hero from '../components/home/Hero'
import Updates from '../components/home/Updates'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='website templates free website templates templates cool website  templates paid website templates'
        />
        <title>Website Templates App</title>
        <meta
          name='description'
          content='Carefully thought-out Sketch, Figma, Bootstrap 5 & Adobe XD UI kits that will speed up your workflow. '
        />
      </Head>
      <Hero />
      <Updates />
      <Categories />
    </>
  )
}
