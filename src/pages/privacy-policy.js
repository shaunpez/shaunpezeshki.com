import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <>
<Seo
    title="Privacy Policy | Your Company Name"
    description="Our Privacy Policy outlines how we collect, use, and protect your information. We are committed to ensuring the privacy and security of your data."
    meta={[
        { name: 'keywords', content: 'Privacy Policy, Data Protection, User Privacy, Information Security, Shaun Pezeshki' }
    ]}
/>

  <Layout>
    <div className="container px-4">
      <div className="prose prose-lg max-w-none">
        <p className="text-sm">Last updated: February, 20 2024</p>
        <h1 className="text-4xl">Privacy Policy</h1>
        <h2>Introduction</h2>
        <p>Welcome to Code & Quirks: Ramblings of a Weary Millennial Dev. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mail:shaun@uphighstudio.com">shaun@uphighstudio.com</a>.</p>
        
        <h2>Information We Collect</h2>
        <p>We collect several types of information from and about users of our website, including information by which you may be personally identified, such as name, postal address, email address, telephone number, etc. ("personal information").</p>

        <h2>How We Use Your Information</h2>
        <p>We use information that we collect about you or that you provide to us, including any personal information, to provide our website and its contents to you, to provide you with information, products, or services that you request from us, to fulfill any other purpose for which you provide it, and to carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</p>

        <h2>CCPA Privacy Rights</h2>
        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <ul>
            <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
        </ul>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at shaun@uphighstudio.com.</p>

        <h2>Changes to Our Privacy Policy</h2>
        <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our website and this privacy policy to check for any changes.</p>

        <h2>Contact Information</h2>
        <p>If you have any questions or concerns about our privacy policy, please contact us at: <a href="mailto:shaun@uphighstudio.com">shaun@uphighstudio.com</a></p>
      </div>
    </div>
  </Layout>
  </>
);

export default AboutPage;
