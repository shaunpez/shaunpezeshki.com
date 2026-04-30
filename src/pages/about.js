import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import headerImage from "../images/shaun.jpg";

const AboutPage = () => (
  <>
    <Seo
      title="About Shaun Pezeshki"
      description="Shaun Pezeshki is a technical strategist and entrepreneur with a talent for assisting businesses in enhancing their operational practices."
      meta={[
        {
          name: "keywords",
          content:
            "Shaun Pezeshki, Shaunpez, Technical Strategist, Marketing, Technology, Inclusive Techie, Entrepreneur",
        },
      ]}
      image={headerImage}
    />
    <Layout>
      <section className="about-page editorial-page">
        <div className="site-shell editorial-page__hero">
          <div>
            <p className="eyebrow">About Shaun</p>
            <h1>Technical strategist, writer, and advocate for human rights.</h1>

            <div className="prose editorial-prose">
              <p>
                I work as a technical strategist and entrepreneur, helping businesses improve
                operations through practical technology, automation, and strategy. With a background
                in marketing and tech, I help clients make better use of their tools, strengthen
                their systems, and invest in solutions that actually support how they work.
              </p>
              <p>
                I&apos;m especially good at connecting modern solutions with existing systems,
                improving efficiency without overcomplicating the process. My experience spans
                individual brands, agencies, and small businesses, which helps me understand
                different needs and build clear, practical roadmaps for moving work forward.
              </p>
              <p>
                By combining creativity with technology, I focus on improving user engagement,
                business operations, and the everyday systems that help teams work better.
              </p>
              <p>
                Beyond technology, I care deeply about people, identity, community, and the stories
                that do not fit neatly into a professional bio. I&apos;m involved with the Human
                Rights Campaign through the Columbus steering committee, and I write for{" "}
                <a target="_blank" rel="noreferrer" href="https://medium.com/prismnpen">
                  Prism &amp; Pen
                </a>, a publication that helps amplify LGBTQ+ voices.
              </p>

              <div className="inline-actions">
                <Link to="/chat-with-shaun" className="button button-primary">
                  Connect with Shaun
                </Link>
                <a href="mailto:shaun@uphighstudio.com" className="button button-secondary">
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
);

export default AboutPage;
