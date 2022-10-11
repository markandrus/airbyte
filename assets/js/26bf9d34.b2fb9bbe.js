"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6228],{44379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const o={},c="Zencart",i={unversionedId:"integrations/sources/zencart",id:"integrations/sources/zencart",title:"Zencart",description:"Zencart is an open source online store management system built on PHP, MySQL, and HTML.",source:"@site/../docs/integrations/sources/zencart.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/zencart",permalink:"/integrations/sources/zencart",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/zencart.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"YouTube Analytics",permalink:"/integrations/sources/youtube-analytics"},next:{title:"Zendesk Chat",permalink:"/integrations/sources/zendesk-chat"}},s={},u=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3}],p={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zencart"},"Zencart"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zen-cart.com"},"Zencart")," is an open source online store management system built on PHP, MySQL, and HTML."),(0,a.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,a.kt)("p",null,"Zencart runs on a MySQL database. You can use Airbyte to sync your Zencart instance by connecting to the underlying MySQL database and leveraging the ",(0,a.kt)("a",{parentName:"p",href:"/integrations/sources/mysql"},"MySQL")," connector."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Reach out to your service representative or system admin to find the parameters required to connect to the underlying database")),(0,a.kt)("h3",{id:"output-schema"},"Output schema"),(0,a.kt)("p",null,"The output schema is the same as that of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.zen-cart.com/dev/schema/"},"Zencart Database")," described here."))}l.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||l[y]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);