import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import headerImage from "../images/shaun-hero-v4.jpg";
import Seo from "../components/seo";

const ContactPage = () => (
  <>
    <Seo
      title="Connect with Shaun Pezeshki"
      description="Chat with Shaun Pezeshki about technology, entrepreneurship, inclusivity, consulting, or a virtual coffee."
      meta={[
        {
          name: "keywords",
          content:
            "Shaun Pezeshki, Technical Strategist, Technology, AI Conversations, Tech Collaboration, Entrepreneurship, Virtual Coffee Chat, Inclusive Techie",
        },
      ]}
      image={headerImage}
    />
    <Layout>
      <section className="contact-page editorial-page">
        <div className="site-shell editorial-page__hero contact-hero">
          <div>
            <p className="eyebrow">Let&apos;s Chat</p>
            <h1>For consulting, coffee chats, or talking through an idea.</h1>
            <p className="lede">
              Interested in chatting about tech, entrepreneurship, exploring inclusivity, or
              something in between? I&apos;m here to learn, talk shop, and see where the conversation
              goes.
            </p>
          </div>
          <StaticImage
            src="../images/shaun-bookstore3.jpg"
            alt="Shaun Pezeshki in front of a wall of books"
            placeholder="blurred"
            className="image-frame editorial-page__image"
            imgClassName="image-cover"
          />
        </div>

        <div className="site-shell contact-options">
          <a className="contact-option" href="https://calendly.com/shaunpez/coffee-chat">
            <span>01</span>
            <strong>Coffee chat</strong>
            <p>Pick a slot from my Calendly link. Fifteen-minute chats are available.</p>
          </a>
          <a className="contact-option" href="mailto:shaun@uphighstudio.com">
            <span>02</span>
            <strong>Email</strong>
            <p>Reach out at shaun@uphighstudio.com for projects, ideas, or introductions.</p>
          </a>
          <a className="contact-option" href="https://uphighstudio.com">
            <span>03</span>
            <strong>Up High Studio</strong>
            <p>Curious about the consulting work? See the studio and what I help teams build.</p>
          </a>
        </div>
      </section>
    </Layout>
  </>
);

export default ContactPage;
