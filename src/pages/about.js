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
                Across consulting, automation, and strategy work, Shaun helps clients turn scattered
                systems into cleaner workflows, sharper decisions, and better use of the tools they
                already have.
              </p>
              <p>
                He excels at integrating modern solutions with existing systems, boosting
                efficiency. Shaun&apos;s diverse experience, from individual brands to agencies,
                enables him to understand varied needs and develop strategic success roadmaps.
              </p>
              <p>
                By combining creativity with technology, Shaun focuses on increasing user engagement
                and creating impactful business solutions.
              </p>
              <p>
                Beyond technology, Shaun is dedicated to social advocacy, promoting inclusivity for
                Asian, Middle Eastern, and LGBTQ+ communities. He serves on the Human Rights Campaign
                Columbus steering committee and is part of the national HRC community. He also writes
                for{" "}
                <a target="_blank" rel="noreferrer" href="https://medium.com/prismnpen">
                  Prism &amp; Pen
                </a>
                , a publication focused on amplifying LGBTQ+ voices.
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
