"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[5950],{4470:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"config","title":"Configuration","description":"While you can configure organisation-specific settings in the administrator web interface, global settings are set using environment variables. Set these environment variables when running the Seatsurfing backend Docker container.","source":"@site/docs/config.md","sourceDirName":".","slug":"/config","permalink":"/docs/config","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Kubernetes","permalink":"/docs/kubernetes"},"next":{"title":"Upgrading","permalink":"/docs/upgrading"}}');var d=s(4848),r=s(8453);const i={},l="Configuration",c={},h=[{value:"Example: Using Docker Compose",id:"example-using-docker-compose",level:2},{value:"List of environment variables",id:"list-of-environment-variables",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend (Admin UI, Booking UI)",id:"frontend-admin-ui-booking-ui",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,d.jsx)(n.p,{children:"While you can configure organisation-specific settings in the administrator web interface, global settings are set using environment variables. Set these environment variables when running the Seatsurfing backend Docker container."}),"\n",(0,d.jsx)(n.h2,{id:"example-using-docker-compose",children:"Example: Using Docker Compose"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"environment:\n  POSTGRES_URL: 'postgres://seatsurfing:DB_PASSWORD@db/seatsurfing?sslmode=disable'\n  INIT_ORG_DOMAIN: 'your-domain.com'\n  ...\n"})}),"\n",(0,d.jsx)(n.h2,{id:"list-of-environment-variables",children:"List of environment variables"}),"\n",(0,d.jsx)(n.h3,{id:"backend",children:"Backend"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Environment Variable"}),(0,d.jsx)(n.th,{children:"\xa0Type"}),(0,d.jsx)(n.th,{children:"\xa0Default"}),(0,d.jsx)(n.th,{children:"\xa0Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DEV"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"Development Mode, set to 1 to enable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PUBLIC_LISTEN_ADDR"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa00.0.0.0:8080"}),(0,d.jsx)(n.td,{children:"TCP/IP listen address and port"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PUBLIC_URL"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsxs)(n.td,{children:["\xa0",(0,d.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})]}),(0,d.jsx)(n.td,{children:"Public URL"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"FRONTEND_URL"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsxs)(n.td,{children:["\xa0",(0,d.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})]}),(0,d.jsx)(n.td,{children:"Frontend URL (usually matches the Public URL)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ADMIN_UI_BACKEND"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"localhost:3000"}),(0,d.jsx)(n.td,{children:"Host serving the Admin UI frontend"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"BOOKING_UI_BACKEND"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"localhost:3001"}),(0,d.jsx)(n.td,{children:"Host serving the Booking UI frontend"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DISABLE_UI_PROXY"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Disable proxy for admin and booking UI, set to 1 to disable the proxy"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"POSTGRES_URL"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsxs)(n.td,{children:["\xa0postgres://postgres",":root"," @ localhost/seatsurfing?sslmode=disable"]}),(0,d.jsx)(n.td,{children:"PostgreSQL Connection"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"JWT _SIGNING_KEY"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"random string"}),(0,d.jsx)(n.td,{children:"JWT Signing Key"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_HOST"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa0127.0.0.1"}),(0,d.jsx)(n.td,{children:"SMTP server address"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_PORT"}),(0,d.jsx)(n.td,{children:"int"}),(0,d.jsx)(n.td,{children:"\xa025"}),(0,d.jsx)(n.td,{children:"SMTP server port"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_START_TLS"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"Use SMTP STARTTLS extension, set to 1 to enable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_INSECURE_SKIP_VERIFY"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"Disable SMTP TLS certificate validation"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_AUTH"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"SMTP authentication, set to 1 to enable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_AUTH_USER"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"SMTP auth username"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_AUTH_PASS"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa0"}),(0,d.jsx)(n.td,{children:"SMTP auth password"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"SMTP_SENDER_ADDRESS"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsxs)(n.td,{children:["\xa0",(0,d.jsx)(n.a,{href:"mailto:no-reply@seatsurfing.local",children:"no-reply@seatsurfing.local"})]}),(0,d.jsx)(n.td,{children:"SMTP sender address"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"MOCK_SENDMAIL"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"SMTP mocking, set to 1 to enable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PRINT_CONFIG"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"Print configuration on startup, set to 1 to enable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"INIT_ORG_NAME"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa0Sample Company"}),(0,d.jsx)(n.td,{children:"Your organization's name"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"INIT_ORG_DOMAIN"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa0seatsurfing.local"}),(0,d.jsx)(n.td,{children:"Your organization's domain"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"INIT_ORG_USER"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa0admin"}),(0,d.jsx)(n.td,{children:"Your organization's admin username"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"INIT_ORG_PASS"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa012345678"}),(0,d.jsx)(n.td,{children:"Your organization's admin password"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"INIT_ORG_LANGUAGE"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"en"}),(0,d.jsx)(n.td,{children:"Your organization's ISO language code"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ORG_SIGNUP_ENABLED"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"Allow signup of new organizations, set to 1 to enable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ORG_SIGNUP_DOMAIN"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:".on.seatsurfing.local"}),(0,d.jsx)(n.td,{children:"Signup domain suffix"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ORG_SIGNUP_ADMIN"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\xa0admin"}),(0,d.jsx)(n.td,{children:"Admin username for new signups"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ORG_SIGNUP_MAX_USERS"}),(0,d.jsx)(n.td,{children:"int"}),(0,d.jsx)(n.td,{children:"\xa050"}),(0,d.jsx)(n.td,{children:"Maximum number of users for new organisations"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ORG_SIGNUP_DELETE"}),(0,d.jsx)(n.td,{children:"bool"}),(0,d.jsx)(n.td,{children:"\xa00"}),(0,d.jsx)(n.td,{children:"Allow admins to delete their own organisation"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LOGIN_PROTECTION_MAX_FAILS"}),(0,d.jsx)(n.td,{children:"int"}),(0,d.jsx)(n.td,{children:"\xa010"}),(0,d.jsx)(n.td,{children:"Number of failed login attempts before user gets banned"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LOGIN_PROTECTION_SLIDING_WINDOW_SECONDS"}),(0,d.jsx)(n.td,{children:"int"}),(0,d.jsx)(n.td,{children:"\xa0600"}),(0,d.jsx)(n.td,{children:"Sliding window size in seconds for checking failed login attempts"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"LOGIN_PROTECTION_BAN_MINUTES"}),(0,d.jsx)(n.td,{children:"int"}),(0,d.jsx)(n.td,{children:"\xa05"}),(0,d.jsx)(n.td,{children:"Ban time in minutes"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"frontend-admin-ui-booking-ui",children:"Frontend (Admin UI, Booking UI)"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Environment Variable"}),(0,d.jsx)(n.th,{children:"\xa0Type"}),(0,d.jsx)(n.th,{children:"\xa0Default"}),(0,d.jsx)(n.th,{children:"\xa0Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"FRONTEND_URL"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"req.url"})}),(0,d.jsx)(n.td,{children:"Frontend URL"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PORT"}),(0,d.jsx)(n.td,{children:"int"}),(0,d.jsx)(n.td,{children:"\xa03000 (Admin UI), 3001 (Booking UI)"}),(0,d.jsx)(n.td,{children:"The server's HTTP port"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(6540);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);