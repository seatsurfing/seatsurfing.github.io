"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[9913],{4287:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var t=n(4848),i=n(8453);const r={},l="Google Cloud",c={id:"auth-provider/google",title:"Google Cloud",description:"You can connect your Google Cloud Platform as an Auth Provider for Seatsurfing.",source:"@site/docs/auth-provider/google.md",sourceDirName:"auth-provider",slug:"/auth-provider/google",permalink:"/docs/auth-provider/google",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microsoft Azure",permalink:"/docs/auth-provider/azure"},next:{title:"Keycloak",permalink:"/docs/auth-provider/keycloak"}},a={},s=[{value:"1. Configure your Google Cloud Platform Account",id:"1-configure-your-google-cloud-platform-account",level:2},{value:"2. Configure Seatsurfing",id:"2-configure-seatsurfing",level:2},{value:"3. Finish Google Cloud Configuration",id:"3-finish-google-cloud-configuration",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"google-cloud",children:"Google Cloud"})}),"\n",(0,t.jsx)(o.p,{children:"You can connect your Google Cloud Platform as an Auth Provider for Seatsurfing."}),"\n",(0,t.jsx)(o.h2,{id:"1-configure-your-google-cloud-platform-account",children:"1. Configure your Google Cloud Platform Account"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Log in to the ",(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"}),"."]}),"\n",(0,t.jsx)(o.li,{children:'Navigate to "APIs and services".'}),"\n",(0,t.jsx)(o.li,{children:'Click "Create credentials" and choose "OAuth client ID".'}),"\n",(0,t.jsx)(o.li,{children:'Create a new client ID with Application Type "Web application" and save it.'}),"\n",(0,t.jsx)(o.li,{children:"Copy the Client ID and the Client Secret."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"2-configure-seatsurfing",children:"2. Configure Seatsurfing"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Log in to Seatsurfing's Administrator UI."}),"\n",(0,t.jsx)(o.li,{children:"Navigate to Settings and add a new Auth Provider."}),"\n",(0,t.jsx)(o.li,{children:"Select the Google template."}),"\n",(0,t.jsx)(o.li,{children:'Paste the Client ID into the "Client ID" field.'}),"\n",(0,t.jsx)(o.li,{children:'Paste the Secret ID into the "Client Secret" field.'}),"\n",(0,t.jsx)(o.li,{children:"Save the Auth Provider."}),"\n",(0,t.jsx)(o.li,{children:"Copy the Callback URL which is displayed right after saving."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"3-finish-google-cloud-configuration",children:"3. Finish Google Cloud Configuration"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Head back to the OAuth Client you've created in the Google Cloud Console in Step 1."}),"\n",(0,t.jsxs)(o.li,{children:['Click "Add URI" under "Authorised redirect URIs" and add the copied Callback URL from Step 2 as a Web Redirect URI (i.e. ',(0,t.jsx)(o.code,{children:"https://app.seatsurfing.app/auth/xyz/callback"}),")."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>c});var t=n(6540);const i={},r=t.createContext(i);function l(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);