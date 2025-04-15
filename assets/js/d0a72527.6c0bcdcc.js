"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[6161],{2699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"confluence","title":"Confluence","description":"You can integrate the web booking interface for your employees into Atlassian Confluence. This could be beneficially if you\'re already using Confluence in your organisation for collaboration. As organising common spaces for real-life collaboration is an essential part of this, Seatsurfing is also available as a Confluence App.","source":"@site/docs/confluence.md","sourceDirName":".","slug":"/confluence","permalink":"/docs/confluence","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Web App","permalink":"/docs/booking-ui"},"next":{"title":"Rest API","permalink":"/docs/rest-api"}}');var a=t(4848),s=t(8453);const r={},o="Confluence",c={},l=[{value:"Confluence Cloud",id:"confluence-cloud",level:2},{value:"Confluence Data Center",id:"confluence-data-center",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"confluence",children:"Confluence"})}),"\n",(0,a.jsxs)(n.p,{children:["You can integrate the web booking interface for your employees into ",(0,a.jsx)(n.a,{href:"https://www.atlassian.com/software/confluence",children:"Atlassian Confluence"}),". This could be beneficially if you're already using Confluence in your organisation for collaboration. As organising common spaces for real-life collaboration is an essential part of this, Seatsurfing is also available as a Confluence App."]}),"\n",(0,a.jsx)(n.p,{children:"Using the Confluence App requires the Seatsurfing backend to be up and running. It's not a replacement for it, but an additional frontend for the Booking Site."}),"\n",(0,a.jsx)(n.h2,{id:"confluence-cloud",children:"Confluence Cloud"}),"\n",(0,a.jsxs)(n.p,{children:["Get the App from the ",(0,a.jsx)(n.a,{href:"https://marketplace.atlassian.com/apps/1224242/?hosting=cloud",children:"Atlassian Marketplace"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"After having installed the App in your Confluence instance, click 'Configure' within the Seatsurfing App panel under 'Manage apps'. You'll need to specify the following settings here:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Backend URL: The URL of your Seatsurfing instance. Leave empty if you use Cloud hosting."}),"\n",(0,a.jsxs)(n.li,{children:["Instance ID: The unique identifier of your Seatsurfing instance. To find this, log in to Seatsurfing's ",(0,a.jsx)("a",{href:"https://app.seatsurfing.io/admin/",target:"_blank",children:"Admin interface"}),", go to 'Settings' and copy the Instance ID."]}),"\n",(0,a.jsxs)(n.li,{children:["Shared Secret: A self-chosen shared secret which is set both here and in your Seatsurfing's instance Admin interface. To set this, log in to Seatsurfing's ",(0,a.jsx)("a",{href:"https://app.seatsurfing.io/admin/",target:"_blank",children:"Admin interface"})," and go to 'Settings'."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To integrate the Seatsurfing App, insert the Seatsurfing macro into a Confluence page."}),"\n",(0,a.jsx)(n.p,{children:"When using the Seatsurfing App for Confluence, users will be assigned a somewhat cryptic email address like confluence-<username>@<seatsurfing-defaultdomain>. This is due to the fact the the actual email address cannot be consumed by the App. If required, users can merge these accounts with their actual Seatsurfing accounts by clicking the Merge Icon in the upper right corner."}),"\n",(0,a.jsx)(n.h2,{id:"confluence-data-center",children:"Confluence Data Center"}),"\n",(0,a.jsxs)(n.p,{children:["Get the App from the ",(0,a.jsx)(n.a,{href:"https://marketplace.atlassian.com/apps/1224242/?hosting=datacenter",children:"Atlassian Marketplace"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"After having installed the App in your Confluence instance, navigate to your Confluence configuration (gear icon in the upper right) and click 'Seatsurfing Configuration'. You'll need to specify the following settings here:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Backend URL: The URL of your Seatsurfing instance. Leave empty if you use Cloud hosting."}),"\n",(0,a.jsxs)(n.li,{children:["Instance ID: The unique identifier of your Seatsurfing instance. To find this, log in to Seatsurfing's ",(0,a.jsx)("a",{href:"https://app.seatsurfing.io/admin/",target:"_blank",children:"Admin interface"}),", go to 'Settings' and copy the Instance ID."]}),"\n",(0,a.jsxs)(n.li,{children:["Shared Secret: A self-chosen shared secret which is set both here and in your Seatsurfing's instance Admin interface. To set this, log in to Seatsurfing's ",(0,a.jsx)("a",{href:"https://app.seatsurfing.io/admin/",target:"_blank",children:"Admin interface"})," and go to 'Settings'."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To integrate the Seatsurfing App, insert the Seatsurfing macro into a Confluence page."}),"\n",(0,a.jsx)(n.p,{children:"If available, users are identified by their email address. If a user's email address in Confluence is the same as a user's email address in Seatsurfing, it is handled as the same user account. If not, it's possible to manually merge a user account created via Confluence with a \"regular\" Seatsurfing account. Users can do this by clicking the Merge Icon in the upper right corner."})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);