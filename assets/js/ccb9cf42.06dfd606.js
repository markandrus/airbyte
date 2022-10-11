"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9574],{91706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={},l="Firebolt",o={unversionedId:"integrations/destinations/firebolt",id:"integrations/destinations/firebolt",title:"Firebolt",description:"This page guides you through the process of setting up the Firebolt destination connector.",source:"@site/../docs/integrations/destinations/firebolt.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/firebolt",permalink:"/integrations/destinations/firebolt",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/firebolt.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Elasticsearch",permalink:"/integrations/destinations/elasticsearch"},next:{title:"Google Cloud Storage (GCS)",permalink:"/integrations/destinations/gcs"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Connector-specific features &amp; highlights",id:"connector-specific-features--highlights",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Changelog",id:"changelog",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"firebolt"},"Firebolt"),(0,r.kt)("p",null,"This page guides you through the process of setting up the Firebolt destination connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This Firebolt destination connector has two replication strategies:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SQL: Replicates data via SQL INSERT queries. This leverages ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/firebolt-sdk/"},"Firebolt SDK")," to execute queries directly on Firebolt ",(0,r.kt)("a",{parentName:"p",href:"https://docs.firebolt.io/working-with-engines/understanding-engine-fundamentals.html"},"Engines"),". ",(0,r.kt)("strong",{parentName:"p"},"Not recommended for production workloads as this does not scale well"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"S3: Replicates data by first uploading data to an S3 bucket, creating an External Table and writing into a final Fact Table. This is the recommended loading ",(0,r.kt)("a",{parentName:"p",href:"https://docs.firebolt.io/loading-data/loading-data.html"},"approach"),". Requires an S3 bucket and credentials in addition to Firebolt credentials."))),(0,r.kt)("p",null,"For SQL strategy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Engine (optional)"))),(0,r.kt)("p",null,"Airbyte automatically picks an approach depending on the given configuration - if S3 configuration is present, Airbyte will use the S3 strategy."),(0,r.kt)("p",null,"For S3 strategy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"this")," to create an S3 bucket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"S3 Bucket Region"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create the S3 bucket on the same region as the Firebolt database."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Key Id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"this")," on how to generate an access key."),(0,r.kt)("li",{parentName:"ul"},"We recommend creating an Airbyte-specific user. This user will require ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"read, write and delete permissions")," to objects in the staging bucket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Corresponding key to the above key id."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host (optional)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Firebolt backend URL. Can be left blank for most usecases."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Engine (optional)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If connecting to a non-default engine you should specify its name or url here.")))),(0,r.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Firebolt account following the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.firebolt.io/managing-your-account/creating-an-account.html"},"guide")),(0,r.kt)("li",{parentName:"ol"},"Follow the getting started ",(0,r.kt)("a",{parentName:"li",href:"https://docs.firebolt.io/getting-started.html"},"tutorial")," to setup a database."),(0,r.kt)("li",{parentName:"ol"},"Create a General Purpose (read-write) engine as described in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.firebolt.io/working-with-engines/working-with-engines-using-the-firebolt-manager.html"},"here")),(0,r.kt)("li",{parentName:"ol"},"(Optional) ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"Create")," a staging S3 bucket ","(","for the S3 strategy",")","."),(0,r.kt)("li",{parentName:"ol"},"(Optional) ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-iam-policies.html"},"Create")," an IAM with programmatic access to read, write and delete objects from an S3 bucket.")),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Firebolt destination connector supports the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-mode"},"sync modes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full Refresh"),(0,r.kt)("li",{parentName:"ul"},"Incremental - Append Sync")),(0,r.kt)("h2",{id:"connector-specific-features--highlights"},"Connector-specific features & highlights"),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each stream will be output into its own raw ",(0,r.kt)("a",{parentName:"p",href:"https://docs.firebolt.io/working-with-tables.html#fact-and-dimension-tables"},"Fact table")," in Firebolt. Each table will contain 3 columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in Firebolt is ",(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The column type in Firebolt is ",(0,r.kt)("inlineCode",{parentName:"li"},"TIMESTAMP"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing the event data. The column type in Firebolt is ",(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR")," but can be be parsed with JSON functions.")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13118"},"13118")),(0,r.kt)("td",{parentName:"tr",align:"left"},"New Destination: Firebolt")))))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);