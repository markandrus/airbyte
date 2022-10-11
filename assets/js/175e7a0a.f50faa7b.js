"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7242],{33711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const i={},o="September 2022",l={unversionedId:"release_notes/september_2022",id:"release_notes/september_2022",title:"September 2022",description:"Airbyte v0.40.4 to v0.40.6",source:"@site/../docs/release_notes/september_2022.md",sourceDirName:"release_notes",slug:"/release_notes/september_2022",permalink:"/release_notes/september_2022",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/release_notes/september_2022.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"August 2022",permalink:"/release_notes/august_2022"}},s={},p=[{value:"Airbyte v0.40.4 to v0.40.6",id:"airbyte-v0404-to-v0406",level:2},{value:"New features",id:"new-features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bugs",id:"bugs",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"september-2022"},"September 2022"),(0,n.kt)("h2",{id:"airbyte-v0404-to-v0406"},"Airbyte ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.4"},"v0.40.4")," to ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/airbytehq/airbyte/releases/tag/v0.40.6"},"v0.40.6")),(0,n.kt)("p",null,"This page includes new features and improvements to the Airbyte Cloud and Airbyte Open Source platforms. "),(0,n.kt)("h3",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the low-code connector development kit (early access). This low-code framework is a declarative approach based on YAML with the goal of significantly reducing the time and complexity of building and maintaining connectors. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/11582"},"#11582"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/connector-development/config-based/low-code-cdk-overview/"},"guide")," for using the low-code framework. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17534"},"#17534")))),(0,n.kt)("li",{parentName:"ul"},"Added support for large schema discovery. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17394"},"#17394"))),(0,n.kt)("h3",{id:"improvements"},"Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved ",(0,n.kt)("inlineCode",{parentName:"li"},"airbyte-metrics")," support in the Helm chart. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/16166"},"#16166")),(0,n.kt)("li",{parentName:"ul"},"Improved the visibility button behavior for the password input field. This ensures that passwords are always submitted as sensitive fields. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/16011"},"#16011")),(0,n.kt)("li",{parentName:"ul"},"Improved Sync History page performance by adding the ",(0,n.kt)("strong",{parentName:"li"},"Load more")," button, which you can click to display previous syncs. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/15938"},"#15938")),(0,n.kt)("li",{parentName:"ul"},"Improved the validation error that displays when submitting an incomplete ServiceForm. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/15625"},"#15625")),(0,n.kt)("li",{parentName:"ul"},"Improved the source-defined cursor and primary key by adding a tooltip, which displays the full cursor or primary key when you hover over them. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/16116"},"#16116")),(0,n.kt)("li",{parentName:"ul"},"Improved Airbyte Cloud\u2019s method of updating source and destination definitions by using ",(0,n.kt)("inlineCode",{parentName:"li"},"airbyte-cron")," to schedule updates. This allows us to keep connectors updated as the catalog changes. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/16438"},"#16438")),(0,n.kt)("li",{parentName:"ul"},"Improved the speed that workspace connections are listed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17004"},"#17004"))),(0,n.kt)("h2",{id:"bugs"},"Bugs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the Helm chart templates did not correctly render ",(0,n.kt)("inlineCode",{parentName:"li"},"extraContainers")," values. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/pull/17084"},"#17084"))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);