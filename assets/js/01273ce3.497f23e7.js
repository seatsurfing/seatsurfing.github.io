"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[2113],{4018:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"admin-ui","title":"Administration UI","description":"You can access the adminisatration web interface using a modern web browser by visiting your Seatsurfing\'s instance backend:","source":"@site/docs/admin-ui.md","sourceDirName":".","slug":"/admin-ui","permalink":"/docs/admin-ui","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Upgrading","permalink":"/docs/upgrading"},"next":{"title":"Microsoft Azure","permalink":"/docs/auth-provider/azure"}}');var a=s(4848),t=s(8453);const r={},o="Administration UI",d={},c=[{value:"Dashboard",id:"dashboard",level:2},{value:"Areas",id:"areas",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Users",id:"users",level:2},{value:"Bookings",id:"bookings",level:2},{value:"Settings",id:"settings",level:2},{value:"Common settings",id:"common-settings",level:3},{value:"Auth Providers",id:"auth-providers",level:3},{value:"Danger zone",id:"danger-zone",level:3},{value:"Search",id:"search",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"administration-ui",children:"Administration UI"})}),"\n",(0,a.jsx)(n.p,{children:"You can access the adminisatration web interface using a modern web browser by visiting your Seatsurfing's instance backend:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://localhost:8080/admin/",children:"http://localhost:8080/admin/"})}),"\n",(0,a.jsx)(n.p,{children:"To log in to the administrator interface, your user must be equipped with org admin permissions."}),"\n",(0,a.jsx)(n.p,{children:"After logging in, you'll see a web interface like this:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Admin UI Screenshot",src:s(180).A+"",width:"750",height:"464"})}),"\n",(0,a.jsx)(n.p,{children:"At the left, you can navigate to the various areas of the administrator interface."}),"\n",(0,a.jsx)(n.p,{children:"At the head, you can quickly search for objects (such as users, locations, spaces). Right beside the search bar, you can log out."}),"\n",(0,a.jsx)(n.p,{children:"The main area views the functionality you've selected. Right after logging in, the main area shows current statistics in a dashboard."}),"\n",(0,a.jsx)(n.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,a.jsx)(n.p,{children:"The dashboard shows current statistics for your Seatsurfing organisation. The statistics and numbers are intended to support you in review usage and user acceptance. Furthermore, Seatsurfing calculates space utilization in real time. This way you can always keep an eye on supply and demand."}),"\n",(0,a.jsx)(n.p,{children:"The top of the dashboard shows information regarding the number of users, locations and spaces as well as the total mumber of bookings."}),"\n",(0,a.jsx)(n.p,{children:"Below that, you can see current booking numbers of today, yesterday, the current week and the previous week."}),"\n",(0,a.jsx)(n.p,{children:"The bar charts visualize the utilization of your spaces."}),"\n",(0,a.jsx)(n.h2,{id:"areas",children:"Areas"}),"\n",(0,a.jsx)(n.p,{children:"An area in Seatsurfing is anything that has a ground plan. This can be a single floor on a building. In this area you can manage spaces. A space is something a user can book \u2013 depending on your concept, it can be a seat, a desk or an entire room."}),"\n",(0,a.jsx)(n.p,{children:'In the "Areas" section you can manage your areas and the spaces within them.'}),"\n",(0,a.jsx)(n.p,{children:"In order to manage spaces in an area, you have to upload a floor plan in JPEG, PNG or GIF format. Make sure your floor plan has an appropriate format and resolution. If the resolution is too high, your employees need to scroll a lot and may lose the plot."}),"\n",(0,a.jsx)(n.p,{children:"You can place spaces via drag & drop. Keep the left mouse button pressed to move a space around. To change a space's size, click the lower right corner of a space. To name a space, click on the space's label and enter the new name.^"}),"\n",(0,a.jsx)(n.p,{children:"Don't forget to save your changes afterwards."}),"\n",(0,a.jsx)(n.h3,{id:"attributes",children:"Attributes"}),"\n",(0,a.jsx)(n.p,{children:"Attributes are pieces of information you can set and attach to locations (and prepared to be attached to spaces in later versions). Attributes can be shown per location by your users in the Booking UI. Furthermore, users of the Booking UI can search for locations which match attributes they need."}),"\n",(0,a.jsx)(n.p,{children:"For example, as an administrator, you can specify whether a location is accessible with wheelchairs or what kind of media system is installed. Your users can view a location's attributes and filter the list of locations according to their needs."}),"\n",(0,a.jsx)(n.p,{children:'To specify the available attributes, navigate to "Areas" and select "Attributes". An attribute can be of type number (integer), true / false (boolean), or text (string).'}),"\n",(0,a.jsx)(n.p,{children:'After defining one or more attributers, these attributes can be selected and set per location in the "Attributes" section.'}),"\n",(0,a.jsx)(n.h2,{id:"users",children:"Users"}),"\n",(0,a.jsx)(n.p,{children:'In the "Users" section you can manage your employees which have access to your Seatsurfing organisation.'}),"\n",(0,a.jsx)(n.p,{children:"Depending on your configuration in the Settings (see below), your employees can log in to Seatsurfing when successfully authenticated against your corporation's user directory service. This way, there's no need to administer all Seatsurfing users manually. When logging in for the first time, a Seatsurfing user account is created automatically."}),"\n",(0,a.jsx)(n.p,{children:'To create or modify users manually, click the "Add" button or click a user from the list. You can set the username (using the user\'s email address) and his password. Setting a password is only necessary if your user is not authenticating using a linked authentication provider.'}),"\n",(0,a.jsx)(n.p,{children:"Additionally, you can flag certain users as organisation administrators. Administrators have full access to Seatsurfing's administrator web-interface. Thus, administrators should have long, secure and complex passwords."}),"\n",(0,a.jsx)(n.h2,{id:"bookings",children:"Bookings"}),"\n",(0,a.jsx)(n.p,{children:'In the "Bookings" section you can view the bookings of your emloyees in a certain period.'}),"\n",(0,a.jsx)(n.p,{children:"You can choose the period to be shown in the area at the top."}),"\n",(0,a.jsx)(n.p,{children:"Adding or changing bookings through administrators is not possible."}),"\n",(0,a.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,a.jsx)(n.p,{children:'In the "Settings" section you can configure settings which apply to your entire Seatsurfing organisation.'}),"\n",(0,a.jsx)(n.h3,{id:"common-settings",children:"Common settings"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Allow login of all authenticatable users:"})," When enabled, users can authenticate using an associated auth provider (see below) without having to be managed in Seatsurfing's internal user directory beforehand. A user account in Seatsurfing's database will be created upon first successful authentication."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Max. bookings per user:"})," Limits the number of upcoming bookings per user."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Max. concurrent bookings per user:"})," Determines how many concurrent bookings each user may have."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Max. days in advance:"})," Specifies how many days in advance a booking can be placed."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Don't restrict admins (bookings per user, duration, in advance):"})," If this flag is set all admins (FloorPlan/Org/Super) are allowed to book limitless, except the max-bookings-per-area limitation."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Allow bookings on a daily basis only"}),": When enabled, users can book spaces for entire days only and do not need to enter enter and leave times."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Max. booking duration:"})," Limits the duration of a single bookings."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Show bookers' names"}),": Reveal the names of other bookers when booking a space. You should mind the privacy."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Confluence Shared Secret:"})," A shared secret which is required for signing messages when using Seatsurfing's Confluence App."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Domains:"})," A list of domains which can be used your user's email addresses. If not a global administrator, adding a domain requires an ownership verification. This requires access to your domain's DNS server as a TXT record needs to be added."]}),"\n",(0,a.jsx)(n.h3,{id:"auth-providers",children:"Auth Providers"}),"\n",(0,a.jsx)(n.p,{children:"Auth providers are services taking care of authenticating your users using standardised, secure protocols. Seatsurfing currently supports the OAuth 2 protocol."}),"\n",(0,a.jsx)(n.p,{children:"By adding an auth provider, you can validate your Seatsurfing logins using your company's internal user directory. The passwords (or other identification criteria) entered by your users are not transferred to Seatsurfing when using an auth provider."}),"\n",(0,a.jsx)(n.p,{children:"To add an auth provider, click the Add button at the upper right. Depending on the type of your auth provider, various different technical information are needed. Please ask your auth provider's technical administrator for these information. You can also use the templates prepared at the bottom of the dialog."}),"\n",(0,a.jsx)(n.p,{children:"Auth providers can be used in addition to password authentication. When logging in, Seatsurfing checks if the requested user already exists in Seatsurfing's internal user directory. If he does exist and password authentication is enabled, the user will be prompted for her password. If it does not exists or has no password set, she can log in using one of the configured auth providers."}),"\n",(0,a.jsx)(n.p,{children:"You can use the following placeholders in your specified URLs:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"{logoutRedirectUri}"})," - the Logout URL your users will be redirected to after logging out"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"danger-zone",children:"Danger zone"}),"\n",(0,a.jsxs)(n.p,{children:["Use this section to delete your Seatsurfing organisation. The deletion is performed irrevocably. All data associated with your Seatsurfing organisation will be deleted and can not be restored. You should ",(0,a.jsx)(n.em,{children:"only"})," use this functionality if you're absolutely sure about what you're doing."]}),"\n",(0,a.jsx)(n.h2,{id:"search",children:"Search"}),"\n",(0,a.jsx)(n.p,{children:"The search box at the top of the administator web-interface can be used by entering a keyword and pressing the enter key."}),"\n",(0,a.jsx)(n.p,{children:"Search includes your users' email addresses (usernames) as well as the names of areas and spaces."})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},180:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/admin-ui-2e2068c1e528de15104837fd25f937bc.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(6540);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);