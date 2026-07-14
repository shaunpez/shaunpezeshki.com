import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/post-list"
import headerImage from "../images/shaun-hero-in-light.jpg"

const Arrow = () => (
  <svg
    aria-hidden="true"
    className="arrow-icon"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11.25 3.75 17.5 10l-6.25 6.25-1.06-1.06 4.44-4.44H2.5v-1.5h12.13L10.19 4.81l1.06-1.06Z" />
  </svg>
)

const services = [
  [
    "Product Discovery",
    "Listen to the people doing the work, identify the problem behind the request, and decide what is worth building or changing.",
  ],
  [
    "Workflow Redesign",
    "Map the handoffs, edge cases, and team habits that create friction, then improve the process without losing what already works.",
  ],
  [
    "AI-Enabled Operations",
    "Find where AI and automation can reduce repetitive work, while keeping human judgment where context matters.",
  ],
  [
    "Implementation Planning",
    "Turn the direction into a practical roadmap, clear requirements, and next steps that account for business and technical constraints.",
  ],
]

const industries = [
  [
    "Small Businesses",
    "Help owner-led teams turn day-to-day knowledge into processes and tools other people can use.",
  ],
  [
    "Operations-Heavy Teams",
    "Improve repeatable work, handoffs, and exceptions so the same problems do not have to be solved from scratch.",
  ],
  [
    "Brands and Agencies",
    "Connect client needs, team capacity, and technical tradeoffs before the work becomes harder to manage.",
  ],
  [
    "Teams Building Products",
    "Clarify the user need, business case, and implementation path before the team commits to a solution.",
  ],
]

const testimonials = [
  {
    quote:
      "Shaun connected our legacy systems with modern platforms, transforming how we manage operations and greatly improving overall efficiency.",
    author: "Travis B., Lucas Group",
  },
  {
    quote:
      "Shaun helped us bring a 200-year legacy into the modern era. Our new site not only showcases our services but also strengthens our connection with visitors and vendors.",
    author: "Nicole A., Fulton Fish Cooperative",
  },
]

const IndexPage = ({ data }) => {
  const productPosts = data.productPosts.edges

  return (
    <>
      <Seo
        title="Shaun Pezeshki | Technical Product Strategy"
        description="Technical product strategy, AI workflows, systems thinking, and personal writing from Shaun Pezeshki."
        meta={[
          {
            name: "keywords",
            content:
              "Shaun Pezeshki, Technical Product Management, Technical Product Strategy, AI Workflows, Systems Thinking, Automation, Inclusive Techie",
          },
        ]}
        image={headerImage}
      />
      <Layout>
        <section className="home-masthead editorial-reveal">
          <div className="site-shell home-masthead__grid">
            <div className="home-masthead__copy">
              <h1>I help teams make complicated work easier to manage.</h1>
              <p className="lede">
                I work across product, technology, and operations. I start by
                understanding what people need, what is getting in the way, and
                what the team can realistically change. From there, I help shape
                practical products, workflows, and AI tools people can actually
                use.
              </p>
              <div className="action-row" aria-label="Primary actions">
                <Link to="/chat-with-shaun" className="button button-primary">
                  Let&apos;s Chat <Arrow />
                </Link>
                <Link to="/blog" className="button button-secondary">
                  Read Stories <Arrow />
                </Link>
              </div>
            </div>
            <figure className="home-portrait">
              <StaticImage
                src="../images/shaun-hero-in-light.jpg"
                alt="Shaun Pezeshki smiling in a bright studio"
                placeholder="blurred"
                className="image-frame"
                imgClassName="image-cover"
                loading="eager"
              />
            </figure>
          </div>
        </section>

        <section className="editorial-section proof-section" id="work">
          <div className="site-shell proof-layout">
            <div className="section-kicker">
              <h2>Product work grounded in how teams operate.</h2>
              <p>
                My background in marketing, development, automation, and client
                service helps me connect user needs with business and technical
                constraints. The goal is a clear path from the problem to
                something the team can build, adopt, and improve.
              </p>
            </div>

            <div className="proof-columns">
              <div className="service-list">
                {services.map(([title, text]) => (
                  <div className="service-item" key={title}>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="proof-notes">
                <p className="list-label">Who I work with</p>
                {industries.map(([title, text]) => (
                  <div className="note-row" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="quote-strip" aria-label="Client feedback">
              {testimonials.map(testimonial => (
                <figure key={testimonial.author}>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>{testimonial.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section writing-section">
          <div className="site-shell writing-layout">
            <div className="section-kicker">
              <h2>
                Stories from work, life, and what I&apos;m still figuring out.
              </h2>
              <p>
                I write about technology, product thinking, identity, community,
                career shifts, and the questions that keep coming up along the
                way.
              </p>
              <Link to="/blog" className="text-link">
                All Posts <Arrow />
              </Link>
            </div>
            <PostList posts={productPosts} />
          </div>
        </section>

        <section className="editorial-section profile-bridge">
          <div className="site-shell profile-layout">
            <div className="profile-image-grid">
              <StaticImage
                src="../images/shaun-sitting.jpg"
                alt="Shaun Pezeshki sitting and smiling"
                placeholder="blurred"
                className="image-frame profile-main-image"
                imgClassName="image-cover"
              />
            </div>
            <div className="section-kicker">
              <h2>Who I am shapes how I work.</h2>
              <p>
                I&apos;m a technical strategist with over 14 years of experience
                across marketing, development, automation, and client work. My
                advocacy and writing are part of the same practice: listening
                closely, noticing patterns, and making complex human systems
                easier to navigate.
              </p>
              <Link to="/about" className="button button-secondary">
                About Shaun <Arrow />
              </Link>
            </div>
          </div>
        </section>

        <section className="editorial-section contact-cta">
          <div className="site-shell contact-cta__inner">
            <h2>
              Hiring for product, improving a workflow, or trying to make AI
              useful at work?
            </h2>
            <div className="action-row">
              <Link to="/chat-with-shaun" className="button button-primary">
                Let&apos;s Chat <Arrow />
              </Link>
              <a
                href="mailto:shaun@uphighstudio.com"
                className="button button-secondary"
              >
                Email Shaun <Arrow />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    productPosts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          draft: { ne: true }
          slug: {
            in: [
              "ai-not-making-you-more-productive-yet"
              "staying-on-social-media-2026"
              "navigating-difficult-client-relationships"
              "strategies-for-success-navigating-the-2024-tech-job-market"
            ]
          }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            slug
            category
            excerpt
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          rawMarkdownBody
        }
      }
    }
  }
`

export default IndexPage
