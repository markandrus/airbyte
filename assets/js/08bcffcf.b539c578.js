"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7031],{99611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=r(83117),n=(r(67294),r(3905));const l={},p="Typeform",i={unversionedId:"integrations/sources/typeform",id:"integrations/sources/typeform",title:"Typeform",description:"Overview",source:"@site/../docs/integrations/sources/typeform.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/typeform",permalink:"/integrations/sources/typeform",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/typeform.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Twilio",permalink:"/integrations/sources/twilio"},next:{title:"US Census API",permalink:"/integrations/sources/us-census"}},o={},m=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:4},{value:"Data type mapping",id:"data-type-mapping",level:4},{value:"Features",id:"features",level:4},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:m};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"typeform"},"Typeform"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Typeform Connector can be used to sync your ",(0,n.kt)("a",{parentName:"p",href:"https://developer.typeform.com/get-started/"},"Typeform")," data"),(0,n.kt)("p",null,"Useful links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.typeform.com/get-started/personal-access-token/"},"Token generation"))),(0,n.kt)("h4",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.typeform.com/create/reference/retrieve-form/"},"Forms")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.typeform.com/responses/reference/retrieve-responses/"},"Responses")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.typeform.com/webhooks/reference/retrieve-webhooks/"},"Webhooks")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.typeform.com/create/reference/retrieve-workspaces/"},"Workspaces")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.typeform.com/create/reference/retrieve-images-collection/"},"Images")," ","(","Full Refresh",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.typeform.com/create/reference/retrieve-themes/"},"Themes")," ","(","Full Refresh",")")),(0,n.kt)("h4",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"integer")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"integer")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h4",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"token - The Typeform API key token."),(0,n.kt)("li",{parentName:"ul"},"start","_","date - Date to start fetching Responses stream data from."),(0,n.kt)("li",{parentName:"ul"},"form_ids (Optional) - List of Form Ids to sync. If not passed - sync all account`s forms.")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"To get the API token for your application follow this ",(0,n.kt)("a",{parentName:"p",href:"https://developer.typeform.com/get-started/personal-access-token/"},"steps")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log in to your account at Typeform."),(0,n.kt)("li",{parentName:"ul"},"In the upper-right corner, in the drop-down menu next to your profile photo, click My Account."),(0,n.kt)("li",{parentName:"ul"},"In the left menu, click Personal tokens."),(0,n.kt)("li",{parentName:"ul"},"Click Generate a new token."),(0,n.kt)("li",{parentName:"ul"},"In the Token name field, type a name for the token to help you identify it."),(0,n.kt)("li",{parentName:"ul"},"Choose needed scopes ","(","API actions this token can perform - or permissions it has",")",". See here for more details on scopes."),(0,n.kt)("li",{parentName:"ul"},"Click Generate token.")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Typeform API page size limit per source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Forms - 200"),(0,n.kt)("li",{parentName:"ul"},"Responses - 1000")),(0,n.kt)("p",null,"Connector performs additional API call to fetch all possible ",(0,n.kt)("inlineCode",{parentName:"p"},"form ids")," on an account using ",(0,n.kt)("a",{parentName:"p",href:"https://developer.typeform.com/create/reference/retrieve-forms/"},"retrieve forms endpoint")),(0,n.kt)("p",null,"API rate limits ","(","2 requests per second",")",": ",(0,n.kt)("a",{parentName:"p",href:"https://developer.typeform.com/get-started/#rate-limits"},"https://developer.typeform.com/get-started/","#","rate-limits")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16125"},"16125")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve ",(0,n.kt)("inlineCode",{parentName:"td"},"metadata.referer")," url parsing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15435"},"15435")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update Forms   stream schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13935"},"13935")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update Responses stream schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12280"},"12280")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Stream Coverage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"8425")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8466"},"8466")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change Check Connection Function Logic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6571"},"6571")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support pulling data from a select set of forms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5799"},"5799")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add missed choices field to responses schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4541"},"4541")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release for Typeform API supporting Forms and Responses streams")))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=m(r),k=n,c=f["".concat(o,".").concat(k)]||f[k]||d[k]||l;return r?a.createElement(c,p(p({ref:t},s),{},{components:r})):a.createElement(c,p({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<l;m++)p[m]=r[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);