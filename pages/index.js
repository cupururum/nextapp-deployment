import {groq} from 'next-sanity'
import {getClient} from '../lib/sanity.server'

import PortfolioList from '../components/portfolio-list'

export default function HomePage(props) {
  return (
    <div>
      <PortfolioList projects={props.projects}/>
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getClient().fetch(groq`
    *[_type == "project"]{
      _id,
      header,
      description,
      mainImage {
        asset->{
          _id,
          url
        }
      }
    }
  `)
  return {
    props: {projects},
  }
}

