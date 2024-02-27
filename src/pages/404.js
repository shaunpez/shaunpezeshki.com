import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 Page Not found" />
    <div className="container">
      <div className="prose prose-xl">
      <h1 className="text-4xl">404 Page Not Found</h1>
        <p>Oops! It seems like you've taken a wrong turn in the digital wilderness. Fear not, weary traveler. </p>
        <p>
          Return to the <Link to="/">main path</Link>.
        </p>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404 Page Not Found" />

export default NotFoundPage
