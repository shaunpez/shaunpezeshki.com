import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import headerImage from "../images/shaun.jpg"

const AboutPage = () => (
  <>
    <Seo
      title="About Shaun Pezeshki | Technical Product Strategy"
      description="Shaun Pezeshki is a technical strategist working across product, technology, and operations, with a focus on AI workflows and practical systems."
      meta={[
        {
          name: "keywords",
          content:
            "Shaun Pezeshki, Technical Product Management, Product Strategy, AI Workflows, Systems Thinking, Technical Strategist, Inclusive Techie",
        },
      ]}
      image={headerImage}
    />
    <Layout>
      <section className="about-page editorial-page">
        <div className="site-shell editorial-page__hero">
          <div>
            <p className="eyebrow">About Shaun</p>
            <h1>
              Technical strategist working across product, technology, and
              operations.
            </h1>

            <div className="prose editorial-prose">
              <p>
                My background spans marketing, development, automation, AI
                workflows, and client service. My work begins by listening,
                understanding what is getting in the way, and finding a
                practical path forward.
              </p>
              <p>
                That experience led me naturally to product work. I care about
                understanding users, choosing problems worth solving, navigating
                the tradeoffs a team has to make, and building things people can
                actually use.
              </p>
              <p>
                I also write about identity, community, work, technology, and
                the parts of life that do not fit neatly into a resume. My
                involvement with the{" "}
                <a target="_blank" rel="noreferrer" href="https://www.hrc.org/">
                  Human Rights Campaign
                </a>{" "}
                through the Columbus steering committee and my writing for{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/prismnpen"
                >
                  Prism &amp; Pen
                </a>
                {", "}a publication that helps amplify LGBTQ+ voices. Both are
                an important part of who I am and how I see the world.
              </p>

              <div className="inline-actions">
                <Link to="/chat-with-shaun" className="button button-primary">
                  Let&apos;s Chat
                </Link>
                <a
                  href="mailto:shaun@uphighstudio.com"
                  className="button button-secondary"
                >
                  Email Shaun
                </a>
              </div>
            </div>
          </div>
          <StaticImage
            src="../images/disco-shaun.jpg"
            alt="Shaun Pezeshki smiling"
            placeholder="blurred"
            className="image-frame editorial-page__image"
            imgClassName="image-cover"
          />
        </div>
      </section>
    </Layout>
  </>
)

export default AboutPage
