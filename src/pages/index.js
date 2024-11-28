import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import headerImage from '../images/shaun-hero-in-light.png';
import { StaticImage } from 'gatsby-plugin-image';
import PostList from "../components/post-list"; // Reuse PostList for consistency


const IndexPage = ({ data }) => {
  const latestPosts = data.latestPosts.edges;

  return (
    <>
      <Seo
        title="Helping Businesses Grow with Automation and Tech Solutions"
        description="Insights on personal growth, tech, career development, mental health, LGBTQ+ and minority issues in modern life."
        meta={[{ name: 'keywords', content: 'Shaun Pezeshki, Shaunpez, Technical Strategist, Marketing, Technology, Entrepreneur, Inclusive Techie' }]}
        image={headerImage}
      />
      <Layout>
      <section className="hero-section">
        <div className="container md:flex md:items-center">
          <div className="md:w-1/2 w-full md:pr-16 pt-8 md:pt-0">
            <h1>I help businesses grow and succeed.</h1>
            <p>Through smart automation and efficient tech solutions, I'll streamline your processes and help you reach your goals.</p>
            <Link to="/chat-with-shaun" className="page-link">Let's Chat
               <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

            </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <StaticImage
                    src="../images/shaun-hero-in-light.jpg" // Adjust the path as necessary
                    alt="Shaun Pezeshki"
                    placeholder="blurred" // Optional: This prop defines the loading strategy
                    className="shadow-lg"
              />
          </div>
        </div>
      </section>
      {/* Why Optimization Matters */}
      <section className="work-with-section">
        <div className="container md:flex md:flex-row flex flex-col-reverse md:items-center">
        <div className="md:w-1/2 w-full md:pr-16">
              <StaticImage
                      src="../images/giraffe-chat.jpg" // Adjust the path as necessary
                      alt="Professional Giraffes"
                      placeholder="blurred" // Optional: This prop defines the loading strategy
                      className="shadow-lg"
                />
          </div>
          <div className="md:w-1/2 w-full pt-8 pb-8 md:pt-0 md:pb-0">
              <h2 className="section-title">Who I Work With</h2>
              <p className="section-text">
                I partner with small to medium-sized businesses across a range of industries, including:
              </p>
              <ul className="industry-list">
                <li>
                  <strong>Manufacturing: </strong> Streamlining operations and optimizing production workflows.
                </li>
                <li>
                  <strong>E-commerce: </strong> Enhancing customer experiences through automation and seamless integrations.
                </li>
                <li>
                  <strong>Brands and Agencies: </strong> Developing tailored solutions that boost efficiency and drive growth.
                </li>
              </ul>
            </div>

         
        </div>
      </section>
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
          <div className="services-grid">
            {[
              { title: "Tech Optimization", description: "Revamp systems for higher efficiency" },
              { title: "Automation Solutions", description: "Eliminate manual tasks with custom automation" },
              { title: "Custom Development", description: "Tailored tools to meet your specific business goals" },
              { title: "Data-Driven Strategy", description: "Insights to guide smarter decision-making" },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container md:flex md:items-center">
          
          
          <div className="md:w-1/2 w-full md:pr-16 pt-8 md:pt-0">
            <h2 className="section-title">Who I Am</h2>
            <p className="section-text">
              I'm a tech professional with over 14 years of experience, specializing in optimizing business processes through tech solutions. My expertise covers web development, automation, and problem-solving, helping businesses of all sizes grow efficiently.
            </p>
            <Link to="/about" className="page-link">
                About Shaun
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
              <StaticImage
                      src="../images/shaun-sitting.jpg" // Adjust the path as necessary
                      alt="Shaun Pezeshki"
                      placeholder="blurred" // Optional: This prop defines the loading strategy
                      className="shadow-lg"
                />
          </div>
        </div>
      </section>


      {/* Testimonials/Case Studies */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Shaun connected our legacy systems with modern platforms, transforming how we manage operations and greatly improving overall efficiency."</p>
              <p className="testimonial-author">- Travis B.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Shaun helped us bring a 200-year legacy into the modern era. Our new site not only showcases our services but also strengthens our connection with visitors and vendors, making it easier for them to understand who we are and what we offer."</p>
              <p className="testimonial-author">- Nicole A.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="latest-articles-section">
          <div className="container home">
            <h2 className="section-title">Latest Articles</h2>
            <p class="section-text">Here are my latest posts on tech and business. While my blog dives into all aspects of my journey, these articles focuses on practical insights to help businesses grow.</p>
            <Link to="/blog" className="page-link">
                All Posts
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
            <PostList posts={latestPosts} />
          </div>
        </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="section-title">Ready to Connect with Shaun?</h2>
          <Link to="/chat-with-shaun" className="cta-button">Let's Chat
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
        </div>
      </section>

      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    categories: allMarkdownRemark {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
      }
    }
    totalCount: allMarkdownRemark {
      totalCount
    }
    latestPosts: allMarkdownRemark(limit: 2, sort: {frontmatter: {date: DESC}}, filter: { frontmatter: { category: { in: ["Career Development", "Technology"] } } }) {
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default IndexPage;
