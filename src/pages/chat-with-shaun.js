import React from "react";
import Layout from "../components/layout";
import headerImage from '../images/shaun-hero-v4.jpg';
import Seo from "../components/seo";

const ContactPage = () => (
  <>
  <Seo
      title="Connect with Shaun Pezeshki: Tech Enthusiast & Strategist"
      description="Engage with Shaun Pezeshki for insightful tech discussions and collaborations. Ready to chat about AI, tech innovations, or grab a virtual coffee."
      meta={[
          { name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Technology, AI Conversations, Tech Collaboration, Virtual Coffee Chat, Millennial Techie' }
      ]}
      image={headerImage}
  />
  <Layout>
    <div className="container mx-auto">
      <div className="prose prose-lg max-w-none">
        <h1>Let's Chat</h1>
        <p>
          Hey there! Interested in chatting about tech, exploring inclusivity, or anything in between? Whether you're itching to share the latest breakthrough or just looking for a friendly chat, I'm here to learn and talk shop.
        </p>
        <p>To set up a coffee chat, feel free to pick a slot from my <a href="https://calendly.com/shaunpez/coffee-chat" className="transition duration-300">Calendly link</a>. </p>
        <p>To send an email, reach out at <a href="mailto:shaun@uphighstudio.com" className="transition duration-300">shaun@uphighstudio.com</a>. You can also connect with me on social media.</p>  
        <p>
          Curious about what I do? Check out <a href="https://uphighstudio.com" className="transition duration-300">Up High Studio</a> and let's chat soon!
        </p>
      </div>
    </div>
  </Layout>
  </>
);

export default ContactPage;
