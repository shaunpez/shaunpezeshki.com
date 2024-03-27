import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import headerImage from '../images/shaun.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => (
  <>
  <Seo
    title="About"
    description="Shaun Pezeshki is a technical strategist with a talent for assisting businesses in enhancing their operational practices."
    meta={[{ name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Marketing, Technology, Millennial Techie' }]}
    image={headerImage}
  />
  <Layout>
    <div className="container px-4">
      <div className="prose prose-lg max-w-none">
        <div className="bio">
          <div className="image">
            <StaticImage
                  src="../images/shaun.jpg" // Adjust the path as necessary
                  alt="Shaun Pezeshki"
                  placeholder="blurred" // Optional: This prop defines the loading strategy
            />
          </div>
          <div className="info">
            <h1 className="text-4xl">About Shaun Pezeshki</h1>
            <p>
            Shaun Pezeshki is a technical strategist known for enhancing business operations. With a strong marketing and tech background, he maximizes client investments efficiently. </p>
            <p>
            He excels at integrating modern solutions with existing systems, boosting efficiency. Shaun's diverse experience, from individual brands to agencies, enables him to understand varied needs and develop strategic success roadmaps. </p>
            <p>
            By combining creativity with technology, Shaun focuses on increasing user engagement and creating impactful business solutions. </p>
            <p>
            Beyond technology, Shaun is dedicated to social advocacy, promoting inclusivity for Asian, Middle Eastern, and LGBTQ+ communities.  </p>
            <p>
            Want to connect? Reach out to me at <a href="mailto:shaun@uphighstudio.com">shaun@uphighstudio.com</a>.
            </p>
          </div>
          

        </div>


      </div>
    </div>
  </Layout>
  </>
);

export default AboutPage;
