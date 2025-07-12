import Layout from "@theme/Layout";
import SignupForm from "../components/SignupForm";

export default function SignUp() {
  return (
    <Layout title={`Sign Up`} description="Create a free Seatsurfing account">
      <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div className="col col--8">
            <article>
              <h1>Sign up and start instantly</h1>
              <p class="text--bold">
                Our Free Plan contains everything you need to get started for up
                to 10 users. Our Paid Plan includes unlimited users and{" "}
                <a href="/features" target="_blank">
                  other enterprise features
                </a>
                .
              </p>
              <SignupForm />
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
}
