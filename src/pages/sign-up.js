import React from "react";
import Layout from "@theme/Layout";
import SignupForm from "../components/SignupForm";

export default function SignUp() {
  return (
    <Layout title={`Sign Up`} description="Create a free Seatsurfing account">
      <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div className="col col--8">
            <article>
              <h1>Sign up for Free Plan</h1>
              <p>
                Start instantly with our Free Plan &ndash; no cost, no
                commitment. It's free forever for up to 10 users 😍.
              </p>
              <p class="text--bold">
                You can always upgrade to our Paid Plan after signing-up to
                unlock unlimited users and other enterprise features 🚀.
              </p>
              <SignupForm plan="free" />
            </article>
          </div>
          <div className="col col--2"></div>
        </div>
      </main>
    </Layout>
  );
}
