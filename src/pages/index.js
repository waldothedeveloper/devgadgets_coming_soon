import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "./hero-section/Hero"
import Features from "./features/Features"
import JoinNewsletter from "./Newsletter/JoinNewsletter"
import Footer from "./Footer/Footer"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Dev Gadgets is the #1 technology blog that software developers and technology enthusiasts love" />
        <Hero />
        <Features />
        <JoinNewsletter />
        <Footer />
      </Layout>
    </>
  )
}
export default IndexPage
