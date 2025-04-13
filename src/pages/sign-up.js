import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SignupForm from '../components/SignupForm';


export default function SignUp() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Sign Up`}
      description="Create a free Seatsurfing account">
      <main className='container container--fluid margin-vert--lg'>
        <div className='row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module'>
          <div className='col col--8'>
            <article>
              <h1>Create Account</h1>
              <p>Create a free account on our servers and get started within seconds.</p>
              <p>😍 It's free for up to ten users.</p>
              <p>🚀 You can optionally upgrade to the Paid Plan and enjoy additional features later.</p>
              <SignupForm />
            </article>
          </div>
          <div className='col col--2'>
          </div>
        </div>
      </main>
    </Layout>
  );
}
