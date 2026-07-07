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
    "Find the real workflow problem behind requests, then turn it into a clear decision about what to build, change, or stop doing.",
  ],
  [
    "Workflow Redesign",
    "Map handoffs, edge cases, and team habits so the fix reduces friction without breaking the parts people already trust.",
  ],
  [
    "AI-Enabled Operations",
    "Use automation where it shortens busywork, keep human judgment where context matters, and make adoption feel practical.",
  ],
  [
    "Implementation Planning",
    "Translate strategy into roadmaps, specs, and buildable next steps across business, design, and technical constraints.",
  ],
]

const industries = [
  [
    "Small Businesses",
    "Turning owner knowledge and day-to-day operations into systems the team can actually use.",
  ],
  [
    "Operations-Heavy Teams",
    "Improving repeatable work, handoffs, and exceptions so people spend less time sorting through the same problems.",
  ],
  [
    "Brands and Agencies",
    "Connecting client needs, internal capacity, and technical tradeoffs before the work turns into churn.",
  ],
  [
    "Product-Minded Teams",
    "Helping frame the user need, business case, and implementation path before everyone starts building.",
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
              <h1>I turn complicated workflows into useful systems.</h1>
              <p className="lede">
                I work at the intersection of business operations, automation,
                AI workflows, and product decisions. I help teams
                understand what people need, make clear tradeoffs, and build
                systems that make the work easier to manage.
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
              <h2>Product-shaped work for practical teams.</h2>
              <p>
                I bring a product manager&apos;s lens to small-business systems,
                AI adoption, operations, and technical projects: understand the
                user, work within the constraints, and ship the version people can
                actually use.
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
              <h2>Stories from work, life, and what I&apos;m still figuring out.</h2>
              <p>
                I write about tech, identity, community, career shifts, and the
                questions that keep coming up along the way.
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
