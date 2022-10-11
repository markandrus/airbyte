"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8020],{49712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(83117),a=(t(67294),t(3905));const o={},l="Record selector",i={unversionedId:"connector-development/config-based/understanding-the-yaml-file/record-selector",id:"connector-development/config-based/understanding-the-yaml-file/record-selector",title:"Record selector",description:"The record selector is responsible for translating an HTTP response into a list of Airbyte records by extracting records from the response and optionally filtering and shaping records based on a heuristic.",source:"@site/../docs/connector-development/config-based/understanding-the-yaml-file/record-selector.md",sourceDirName:"connector-development/config-based/understanding-the-yaml-file",slug:"/connector-development/config-based/understanding-the-yaml-file/record-selector",permalink:"/connector-development/config-based/understanding-the-yaml-file/record-selector",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/understanding-the-yaml-file/record-selector.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Pagination",permalink:"/connector-development/config-based/understanding-the-yaml-file/pagination"},next:{title:"Stream Slicers",permalink:"/connector-development/config-based/understanding-the-yaml-file/stream-slicers"}},d={},s=[{value:"Common recipes:",id:"common-recipes",level:2},{value:"Selecting the whole response",id:"selecting-the-whole-response",level:3},{value:"Selecting a field",id:"selecting-a-field",level:3},{value:"Selecting an inner field",id:"selecting-an-inner-field",level:3},{value:"Filtering records",id:"filtering-records",level:2},{value:"Transformations",id:"transformations",level:2},{value:"Adding fields",id:"adding-fields",level:3},{value:"Removing fields",id:"removing-fields",level:3}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"record-selector"},"Record selector"),(0,a.kt)("p",null,"The record selector is responsible for translating an HTTP response into a list of Airbyte records by extracting records from the response and optionally filtering and shaping records based on a heuristic.\nSchema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  HttpSelector:\n    type: object\n    anyOf:\n      - "$ref": "#/definitions/RecordSelector"\n  RecordSelector:\n    type: object\n    required:\n      - extractor\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      extractor:\n        "$ref": "#/definitions/RecordExtractor"\n      record_filter:\n        "$ref": "#/definitions/RecordFilter"\n')),(0,a.kt)("p",null,"The current record extraction implementation uses ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/dpath/"},"dpath")," to select records from the json-decoded HTTP response.\nSchema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  DpathExtractor:\n    type: object\n    additionalProperties: true\n    required:\n      - field_pointer\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      field_pointer:\n        type: array\n        items:\n          type: string\n')),(0,a.kt)("h2",{id:"common-recipes"},"Common recipes:"),(0,a.kt)("p",null,"Here are some common patterns:"),(0,a.kt)("h3",{id:"selecting-the-whole-response"},"Selecting the whole response"),(0,a.kt)("p",null,"If the root of the response is an array containing the records, the records can be extracted using the following definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"selector:\n  extractor:\n    field_pointer: [ ]\n")),(0,a.kt)("p",null,"If the root of the response is a json object representing a single record, the record can be extracted and wrapped in an array.\nFor example, given a response body of the form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1\n}\n')),(0,a.kt)("p",null,"and a selector"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"selector:\n  extractor:\n    field_pointer: [ ]\n")),(0,a.kt)("p",null,"The selected records will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1\n  }\n]\n')),(0,a.kt)("h3",{id:"selecting-a-field"},"Selecting a field"),(0,a.kt)("p",null,"Given a response body of the form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "data": [{"id": 0}, {"id": 1}],\n  "metadata": {"api-version": "1.0.0"}\n}\n')),(0,a.kt)("p",null,"and a selector"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'selector:\n  extractor:\n    field_pointer: [ "data" ]\n')),(0,a.kt)("p",null,"The selected records will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 0\n  },\n  {\n    "id": 1\n  }\n]\n')),(0,a.kt)("h3",{id:"selecting-an-inner-field"},"Selecting an inner field"),(0,a.kt)("p",null,"Given a response body of the form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "records": [\n      {\n        "id": 1\n      },\n      {\n        "id": 2\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"and a selector"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'selector:\n  extractor:\n    field_pointer: [ "data", "records" ]\n')),(0,a.kt)("p",null,"The selected records will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1\n  },\n  {\n    "id": 2\n  }\n]\n')),(0,a.kt)("h2",{id:"filtering-records"},"Filtering records"),(0,a.kt)("p",null,"Records can be filtered by adding a record_filter to the selector.\nThe expression in the filter will be evaluated to a boolean returning true if the record should be included."),(0,a.kt)("p",null,"In this example, all records with a ",(0,a.kt)("inlineCode",{parentName:"p"},"created_at")," field greater than the stream slice's ",(0,a.kt)("inlineCode",{parentName:"p"},"start_time")," will be filtered out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"selector:\n  extractor:\n    field_pointer: [ ]\n  record_filter:\n    condition: \"{{ record['created_at'] < stream_slice['start_time'] }}\"\n")),(0,a.kt)("h2",{id:"transformations"},"Transformations"),(0,a.kt)("p",null,"Fields can be added or removed from records by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"Transformation"),"s to a stream's definition."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  RecordTransformation:\n    type: object\n    anyOf:\n      - "$ref": "#/definitions/AddFields"\n      - "$ref": "#/definitions/RemoveFields"\n')),(0,a.kt)("h3",{id:"adding-fields"},"Adding fields"),(0,a.kt)("p",null,"Fields can be added with the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddFields"),' transformation.\nThis example adds a top-level field "field1" with a value "static_value"'),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  AddFields:\n    type: object\n    required:\n      - fields\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      fields:\n        type: array\n        items:\n          "$ref": "#/definitions/AddedFieldDefinition"\n  AddedFieldDefinition:\n    type: object\n    required:\n      - path\n      - value\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      path:\n        "$ref": "#/definitions/FieldPointer"\n      value:\n        type: string\n  FieldPointer:\n    type: array\n    items:\n      type: string\n')),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream:\n  <...>\n  transformations:\n      - type: AddFields\n        fields:\n          - path: [ "field1" ]\n            value: "static_value"\n')),(0,a.kt)("p",null,'This example adds a top-level field "start_date", whose value is evaluated from the stream slice:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"stream:\n  <...>\n  transformations:\n      - type: AddFields\n        fields:\n          - path: [ \"start_date\" ]\n            value: { { stream_slice[ 'start_date' ] } }\n")),(0,a.kt)("p",null,"Fields can also be added in a nested object by writing the fields' path as a list."),(0,a.kt)("p",null,"Given a record of the following shape:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "id": 0,\n  "data":\n  {\n    "field0": "some_data"\n  }\n}\n')),(0,a.kt)("p",null,'this definition will add a field in the "data" nested object:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream:\n  <...>\n  transformations:\n      - type: AddFields\n        fields:\n          - path: [ "data", "field1" ]\n            value: "static_value"\n')),(0,a.kt)("p",null,"resulting in the following record:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "id": 0,\n  "data":\n  {\n    "field0": "some_data",\n    "field1": "static_value"\n  }\n}\n')),(0,a.kt)("h3",{id:"removing-fields"},"Removing fields"),(0,a.kt)("p",null,"Fields can be removed from records with the ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoveFields")," transformation."),(0,a.kt)("p",null,"Schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  RemoveFields:\n    type: object\n    required:\n      - field_pointers\n    additionalProperties: true\n    properties:\n      "$options":\n        "$ref": "#/definitions/$options"\n      field_pointers:\n        type: array\n        items:\n          "$ref": "#/definitions/FieldPointer"\n\n')),(0,a.kt)("p",null,"Given a record of the following shape:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "path": \n  {\n    "to":\n    {\n      "field1": "data_to_remove",\n      "field2": "data_to_keep"\n    }\n  },\n  "path2": "data_to_remove",\n  "path3": "data_to_keep"\n}\n')),(0,a.kt)("p",null,'this definition will remove the 2 instances of "data_to_remove" which are found in "path2" and "path.to.field1":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'the_stream:\n  <...>\n  transformations:\n      - type: RemoveFields\n        field_pointers:\n          - [ "path", "to", "field1" ]\n          - [ "path2" ]\n')),(0,a.kt)("p",null,"resulting in the following record:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "path": \n  {\n    "to":\n    {\n      "field2": "data_to_keep"\n    }\n  },\n  "path3": "data_to_keep"\n}\n')))}c.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,u=f["".concat(d,".").concat(m)]||f[m]||c[m]||o;return t?r.createElement(u,l(l({ref:n},p),{},{components:t})):r.createElement(u,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);