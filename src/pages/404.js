import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">404: Not Found</h1>
      <p className="text-lg mb-6 leading-relaxed">You just hit a route that doesn't exist... the sadness.</p>
      <p className="text-lg mb-6 leading-relaxed">
        Go back to the <Link to="/">homepage</Link>.
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
