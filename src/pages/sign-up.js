import Layout from "@theme/Layout";
import SignupForm from "../components/SignupForm";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

export default function SignUp() {
  return (
    <Layout title={`Sign Up`} description="Create a free Seatsurfing account">
      <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div className="col col--8">
            <article>
              <h1>
                <Translate>Start now for free</Translate>
              </h1>
              <p class="text--bold">
                <Translate>
                  Our Free plan contains everything you need to get started for
                  up to 10 users. Our Professional plan includes unlimited users
                  and
                </Translate>{" "}
                <Link target="_blank" to="/features">
                  <Translate>other enterprise features</Translate>
                </Link>
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
