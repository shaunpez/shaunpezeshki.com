import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/post-list";
import headerImage from "../images/shaun-hero-in-light.jpg";

const Arrow = () => (
  <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11.25 3.75 17.5 10l-6.25 6.25-1.06-1.06 4.44-4.44H2.5v-1.5h12.13L10.19 4.81l1.06-1.06Z" />
  </svg>
);

const services = [
  ["Tech Optimization", "Revamp systems for higher efficiency."],
  ["Automation Solutions", "Eliminate manual tasks with custom automation."],
  ["Custom Development", "Tailored tools to meet your specific business goals."],
  ["Data-Driven Strategy", "Insights to guide smarter decision-making."],
];

const industries = [
  ["Manufacturing", "Streamlining operations and optimizing production workflows."],
  ["E-commerce", "Enhancing customer experiences through automation and seamless integrations."],
  ["Brands and Agencies", "Developing tailored solutions that boost efficiency and drive growth."],
];

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
];

const IndexPage = ({ data }) => {
  const latestPosts = data.latestPosts.edges;

  return (
    <>
      <Seo
        title="Shaun Pezeshki"
        description="Technical strategy, automation, and personal stories from Shaun Pezeshki."
        meta={[
          {
            name: "keywords",
            content:
              "Shaun Pezeshki, Shaunpez, Technical Strategist, Marketing, Technology, Entrepreneur, Inclusive Techie",
          },
        ]}
        image={headerImage}
      />
      <Layout>
        <section className="home-masthead editorial-reveal">
          <div className="site-shell home-masthead__grid">
            <div className="home-masthead__copy">
              <h1>I help businesses grow and succeed.</h1>
              <p className="lede">
                I build smarter automations, cleaner workflows, and practical systems that help
                teams save time, reduce handoffs, and make better decisions. I also write about
                technology, identity, community, career shifts, and what I&apos;m learning along the
                way.
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
              <h2>What I Offer</h2>
              <p>
                I partner with small to medium-sized businesses that need clearer systems, better
                operations, and practical technology that fits how the team actually works.
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
              {testimonials.map((testimonial) => (
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
                I write about tech, identity, community, career shifts, and the questions that keep
                coming up along the way.
              </p>
              <Link to="/blog" className="text-link">
                All Posts <Arrow />
              </Link>
            </div>
            <PostList posts={latestPosts} />
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
                I&apos;m a tech professional with over 14 years of experience, specializing in
                optimizing business processes through tech solutions. Beyond technology, I care about
                social advocacy, inclusivity, and making room for more honest conversations.
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
              Have a project in mind, a workflow that takes too much time, or just want to talk
              through an idea?
            </h2>
            <div className="action-row">
              <Link to="/chat-with-shaun" className="button button-primary">
                Let&apos;s Chat <Arrow />
              </Link>
              <a href="mailto:shaun@uphighstudio.com" className="button button-secondary">
                Email Shaun <Arrow />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    latestPosts: allMarkdownRemark(
      limit: 3
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { ne: true } } }
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
`;

export default IndexPage;
