"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9656],{18068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const l={},i="Orb",o={unversionedId:"integrations/sources/orb",id:"integrations/sources/orb",title:"Orb",description:"Overview",source:"@site/../docs/integrations/sources/orb.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/orb",permalink:"/integrations/sources/orb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/orb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Oracle DB",permalink:"/integrations/sources/oracle"},next:{title:"Orbit",permalink:"/integrations/sources/orbit"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Note on Incremental Syncs",id:"note-on-incremental-syncs",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"orb"},"Orb"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Orb source supports both Full Refresh and Incremental syncs. For incremental syncs, this source\nwill only read and output new records based on their ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at")," timestamp."),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"This Source is capable of syncing the following core resources, each of which has a separate Stream. Note that all of the streams are incremental:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.withorb.com/docs/orb-docs/api-reference/operations/list-subscriptions"},"Subscriptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.withorb.com/docs/orb-docs/api-reference/operations/list-plans"},"Plans")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.withorb.com/docs/orb-docs/api-reference/operations/list-customers"},"Customers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.withorb.com/docs/orb-docs/api-reference/operations/get-a-customer-credit-ledger"},"Credits Ledger Entries"))),(0,a.kt)("p",null,"As a caveat, the Credits Ledger Entries must read all Customers for an incremental sync, but will only incrementally return new ledger entries for each customers."),(0,a.kt)("h3",{id:"note-on-incremental-syncs"},"Note on Incremental Syncs"),(0,a.kt)("p",null,"The Orb API does not allow querying objects based on an ",(0,a.kt)("inlineCode",{parentName:"p"},"updated_at")," time. Therefore, this connector uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at")," field to query for new data since the last sync."),(0,a.kt)("p",null,"In order to capture data that has been updated after creation, please run a periodic Full Refresh."),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental - Dedupe Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,a.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"The Orb connector should not run into Orb API limitations under normal usage. Please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Orb Account"),(0,a.kt)("li",{parentName:"ul"},"Orb API Key")),(0,a.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,a.kt)("p",null,"Please reach out to the Orb team at ",(0,a.kt)("a",{parentName:"p",href:"mailto:team@withorb.com"},"team@withorb.com")," to request\nan Orb Account and API Key."),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.1.4"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-10-07"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17761"},"17761")),(0,a.kt)("td",{parentName:"tr",align:null},"Fix bug with enriching ledger entries")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.1.3"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-08-26"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16017"},"16017")),(0,a.kt)("td",{parentName:"tr",align:null},"Add credit block id to ledger entries")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.1.2"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-04-20"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11528"},"11528")),(0,a.kt)("td",{parentName:"tr",align:null},"Add cost basis to ledger entries, update expiration date, sync only committed entries")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.1.1"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-03-03"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10839"},"10839")),(0,a.kt)("td",{parentName:"tr",align:null},"Support ledger entries with numeric properties + schema fixes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-02-01"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"New Source: Orb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},":---"),(0,a.kt)("td",{parentName:"tr",align:null},":---"),(0,a.kt)("td",{parentName:"tr",align:null},":---"),(0,a.kt)("td",{parentName:"tr",align:null},":---")))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);