import Layout from "@theme/Layout";
import SignupForm from "../components/SignupForm";

export default function SignUpPaid() {
  return (
    <Layout title={`Sign Up`} description="Create a free Seatsurfing account">
      <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div className="col col--8">
            <article>
              <h1>Sign up for Paid Plan</h1>
              <p>
                Start instantly with our Paid Plan &ndash; enterprise features
                and no user limit 😍.
              </p>
              <p class="text--bold">
                After signing up, you need to upgrade to the Paid Plan in your
                administration interface to unlock{" "}
                <a href="/features" target="_blank">
                  all features
                </a>{" "}
                🚀.
              </p>
              <SignupForm plan="paid" />
            </article>
          </div>
          <div className="col col--2"></div>
        </div>
      </main>
    </Layout>
  );
}
