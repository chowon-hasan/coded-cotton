import React from "react";
import Head from "next/head";

const HelpPage = () => {
  return (
    <>
      <Head>
        <title>Get Help & Support | Your Company Name</title>
        <meta
          name="description"
          content="Need help? Find comprehensive support, FAQs, and contact information. We're here to assist you with all your questions and concerns."
        />
        <meta
          name="keywords"
          content="help, support, customer service, FAQs, contact us"
        />
      </Head>

      <div className="help-container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">How Can We Help You?</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">
                How do I create an account?
              </h3>
              <p>
                Creating an account is simple. Click on the "Sign Up" button and
                follow the instructions.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium mb-2">
                How can I reset my password?
              </h3>
              <p>
                Click on the "Forgot Password" link on the login page and follow
                the steps to reset your password.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="mb-4">
              Our support team is available 24/7 to help you with any questions
              or concerns.
            </p>
            <div className="space-y-2">
              <p>📧 Email: support@yourcompany.com</p>
              <p>📞 Phone: +1 (123) 456-7890</p>
              <p>💬 Live Chat: Available on bottom right</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpPage;
