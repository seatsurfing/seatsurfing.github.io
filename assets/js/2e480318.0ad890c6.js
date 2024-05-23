"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[2996],{7051:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>x,toc:()=>c});var n=l(4848),s=l(8453);const i={},d="Rest API",x={id:"rest-api",title:"Rest API",description:"Seatsurfing provides and uses a couple of REST APIs. The REST APIs are used by the mobile and web app as well as the administrator web interface.",source:"@site/docs/rest-api.md",sourceDirName:".",slug:"/rest-api",permalink:"/docs/rest-api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Confluence",permalink:"/docs/confluence"},next:{title:"Support",permalink:"/docs/support"}},r={},c=[{value:"Authorization checks",id:"authorization-checks",level:2},{value:"Status Codes",id:"status-codes",level:2},{value:"Roles",id:"roles",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Bookings",id:"bookings",level:3},{value:"Locations",id:"locations",level:3},{value:"Spaces",id:"spaces",level:3},{value:"Organisations",id:"organisations",level:3},{value:"Search",id:"search",level:3},{value:"Settings",id:"settings",level:3},{value:"Signup",id:"signup",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Users",id:"users",level:3},{value:"Auth Providers",id:"auth-providers",level:3}];function h(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"rest-api",children:"Rest API"}),"\n",(0,n.jsx)(e.p,{children:"Seatsurfing provides and uses a couple of REST APIs. The REST APIs are used by the mobile and web app as well as the administrator web interface."}),"\n",(0,n.jsx)(e.h2,{id:"authorization-checks",children:"Authorization checks"}),"\n",(0,n.jsx)(e.p,{children:"Each API function is protected by authorization checks:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"First check: Role of the user (anonymous, user, org admin, super admin)"}),"\n",(0,n.jsx)(e.li,{children:"Second check: Organisation membership"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"status-codes",children:"Status Codes"}),"\n",(0,n.jsx)(e.p,{children:"Seatsurfing's REST API uses the well known HTTP status codes to inform the caller about the result and eventual errors:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["201 Created: Object created (includes HTTP response header ",(0,n.jsx)(e.code,{children:"X-Object-ID"}),")"]}),"\n",(0,n.jsx)(e.li,{children:"204 No Content: Object updated or no response content"}),"\n",(0,n.jsx)(e.li,{children:"400 Bad Request: Malformed request or incomplete JSON"}),"\n",(0,n.jsxs)(e.li,{children:["401 Unauthorized: JWT in HTTP request header ",(0,n.jsx)(e.code,{children:"Authorization"})," missing, expired or invalid"]}),"\n",(0,n.jsx)(e.li,{children:"403 Forbidden: Authorized, by user has no access to requested resource"}),"\n",(0,n.jsx)(e.li,{children:"404 Not found: Object not found"}),"\n",(0,n.jsx)(e.li,{children:"409 Conflict: Conflicting request"}),"\n",(0,n.jsx)(e.li,{children:"500 Internal Server Error"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"roles",children:"Roles"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Anonymous: Every user allowed, no authorization required"}),"\n",(0,n.jsx)(e.li,{children:"User: Authorized user who is a member of an organisation"}),"\n",(0,n.jsx)(e.li,{children:"Org Admin: An organisation's administrator"}),"\n",(0,n.jsx)(e.li,{children:"Super Admin: Global administrator with access to all organisations and all functions"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,n.jsx)(e.h3,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Password Login"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/auth/login"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Preflight Login to check for available login methods"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/auth/preflight"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Perform OAuth Login"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/auth/","{id}","/login/","{type}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"OAuth Callback (server to server)"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/auth/","{id}","/callback"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Retrieve JWT from frontend / app after OAuth Login"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/auth/verify/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Check if instance hosts one organization only"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/auth/singleorg"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"bookings",children:"Bookings"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get one own booking"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/booking/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update one own booking"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/booking/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Delete one own booking"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/booking/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DELETE"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Create new own booking"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/booking/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Create new booking for others"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/booking/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get user's own upcoming bookings"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/booking/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get filtered org bookings"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/booking/filter/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"locations",children:"Locations"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get one location"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update one location"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Delete one location"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DELETE"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get all organization's location"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/location/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Create a new location"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/location/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get location map"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{id}","/map"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Set/update location map"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{id}","/map"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"spaces",children:"Spaces"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get one space"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{locationId}","/space/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update one space"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{locationId}","/space/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Delete one space"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{locationId}","/space/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DELETE"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get all spaces in a location"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{locationId}","/space/"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Create a new space in a location"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{locationId}","/space/"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get spaces with availability information for a specific time period"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/location/","{locationId}","/space/availability"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"organisations",children:"Organisations"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get one organization"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update one organization"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Delete one organization"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DELETE"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get all organizations"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/organization/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Create a new organization"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/organization/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get organization for domain"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/domain/","{domain}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get all domains for an organization"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/","{id}","/domain/"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Add a new domain to an organization"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/","{id}","/domain/","{domain}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Remove a domain from an organization"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/","{id}","/domain/","{domain}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DELETE"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Verify DNS-TXT-Record for a domain"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/organization/","{id}","/domain/","{domain}","/verify"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"search",children:"Search"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get search results for keyword"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/search/","{keyword}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})})]}),"\n",(0,n.jsx)(e.h3,{id:"settings",children:"Settings"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get all settings"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/setting/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update all settings"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/setting/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get one setting"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/setting/","{name}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update one setting"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/setting/","{name}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"signup",children:"Signup"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Signup and init double-opt-in"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/signup/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Complete double-opt-in process"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/signup/confirm/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"statistics",children:"Statistics"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get organization's stats"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/stats/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})})]}),"\n",(0,n.jsx)(e.h3,{id:"users",children:"Users"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get one user"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/user/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update one user"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/user/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Delete one user"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/user/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DELETE"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Set a user's password"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/user/","{id}","/password"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get all users of an organization"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/user/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Create a new user in an organization"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/user/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get user's own details"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/user/me"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"auth-providers",children:"Auth Providers"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Function"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"\xa0Endpoint"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Method"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"Anonymous"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0User"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Org Admin"}),(0,n.jsx)(e.th,{style:{textAlign:"center"},children:"\xa0Super Admin"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get one auth provider"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/auth-provider/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Update one auth provider"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/auth-provider/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"PUT"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Delete one auth provider"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/auth-provider/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"DELETE"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get all auth providers of an organization"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/auth-provider/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Create a new auth provider in an organization"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"/auth-provider/"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"POST"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Get public auth provider information for an organization"}),(0,n.jsxs)(e.td,{style:{textAlign:"left"},children:["/auth-provider/org/","{id}"]}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"GET"}),(0,n.jsx)(e.td,{style:{textAlign:"center"},children:"X"}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}}),(0,n.jsx)(e.td,{style:{textAlign:"center"}})]})]})]})]})}function j(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},8453:(t,e,l)=>{l.d(e,{R:()=>d,x:()=>x});var n=l(6540);const s={},i=n.createContext(s);function d(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function x(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:d(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);