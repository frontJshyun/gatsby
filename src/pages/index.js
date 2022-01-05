import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import image_1 from '../images/1.jpg'
import image_2 from '../images/2.jpg'
import image_3 from '../images/3.jpg'
import image_4 from '../images/4.jpg'
import image_5 from '../images/5.jpg'
import image_6 from '../images/6.jpg'
import image_7 from '../images/7.jpg'
import image_8 from '../images/8.jpg'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /><br />
    <picture>
      <source media="(max-width: 300px)" srcset={image_1} />
      <source media="(max-width: 400px)" srcset={image_2} />
      <source media="(max-width: 500px)" srcset={image_3} />
      <source media="(max-width: 600px)" srcset={image_4} />
      <source media="(max-width: 700px)" srcset={image_5} />
      <source media="(max-width: 800px)" srcset={image_6} />
      <source media="(max-width: 900px)" srcset={image_7} />
      <source media="(max-width: 1000px)" srcset={image_8} />
      <img
        src={image_1}
      />
    </picture>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
