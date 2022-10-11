"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[827],{73389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(83117),n=(r(67294),r(3905));const a={},i="Workers & Jobs",s={unversionedId:"understanding-airbyte/jobs",id:"understanding-airbyte/jobs",title:"Workers & Jobs",description:"In Airbyte, all interactions with connectors are run as jobs performed by a Worker. Each job has a corresponding worker:",source:"@site/../docs/understanding-airbyte/jobs.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/jobs",permalink:"/understanding-airbyte/jobs",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/jobs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Architecture overview",permalink:"/understanding-airbyte/high-level-view"},next:{title:"Technical Stack",permalink:"/understanding-airbyte/tech-stack"}},l={},c=[{value:"Job State Machine",id:"job-state-machine",level:2},{value:"Worker Responsibilities",id:"worker-responsibilities",level:2},{value:"Worker Types",id:"worker-types",level:3},{value:"Worker-Job Architecture",id:"worker-job-architecture",level:3},{value:"Deployment Types",id:"deployment-types",level:2},{value:"Decoupling Worker and Job Processes",id:"decoupling-worker-and-job-processes",level:3},{value:"Container Orchestrator",id:"container-orchestrator",level:4},{value:"Configuring Workers",id:"configuring-workers",level:2},{value:"Worker Parallization",id:"worker-parallization",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"workers--jobs"},"Workers & Jobs"),(0,n.kt)("p",null,"In Airbyte, all interactions with connectors are run as jobs performed by a Worker. Each job has a corresponding worker:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Spec worker: retrieves the specification of a connector ","(","the inputs needed to run this connector",")"),(0,n.kt)("li",{parentName:"ul"},"Check connection worker: verifies that the inputs to a connector are valid and can be used to run a sync"),(0,n.kt)("li",{parentName:"ul"},"Discovery worker: retrieves the schema of the source underlying a connector"),(0,n.kt)("li",{parentName:"ul"},"Sync worker, used to sync data between a source and destination")),(0,n.kt)("p",null,"Thus, there are generally 4 types of workers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Workers here refers to Airbyte workers. Temporal, which Airbyte uses under the hood for scheduling, has its own worker concept. This distinction is important.")),(0,n.kt)("h2",{id:"job-state-machine"},"Job State Machine"),(0,n.kt)("p",null,"Jobs have the following state machine."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Job state machine",src:r(14010).Z,width:"614",height:"620"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/drawings/d/1cp8LRZs6UnhAt3jbQ4h40nstcNB0OBOnNRdMFwOJL8I/edit"},"Image Source")),(0,n.kt)("h2",{id:"worker-responsibilities"},"Worker Responsibilities"),(0,n.kt)("p",null,"The worker has the following responsibilities."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Handle the process lifecycle for job-related processes. This includes starting, monitoring and shutting down processes."),(0,n.kt)("li",{parentName:"ol"},"Facilitate message passing to or from various processes, if required. ","(","more on this ",(0,n.kt)("a",{parentName:"li",href:"/understanding-airbyte/jobs#worker-types"},"below"),")","."),(0,n.kt)("li",{parentName:"ol"},"Handle job-relation operational work such as:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Basic schema validation."),(0,n.kt)("li",{parentName:"ol"},"Returning job output, including any error messages. ","(","See ",(0,n.kt)("a",{parentName:"li",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Specification")," to understand the output of each worker type.",")"),(0,n.kt)("li",{parentName:"ol"},"Telemetry work e.g. tracking the number and size of records within a sync.")))),(0,n.kt)("p",null,"Conceptually, ",(0,n.kt)("strong",{parentName:"p"},"workers contain the complexity of all non-connector-related job operations"),". This lets each connector be as simple as possible."),(0,n.kt)("h3",{id:"worker-types"},"Worker Types"),(0,n.kt)("p",null,"There are 2 flavors of workers: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Synchronous Job Worker")," - Workers that interact with a single connector ","(","e.g. spec, check, discover",")","."),(0,n.kt)("p",{parentName:"li"},"The worker extracts data from the connector and reports it to the scheduler.  It does this by listening to the connector's STDOUT.\nThese jobs are synchronous as they are part of the configuration process and need to be immediately run to provide a good user experience. These are also all lightweight operations.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Asynchronous Job Worker")," - Workers that interact with 2 connectors ","(","e.g. sync, reset",")"),(0,n.kt)("p",{parentName:"li"},"The worker passes data ","(","via record messages",")"," from the source to the destination. It does this by listening on STDOUT of the source and writing to STDIN on the destination.\nThese jobs are asynchronous as they are often long-running resource-intensive processes. They are decoupled from the rest of the platform to simplify development and operation."))),(0,n.kt)("p",null,"For more information on the schema of the messages that are passed, refer to ",(0,n.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Specification"),"."),(0,n.kt)("h3",{id:"worker-job-architecture"},"Worker-Job Architecture"),(0,n.kt)("p",null,"This section will depict the worker-job architecture as discussed above. Only the 2-connector version is shown. The single connector version is the same with one side removed."),(0,n.kt)("p",null,"The source process should automatically exit after passing all of its messages. Similarly, the destination process shutdowns after receiving all records. Each process is given a shutdown grace period. The worker forces shutdown if this is exceeded."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Worker Lifecycle",src:r(60947).Z,width:"573",height:"865"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/drawings/d/1k4v_m2M5o2UUoNlYM7mwtZicRkQgoGLgb3eTOVH8QFo/edit"},"Image Source")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/understanding-airbyte/high-level-view"},"architecture overview")," for more information about workers."),(0,n.kt)("h2",{id:"deployment-types"},"Deployment Types"),(0,n.kt)("p",null,"Up to now, the term 'processes' has been used loosely. This section will describe this in more detail."),(0,n.kt)("p",null,"Airbyte offers two deployment types. The underlying process implementations differ accordingly."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Docker deployment - Each process is a local process backed by a Docker container. As all processes are local, process communication is per standard unix pipes."),(0,n.kt)("li",{parentName:"ol"},"The Kubernetes deployment - Each process is a backed by a Kubernetes pod. As Kubernetes does not make process-locality guarantees, Airbyte has implemented mechanisms to hide the remote process execution.\nSee ",(0,n.kt)("a",{parentName:"li",href:"https://airbyte.com/blog/scaling-data-pipelines-kubernetes"},"this blogpost")," for more details.")),(0,n.kt)("h3",{id:"decoupling-worker-and-job-processes"},"Decoupling Worker and Job Processes"),(0,n.kt)("p",null,"Workers being responsible for all non-connector-related job operations means multiple jobs are operationally dependent on a single worker process."),(0,n.kt)("p",null,"There are two downsides to this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Any issues to the parent worker process affects all job processes launched by the worker."),(0,n.kt)("li",{parentName:"ol"},"Unnecessary complexity of vertically scaling the worker process to deal with IO and processing requirements from multiple jobs.")),(0,n.kt)("p",null,"This gives us a potentially brittle system component that can be operationally tricky to manage. For example, since redeploying Airbyte terminates all worker processes, all running jobs are also terminated."),(0,n.kt)("p",null,"The Container Orchestrator was introduced to solve this."),(0,n.kt)("h4",{id:"container-orchestrator"},"Container Orchestrator"),(0,n.kt)("p",null,"When enabled, workers launch the Container Orchestrator process."),(0,n.kt)("p",null,"The worker process delegates the ",(0,n.kt)("a",{parentName:"p",href:"#worker-responsibilities"},"above listed responsibilities")," to the orchestrator process."),(0,n.kt)("p",null,"This decoupling introduces a new need for workers to track the orchestrator's, and the job's, state. This is done via a shared Cloud Storage store."),(0,n.kt)("p",null,"Brief description of how this works,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Workers constantly poll the Cloud Storage location for job state."),(0,n.kt)("li",{parentName:"ol"},"As an Orchestrator process executes, it writes status marker files to the Cloud Storage location i.e. ",(0,n.kt)("inlineCode",{parentName:"li"},"NOT_STARTED"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"INITIALIZING"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"RUNNING"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"SUCCESS"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"FAILURE"),"."),(0,n.kt)("li",{parentName:"ol"},"If the Orchestrator process runs into issues at any point, it writes a ",(0,n.kt)("inlineCode",{parentName:"li"},"FAILURE"),"."),(0,n.kt)("li",{parentName:"ol"},"If the Orchestrator process succeeds, it writes a job summary as part of the ",(0,n.kt)("inlineCode",{parentName:"li"},"SUCCESS")," marker file.")),(0,n.kt)("p",null,"The Cloud Storage store is treated as the source-of-truth of execution state."),(0,n.kt)("p",null,"The Container Orchestrator is only available for Airbyte Kubernetes today and automatically enabled when running the Airbyte Helm charts/Kustomize deploys."),(0,n.kt)("p",null,"Users running Airbyte Docker should be aware of the above pitfalls."),(0,n.kt)("h2",{id:"configuring-workers"},"Configuring Workers"),(0,n.kt)("p",null,"Details on configuring workers can be found ",(0,n.kt)("a",{parentName:"p",href:"/operator-guides/configuring-airbyte"},"here"),"."),(0,n.kt)("h3",{id:"worker-parallization"},"Worker Parallization"),(0,n.kt)("p",null,"Airbyte exposes the following environment variable to change the maximum number of each type of worker allowed to run in parallel.\nTweaking these values might help you run more jobs in parallel and increase the workload of your Airbyte instance: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MAX_SPEC_WORKERS"),": Maximum number of ",(0,n.kt)("em",{parentName:"li"},"Spec")," workers allowed to run in parallel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MAX_CHECK_WORKERS"),": Maximum number of ",(0,n.kt)("em",{parentName:"li"},"Check connection")," workers allowed to run in parallel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MAX_DISCOVERY_WORKERS"),": Maximum number of ",(0,n.kt)("em",{parentName:"li"},"Discovery")," workers allowed to run in parallel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MAX_SYNC_WORKERS"),": Maximum number of ",(0,n.kt)("em",{parentName:"li"},"Sync")," workers allowed to run in parallel.")),(0,n.kt)("p",null,"The current default value for these environment variables is currently set to ",(0,n.kt)("strong",{parentName:"p"},"5"),"."))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,k=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?o.createElement(k,i(i({ref:t},p),{},{components:r})):o.createElement(k,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14010:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/job-state-machine-f2498020664c5732374fe5834131661c.png"},60947:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/worker-lifecycle-56ac18a0f5b7351162991f3d93f85a3b.png"}}]);