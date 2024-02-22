import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = () => (
  <>
  <Seo
      title="Connect with Shaun Pezeshki: Tech Enthusiast & Strategist"
      description="Engage with Shaun Pezeshki for insightful tech discussions and collaborations. Ready to chat about AI, tech innovations, or grab a virtual coffee."
      meta={[
          { name: 'keywords', content: 'Shaun Pezeshki, Technical Strategist, Technology, AI Conversations, Tech Collaboration, Virtual Coffee Chat' }
      ]}
  />
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl">Let's Chat</h1>
        <p>
          Hey there! Interested in chatting about tech, AI, or anything in between? Whether you're itching to share the latest breakthrough or just looking for a friendly tech chat, I'm here to learn and talk shop.
        </p>
        <p>
          Shoot me a message, email, or let's grab a virtual coffee and geek out about all things tech.
        </p>
        <p>
          To set up a coffee chat, feel free to pick a slot from my <a href="https://calendly.com/shaunpez/coffee-chat?month=2024-02" className="transition duration-300">Calendly link</a>. Looking forward to our chat!
        </p>
        <p>
          Drop me an email at <a href="mailto:shaun@uphighstudio.com" className="transition duration-300">shaun@uphighstudio.com</a> or connect with me on social media. Let's dive into the world of tech together!
        </p>
        <p>
          Curious about what I do? Check out <a href="https://uphighstudio.com" className="transition duration-300">Up High Studio</a> and let's chat soon!
        </p>
      </div>
    </div>
  </Layout>
  </>
);

export default ContactPage;
