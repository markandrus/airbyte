"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9930],{70036:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(83117),a=(r(67294),r(3905));const i={},o="Error handling",l={unversionedId:"connector-development/config-based/understanding-the-yaml-file/error-handling",id:"connector-development/config-based/understanding-the-yaml-file/error-handling",title:"Error handling",description:"By default, only server errors (HTTP 5XX) and too many requests (HTTP 429) will be retried up to 5 times with exponential backoff.",source:"@site/../docs/connector-development/config-based/understanding-the-yaml-file/error-handling.md",sourceDirName:"connector-development/config-based/understanding-the-yaml-file",slug:"/connector-development/config-based/understanding-the-yaml-file/error-handling",permalink:"/connector-development/config-based/understanding-the-yaml-file/error-handling",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/understanding-the-yaml-file/error-handling.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Authentication",permalink:"/connector-development/config-based/understanding-the-yaml-file/authentication"},next:{title:"Pagination",permalink:"/connector-development/config-based/understanding-the-yaml-file/pagination"}},s={},d=[{value:"Default error handler",id:"default-error-handler",level:2},{value:"Defining errors",id:"defining-errors",level:2},{value:"From status code",id:"from-status-code",level:3},{value:"From error message",id:"from-error-message",level:3},{value:"Backoff Strategies",id:"backoff-strategies",level:2},{value:"Exponential backoff",id:"exponential-backoff",level:3},{value:"Constant Backoff",id:"constant-backoff",level:3},{value:"Wait time defined in header",id:"wait-time-defined-in-header",level:3},{value:"Wait until time defined in header",id:"wait-until-time-defined-in-header",level:3},{value:"Advanced error handling",id:"advanced-error-handling",level:2},{value:"More readings",id:"more-readings",level:2}],p={toc:d};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"By default, only server errors (HTTP 5XX) and too many requests (HTTP 429) will be retried up to 5 times with exponential backoff.\nOther HTTP errors will result in a failed read."),(0,a.kt)("p",null,"Other behaviors can be configured through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Requester"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"error_handler")," field."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  ErrorHandler:\n    type: object\n    description: "Error handler"\n    anyOf:\n      - "$ref": "#/definitions/DefaultErrorHandler"\n      - "$ref": "#/definitions/CompositeErrorHandler"\n')),(0,a.kt)("h2",{id:"default-error-handler"},"Default error handler"),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  DefaultErrorHandler:\n    type: object\n    required:\n      - max_retries\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      response_filters:\n        type: array\n        items:\n          "$ref": "#/definitions/HttpResponseFilter"\n      max_retries:\n        type: integer\n        default: 5\n      backoff_strategies:\n        type: array\n        items:\n          "$ref": "#/definitions/BackoffStrategy"\n        default: [ ]\n')),(0,a.kt)("h2",{id:"defining-errors"},"Defining errors"),(0,a.kt)("h3",{id:"from-status-code"},"From status code"),(0,a.kt)("p",null,"Response filters can be used to define how to handle requests resulting in responses with a specific HTTP status code.\nFor instance, this example will configure the handler to also retry responses with 404 error:"),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  HttpResponseFilter:\n    type: object\n    required:\n      - action\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      action:\n        "$ref": "#/definitions/ResponseAction"\n      http_codes:\n        type: array\n        items:\n          type: integer\n        default: [ ]\n      error_message_contains:\n        type: string\n      predicate:\n        type: string\n  ResponseAction:\n    type: string\n    enum:\n      - SUCCESS\n      - FAIL\n      - IGNORE\n      - RETRY\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"requester:\n  <...>\n  error_handler:\n    response_filters:\n        - http_codes: [ 404 ]\n          action: RETRY\n")),(0,a.kt)("p",null,"Response filters can be used to specify HTTP errors to ignore.\nFor instance, this example will configure the handler to ignore responses with 404 error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"requester:\n  <...>\n  error_handler:\n    response_filters:\n        - http_codes: [ 404 ]\n          action: IGNORE\n")),(0,a.kt)("h3",{id:"from-error-message"},"From error message"),(0,a.kt)("p",null,'Errors can also be defined by parsing the error message.\nFor instance, this error handler will ignore responses if the error message contains the string "ignorethisresponse"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  <...>\n  error_handler:\n    response_filters:\n        - error_message_contain: "ignorethisresponse"\n          action: IGNORE\n')),(0,a.kt)("p",null,"This can also be done through a more generic string interpolation strategy with the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"response: the decoded response")),(0,a.kt)("p",null,'This example ignores errors where the response contains a "code" field:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"requester:\n  <...>\n  error_handler:\n    response_filters:\n        - predicate: \"{{ 'code' in response }}\"\n          action: IGNORE\n")),(0,a.kt)("p",null,"The error handler can have multiple response filters.\nThe following example is configured to ignore 404 errors, and retry 429 errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"requester:\n  <...>\n  error_handler:\n    response_filters:\n        - http_codes: [ 404 ]\n          action: IGNORE\n                    - http_codes: [ 429 ]\n                    action: RETRY\n")),(0,a.kt)("h2",{id:"backoff-strategies"},"Backoff Strategies"),(0,a.kt)("p",null,"The error handler supports a few backoff strategies, which are described in the following sections."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  BackoffStrategy:\n    type: object\n    anyOf:\n      - "$ref": "#/definitions/ExponentialBackoff"\n      - "$ref": "#/definitions/ConstantBackoff"\n      - "$ref": "#/definitions/WaitTimeFromHeader"\n      - "$ref": "#/definitions/WaitUntilTimeFromHeader"\n')),(0,a.kt)("h3",{id:"exponential-backoff"},"Exponential backoff"),(0,a.kt)("p",null,"This is the default backoff strategy. The requester will backoff with an exponential backoff interval"),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  ExponentialBackoff:\n    type: object\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      factor:\n        type: integer\n        default: 5\n')),(0,a.kt)("h3",{id:"constant-backoff"},"Constant Backoff"),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConstantBackoffStrategy"),", the requester will backoff with a constant interval."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  ConstantBackoff:\n    type: object\n    additionalProperties: true\n    required:\n      - backoff_time_in_seconds\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      backoff_time_in_seconds:\n        type: number\n')),(0,a.kt)("h3",{id:"wait-time-defined-in-header"},"Wait time defined in header"),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"WaitTimeFromHeaderBackoffStrategy"),', the requester will backoff by an interval specified in the response header.\nIn this example, the requester will backoff by the response\'s "wait_time" header value:'),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  WaitTimeFromHeader:\n    type: object\n    additionalProperties: true\n    required:\n      - header\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      header:\n        type: string\n      regex:\n        type: string\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  <...>\n  error_handler:\n    <...>\n    backoff_strategies:\n        - type: "WaitTimeFromHeaderBackoffStrategy"\n          header: "wait_time"\n')),(0,a.kt)("p",null,"Optionally, a regular expression can be configured to extract the wait time from the header value."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  <...>\n  error_handler:\n    <...>\n    backoff_strategies:\n        - type: "WaitTimeFromHeaderBackoffStrategy"\n          header: "wait_time"\n          regex: "[-+]?\\d+"\n')),(0,a.kt)("h3",{id:"wait-until-time-defined-in-header"},"Wait until time defined in header"),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"WaitUntilTimeFromHeaderBackoffStrategy"),', the requester will backoff until the time specified in the response header.\nIn this example, the requester will wait until the time specified in the "wait_until" header value:'),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  WaitUntilTimeFromHeader:\n    type: object\n    additionalProperties: true\n    required:\n      - header\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      header:\n        type: string\n      regex:\n        type: string\n      min_wait:\n        type: number\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  <...>\n  error_handler:\n    <...>\n    backoff_strategies:\n        - type: "WaitUntilTimeFromHeaderBackoffStrategy"\n          header: "wait_until"\n          regex: "[-+]?\\d+"\n          min_wait: 5\n')),(0,a.kt)("p",null,"The strategy accepts an optional regular expression to extract the time from the header value, and a minimum time to wait."),(0,a.kt)("h2",{id:"advanced-error-handling"},"Advanced error handling"),(0,a.kt)("p",null,"The error handler can have multiple backoff strategies, allowing it to fallback if a strategy cannot be evaluated.\nFor instance, the following defines an error handler that will read the backoff time from a header, and default to a constant backoff if the wait time could not be extracted from the response:"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  <...>\n  error_handler:\n    <...>\n    backoff_strategies:\n        - type: "WaitTimeFromHeaderBackoffStrategy"\n          header: "wait_time"\n            - type: "ConstantBackoffStrategy"\n              backoff_time_in_seconds: 5\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"requester")," can be configured to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"CompositeErrorHandler"),", which sequentially iterates over a list of error handlers, enabling different retry mechanisms for different types of errors."),(0,a.kt)("p",null,'In this example, a constant backoff of 5 seconds, will be applied if the response contains a "code" field, and an exponential backoff will be applied if the error code is 403:'),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  CompositeErrorHandler:\n    type: object\n    required:\n      - error_handlers\n    additionalProperties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      error_handlers:\n        type: array\n        items:\n          "$ref": "#/definitions/ErrorHandler"\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'requester:\n  <...>\n  error_handler:\n    type: "CompositeErrorHandler"\n    error_handlers:\n      - response_filters:\n          - predicate: "{{ \'code\' in response }}"\n            action: RETRY\n        backoff_strategies:\n          - type: "ConstantBackoffStrategy"\n            backoff_time_in_seconds: 5\n      - response_filters:\n          - http_codes: [ 403 ]\n            action: RETRY\n        backoff_strategies:\n          - type: "ExponentialBackoffStrategy"\n')),(0,a.kt)("h2",{id:"more-readings"},"More readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/connector-development/config-based/understanding-the-yaml-file/requester"},"Requester"))))}c.isMDXComponent=!0},3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=d(r),u=a,m=f["".concat(s,".").concat(u)]||f[u]||c[u]||i;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);