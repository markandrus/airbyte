"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[598],{32793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const o={},s="Step 4: Reading data",i={unversionedId:"connector-development/config-based/tutorial/reading-data",id:"connector-development/config-based/tutorial/reading-data",title:"Step 4: Reading data",description:"Now that we're able to authenticate to the source API, we'll want to select data from the HTTP responses.",source:"@site/../docs/connector-development/config-based/tutorial/4-reading-data.md",sourceDirName:"connector-development/config-based/tutorial",slug:"/connector-development/config-based/tutorial/reading-data",permalink:"/connector-development/config-based/tutorial/reading-data",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/tutorial/4-reading-data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 3: Connecting to the API",permalink:"/connector-development/config-based/tutorial/connecting-to-the-API-source"},next:{title:"Step 5: Incremental Reads",permalink:"/connector-development/config-based/tutorial/incremental-reads"}},c={},l=[{value:"Next steps",id:"next-steps",level:2},{value:"More readings",id:"more-readings",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"step-4-reading-data"},"Step 4: Reading data"),(0,r.kt)("p",null,"Now that we're able to authenticate to the source API, we'll want to select data from the HTTP responses.\nLet's first add the stream to the configured catalog in ",(0,r.kt)("inlineCode",{parentName:"p"},"source-exchange_rates-tutorial/integration_tests/configured_catalog.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "streams": [\n    {\n      "stream": {\n        "name": "rates",\n        "json_schema": {},\n        "supported_sync_modes": [\n          "full_refresh"\n        ]\n      },\n      "sync_mode": "full_refresh",\n      "destination_sync_mode": "overwrite"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"The configured catalog declares the sync modes supported by the stream (full refresh or incremental).\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/beginners-guide-to-catalog"},"catalog guide")," for more information."),(0,r.kt)("p",null,"Let's define the stream schema in ",(0,r.kt)("inlineCode",{parentName:"p"},"source-exchange-rates-tutorial/source_exchange_rates_tutorial/schemas/rates.json")),(0,r.kt)("p",null,"You can download the JSON file describing the output schema with all currencies ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/airbytehq/airbyte/master/airbyte-cdk/python/docs/tutorials/http_api_source_assets/exchange_rates.json"},"here")," for convenience and place it in ",(0,r.kt)("inlineCode",{parentName:"p"},"schemas/"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/airbytehq/airbyte/master/airbyte-cdk/python/docs/tutorials/http_api_source_assets/exchange_rates.json > source_exchange_rates_tutorial/schemas/rates.json\n")),(0,r.kt)("p",null,"We can also delete the boilerplate schema files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm source_exchange_rates_tutorial/schemas/customers.json\nrm source_exchange_rates_tutorial/schemas/employees.json\n")),(0,r.kt)("p",null,"Reading from the source can be done by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py read --config secrets/config.json --catalog integration_tests/configured_catalog.json\n")),(0,r.kt)("p",null,"The logs should show that 1 record was read from the stream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"type": "LOG", "log": {"level": "INFO", "message": "Read 1 records from rates stream"}}\n{"type": "LOG", "log": {"level": "INFO", "message": "Finished syncing rates"}}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," flag can be set to print out debug information, including the outgoing request and its associated response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py read --config secrets/config.json --catalog integration_tests/configured_catalog.json --debug\n")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"We now have a working implementation of a connector reading the latest exchange rates for a given currency.\nWe're however limited to only reading the latest exchange rate value.\nNext, we'll ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/incremental-reads"},"enhance the connector to read data for a given date, which will enable us to backfill the stream with historical data"),"."),(0,r.kt)("h2",{id:"more-readings"},"More readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector"},"Record selector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.io/understanding-airbyte/beginners-guide-to-catalog"},"Catalog guide"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);