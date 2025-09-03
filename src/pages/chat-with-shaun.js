import React from "react";
import Layout from "../components/layout";
import headerImage from '../images/shaun-hero-v4.jpg';
import Seo from "../components/seo";

const ContactPage = () => (
  <>
<Seo
      title="Connect with Shaun Pezeshki: Tech Enthusiast, Strategist & Entrepreneur"
      description="Engage with Shaun Pezeshki for insightful tech and entrepreneurship discussions and collaborations. Ready to chat about AI, tech innovations, entrepreneurship, or grab a virtual coffee."
      meta={[
        {
          name: 'keywords',
          content: 'Shaun Pezeshki, Technical Strategist, Technology, AI Conversations, Tech Collaboration, Entrepreneurship, Virtual Coffee Chat, Inclusive Techie',
        },
      ]}
      image={headerImage}
    />
  <Layout>
    <div className="contact-page">
      <div className="container">
        <div className="prose">
          <h1>Let's Chat</h1>
          <p>
          Hey there! Interested in chatting about tech, entrepreneurship, exploring inclusivity, or anything in between? Whether you're itching to share the latest breakthrough or just looking for a friendly chat, I'm here to learn and talk shop.
          </p>
          <h3>Want to set up a coffee chat?</h3>
          <p>Pick a slot from my  <a href="https://calendly.com/shaunpez/coffee-chat">Calendly link</a> (15-minute chats available). </p>
          <h3>Prefer email?</h3>
          <p>Reach out to me at <a href="mailto:shaun@uphighstudio.com">shaun@uphighstudio.com</a>. You can also connect with me on social media.</p>  
          <h3>Curious about what I do?</h3>
          <p>
             Check out <a href="https://uphighstudio.com">Up High Studio</a> and let's chat soon!
          </p>
        </div>
      </div>
    </div>
  </Layout>
  </>
);

export default ContactPage;
