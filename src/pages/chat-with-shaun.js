import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import headerImage from "../images/shaun-hero-v4.jpg"
import Seo from "../components/seo"

const ContactPage = () => (
  <>
    <Seo
      title="Connect with Shaun Pezeshki | Product Strategy and AI Workflows"
      description="Connect with Shaun Pezeshki about product, AI workflows, consulting, or a coffee chat."
      meta={[
        {
          name: "keywords",
          content:
            "Shaun Pezeshki, Technical Product Management, Product Strategy, AI Workflows, Technical Strategist, Tech Collaboration, Consulting, Virtual Coffee Chat",
        },
      ]}
      image={headerImage}
    />
    <Layout>
      <section className="contact-page editorial-page">
        <div className="site-shell editorial-page__hero contact-hero">
          <div>
            <p className="eyebrow">Let&apos;s Chat</p>
            <h1>
              For product conversations, coffee chats, or talking through an
              idea.
            </h1>
            <p className="lede">
              Whether you&apos;re hiring for a product role, working through a
              workflow problem, or just curious to connect, reach out. I&apos;m
              always happy to talk shop, share ideas, and see where the
              conversation goes.
            </p>
          </div>
          <StaticImage
            src="../images/shaun-bookstore3.jpg"
            alt="Shaun Pezeshki in front of a wall of books"
            placeholder="blurred"
            className="image-frame editorial-page__image"
            imgClassName="image-cover"
          />
        </div>

        <div className="site-shell contact-options">
          <a
            className="contact-option"
            href="https://calendly.com/shaunpez/coffee-chat"
          >
            <span>01</span>
            <strong>Coffee chat</strong>
            <p>
              Book a short conversation about product, technology, career paths,
              or ideas.
            </p>
          </a>
          <a className="contact-option" href="mailto:shaun@uphighstudio.com">
            <span>02</span>
            <strong>Email</strong>
            <p>
              Send a note about product work, AI workflows, consulting, or
              anything else on your mind.
            </p>
          </a>
          <a className="contact-option" href="https://uphighstudio.com">
            <span>03</span>
            <strong>Up High Studio</strong>
            <p>
              Visit Up High Studio to see the consulting side of my work and
              examples of practical systems I help teams build.
            </p>
          </a>
        </div>
      </section>
    </Layout>
  </>
)

export default ContactPage
