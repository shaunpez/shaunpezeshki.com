import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <>
  <Seo
    title="About Shaun Pezeshki"
    description="Shaun Pezeshki is a technical strategist with a talent for assisting businesses in enhancing their operational practices."
    meta={[{ name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Marketing, Technology' }]}
  />
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl">About Shaun Pezeshki</h1>
        <p>
          Shaun Pezeshki is a technical strategist with a talent for assisting businesses in enhancing their operational practices. With a foundation in marketing and tech, he always seeks to maximize client investments.
        </p>
        <p>
          He's skilled at bridging the gap between older systems and modern solutions, achieving greater efficiency. Drawing from his work experience, spanning individual brands to full-scale agencies, Shaun grasps diverse needs and meticulously crafts strategic roadmaps leading to success.
        </p>
        <p>
          Merging creativity, technology, and AI insights, Shaun emphasizes boosting user engagement and devising solutions that genuinely support individuals in elevating their companies.
        </p>
        <p>
          Want to connect? Reach out to me at <a href="mailto:hello@uphighstudio.com">hello@uphighstudio.com</a>
        </p>
      </div>
    </div>
  </Layout>
  </>
);

export default AboutPage;
