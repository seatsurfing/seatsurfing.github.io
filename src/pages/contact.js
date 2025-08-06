import Layout from "@theme/Layout";
import ContactForm from "../components/ContactForm";
import Translate from "@docusaurus/Translate";

export default function SignUp() {
  return (
    <Layout title={`Contact`} description="Contact us">
      <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div className="col col--8">
            <article>
              <h1>
                <Translate>Contact us</Translate>
              </h1>
              <ContactForm />
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
}
