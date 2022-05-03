import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A legend of the highest caliber"
        src="../images/lol.jpg"
      />
    </Layout>
  )
}

export default IndexPage