"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7759],{56230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const i={},l="Google Analytics (Universal Analytics)",o={unversionedId:"integrations/sources/google-analytics-universal-analytics",id:"integrations/sources/google-analytics-universal-analytics",title:"Google Analytics (Universal Analytics)",description:"This page contains the setup guide and reference information for the Google Analytics (Universal Analytics) source connector.",source:"@site/../docs/integrations/sources/google-analytics-universal-analytics.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/google-analytics-universal-analytics",permalink:"/integrations/sources/google-analytics-universal-analytics",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/google-analytics-universal-analytics.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google Ads",permalink:"/integrations/sources/google-ads"},next:{title:"Google Analytics 4 (GA4)",permalink:"/integrations/sources/google-analytics-v4"}},s={},p=[{value:"Set up Google Analytics as a source in Airbyte",id:"set-up-google-analytics-as-a-source-in-airbyte",level:2},{value:"For Airbyte Cloud",id:"for-airbyte-cloud",level:3},{value:"For Airbyte Open Source",id:"for-airbyte-open-source",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Rate Limits and Performance Considerations (Airbyte Open-Source)",id:"rate-limits-and-performance-considerations-airbyte-open-source",level:2},{value:"Sampled data in reports",id:"sampled-data-in-reports",level:2},{value:"Data processing latency",id:"data-processing-latency",level:2},{value:"Requesting Custom Reports",id:"requesting-custom-reports",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-analytics-universal-analytics"},"Google Analytics (Universal Analytics)"),(0,r.kt)("p",null,"This page contains the setup guide and reference information for the Google Analytics (Universal Analytics) source connector."),(0,r.kt)("p",null,"This connector supports Universal Analytics properties through the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/core/v4"},"Reporting API v4"),"."),(0,r.kt)("h2",{id:"set-up-google-analytics-as-a-source-in-airbyte"},"Set up Google Analytics as a source in Airbyte"),(0,r.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud"),(0,r.kt)("p",null,"To set up Google Analytics as a source in Airbyte Cloud:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,r.kt)("strong",{parentName:"li"},"Google Analytics")," from the ",(0,r.kt)("strong",{parentName:"li"},"Source type")," dropdown. "),(0,r.kt)("li",{parentName:"ol"},"For Name, enter a name for the Google Analytics connector. "),(0,r.kt)("li",{parentName:"ol"},"Authenticate your Google account via OAuth or Service Account Key Authentication. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(Recommended)")," To authenticate your Google account via OAuth, click ",(0,r.kt)("strong",{parentName:"li"},"Sign in with Google")," and complete the authentication workflow."),(0,r.kt)("li",{parentName:"ul"},"To authenticate your Google account via Service Account Key Authentication, enter your ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"Google Cloud service account key")," in JSON format. \x3c!---Make sure the Service Account has the Project Viewer permission. ---\x3e"))),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("strong",{parentName:"li"},"Replication Start Date")," in YYYY-MM-DD format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("a",{parentName:"li",href:"https://ga-dev-tools.appspot.com/account-explorer/"},(0,r.kt)("strong",{parentName:"a"},"View ID"))," for the Google Analytics View you want to fetch data from."),(0,r.kt)("li",{parentName:"ol"},"Leave ",(0,r.kt)("strong",{parentName:"li"},"Data request time increment in days (Optional)")," blank or set to 1. For faster syncs, set this value to more than 1 but that might result in the Google Analytics API returning ",(0,r.kt)("a",{parentName:"li",href:"#sampled-data-in-reports"},"sampled data"),", potentially causing inaccuracies in the returned results. The maximum allowed value is 364.")),(0,r.kt)("h3",{id:"for-airbyte-open-source"},"For Airbyte Open Source"),(0,r.kt)("p",null,"To set up Google Analytics as a source in Airbyte Open Source:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/api/analyticsreporting.googleapis.com/overview"},"Google Analytics Reporting API dashboard")," in the project for your service user and enable the Reporting API for your account. Then go to the ",(0,r.kt)("a",{parentName:"li",href:"https://console.developers.google.com/apis/api/analytics.googleapis.com/overview"},"Google Analytics API dashboard")," in the project for your service user and enable the API for your account. "),(0,r.kt)("li",{parentName:"ol"},"Go to the Airbyte UI and click ",(0,r.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,r.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,r.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,r.kt)("strong",{parentName:"li"},"Google Analytics")," from the ",(0,r.kt)("strong",{parentName:"li"},"Source type")," dropdown. "),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the Google Analytics connector. "),(0,r.kt)("li",{parentName:"ol"},"Authenticate your Google account via OAuth or Service Account Key Authentication:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To authenticate your Google account via OAuth, enter your Google application's ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2"},"client ID, client secret, and refresh token"),"."),(0,r.kt)("li",{parentName:"ul"},"To authenticate your Google account via Service Account Key Authentication, enter your ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys"},"Google Cloud service account key")," in JSON format. Use the service account email address to ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/analytics/answer/1009702"},"add a user")," to the Google analytics view you want to access via the API and grant ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/analytics/answer/2884495"},"Read and Analyze permissions"),"."))),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("strong",{parentName:"li"},"Replication Start Date")," in YYYY-MM-DD format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("a",{parentName:"li",href:"https://ga-dev-tools.appspot.com/account-explorer/"},(0,r.kt)("strong",{parentName:"a"},"View ID"))," for the Google Analytics View you want to fetch data from."),(0,r.kt)("li",{parentName:"ol"},"Optionally, enter a JSON object as a string in the ",(0,r.kt)("strong",{parentName:"li"},"Custom Reports")," field. For details, refer to ",(0,r.kt)("a",{parentName:"li",href:"#requesting-custom-reports"},"Requesting custom reports")," "),(0,r.kt)("li",{parentName:"ol"},"Leave ",(0,r.kt)("strong",{parentName:"li"},"Data request time increment in days (Optional)")," blank or set to 1. For faster syncs, set this value to more than 1 but that might result in the Google Analytics API returning ",(0,r.kt)("a",{parentName:"li",href:"#sampled-data-in-reports"},"sampled data"),", potentially causing inaccuracies in the returned results. The maximum allowed value is 364.")),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Google Analytics source connector supports the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental Sync - Append")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental Sync - Deduped History"))),(0,r.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,r.kt)("p",null,"The Google Analytics (Universal Analytics) source connector can sync the following tables:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Stream name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"website_overview"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_users":1,"ga_newUsers":0,"ga_sessions":9,"ga_sessionsPerUser":9.0,"ga_avgSessionDuration":28.77777777777778,"ga_pageviews":63,"ga_pageviewsPerSession":7.0,"ga_avgTimeOnPage":4.685185185185185,"ga_bounceRate":0.0,"ga_exitRate":14.285714285714285,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"traffic_sources"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_source":"(direct)","ga_medium":"(none)","ga_socialNetwork":"(not set)","ga_users":1,"ga_newUsers":0,"ga_sessions":9,"ga_sessionsPerUser":9.0,"ga_avgSessionDuration":28.77777777777778,"ga_pageviews":63,"ga_pageviewsPerSession":7.0,"ga_avgTimeOnPage":4.685185185185185,"ga_bounceRate":0.0,"ga_exitRate":14.285714285714285,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pages"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_hostname":"mydemo.com","ga_pagePath":"/home5","ga_pageviews":63,"ga_uniquePageviews":9,"ga_avgTimeOnPage":4.685185185185185,"ga_entrances":9,"ga_entranceRate":14.285714285714285,"ga_bounceRate":0.0,"ga_exits":9,"ga_exitRate":14.285714285714285,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"locations"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_continent":"Americas","ga_subContinent":"Northern America","ga_country":"United States","ga_region":"Iowa","ga_metro":"Des Moines-Ames IA","ga_city":"Des Moines","ga_users":1,"ga_newUsers":0,"ga_sessions":1,"ga_sessionsPerUser":1.0,"ga_avgSessionDuration":29.0,"ga_pageviews":7,"ga_pageviewsPerSession":7.0,"ga_avgTimeOnPage":4.666666666666667,"ga_bounceRate":0.0,"ga_exitRate":14.285714285714285,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"monthly_active_users"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_30dayUsers":1,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"four_weekly_active_users"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_28dayUsers":1,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"two_weekly_active_users"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_14dayUsers":1,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"weekly_active_users"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_7dayUsers":1,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"daily_active_users"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_1dayUsers":1,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"devices"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"ga_date":"2021-02-11","ga_deviceCategory":"desktop","ga_operatingSystem":"Macintosh","ga_browser":"Chrome","ga_users":1,"ga_newUsers":0,"ga_sessions":9,"ga_sessionsPerUser":9.0,"ga_avgSessionDuration":28.77777777777778,"ga_pageviews":63,"ga_pageviewsPerSession":7.0,"ga_avgTimeOnPage":4.685185185185185,"ga_bounceRate":0.0,"ga_exitRate":14.285714285714285,"view_id":"211669975"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Any custom reports"),(0,r.kt)("td",{parentName:"tr",align:"left"},"See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.airbyte.com/integrations/sources/google-analytics-v4#reading-custom-reports"},"below")," for details.")))),(0,r.kt)("p",null,"Reach out to us on Slack or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you need to send custom Google Analytics report data with Airbyte."),(0,r.kt)("h2",{id:"rate-limits-and-performance-considerations-airbyte-open-source"},"Rate Limits and Performance Considerations ","(","Airbyte Open-Source",")"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/core/v4/limits-quotas"},"Analytics Reporting API v4")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number of requests per day per project: 50,000"),(0,r.kt)("li",{parentName:"ul"},"Number of requests per view (profile) per day: 10,000 (cannot be increased)"),(0,r.kt)("li",{parentName:"ul"},"Number of requests per 100 seconds per project: 2,000"),(0,r.kt)("li",{parentName:"ul"},"Number of requests per 100 seconds per user per project: 100 (can be increased in Google API Console to 1,000).")),(0,r.kt)("p",null,'The Google Analytics connector should not run into the "requests per 100 seconds" limitation under normal usage. ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"Create an issue")," if you see any rate limit issues that are not automatically retried successfully and try increasing the ",(0,r.kt)("inlineCode",{parentName:"p"},"window_in_days")," value. "),(0,r.kt)("h2",{id:"sampled-data-in-reports"},"Sampled data in reports"),(0,r.kt)("p",null,"If you are not on the Google Analytics 360 tier, the Google Analytics API may return sampled data if the amount of data in your Google Analytics account exceeds Google's ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/2637192?hl=en&ref_topic=2601030&visit_id=637868645346124317-2833523666&rd=1#thresholds&zippy=%2Cin-this-article"},"pre-determined compute thresholds"),". This means the data returned in the report is an estimate which may have some inaccuracy. This ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/2637192"},"Google page")," provides a comprehensive overview of how Google applies sampling to your data.  "),(0,r.kt)("p",null,"In order to minimize the chances of sampling being applied to your data, Airbyte makes data requests to Google in one day increments (the smallest allowed date increment). This reduces the amount of data the Google API processes per request, thus minimizing the chances of sampling being applied. The downside of requesting data in one day increments is that it increases the time it takes to export your Google Analytics data. If sampling is not a concern, you can override this behavior by setting the optional ",(0,r.kt)("inlineCode",{parentName:"p"},"window_in_day")," parameter to specify the number of days to look back and avoid sampling.\nWhen sampling occurs, a warning is logged to the sync log."),(0,r.kt)("h2",{id:"data-processing-latency"},"Data processing latency"),(0,r.kt)("p",null,"According to the ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1070983?hl=en#DataProcessingLatency&zippy=%2Cin-this-article"},"Google Analytics API documentation"),", all report data may continue to be updated 48 hours after it appears in the Google Analytics API. This means if you request the same report twice within 48 hours of that data being sent to Google Analytics, the report data might be different across the two requests. This happens when Google Analytics is still processing all events it received. "),(0,r.kt)("p",null,"When this occurs, the returned data will set the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"isDataGolden")," to false. As mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/reporting/core/v4/rest/v4/reports/batchGet#reportdata"},"Google Analytics API docs"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"isDataGolden")," flag indicates if ","[data]"," is golden or not. Data is golden when the exact same request ","[for a report]"," will not produce any new results if asked at a later point in time. "),(0,r.kt)("p",null,"To address this issue, the connector adds a lookback window of 2 days to ensure any previously synced non-golden data is re-synced with its potential updates. For example: If your last sync occurred 5 days ago and a sync is initiated today, the connector will attempt to sync data from 7 days ago up to the latest data available."),(0,r.kt)("p",null,"To determine whether data is finished processing or not, the ",(0,r.kt)("inlineCode",{parentName:"p"},"isDataGolden")," flag is exposed and should be used."),(0,r.kt)("h2",{id:"requesting-custom-reports"},"Requesting Custom Reports"),(0,r.kt)("p",null,"To replicate Google Analytics ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/answer/1033013?hl=en"},"Custom Reports")," using this connector, input a JSON object as a string in the ",(0,r.kt)("strong",{parentName:"p"},"Custom Reports")," field when setting up the connector. The JSON is an array of objects where each object has the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{"name": string, "dimensions": [string], "metrics": [string]}\n')),(0,r.kt)("p",null,'Here is an example input "Custom Reports" field:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'[{"name": "new_users_per_day", "dimensions": ["ga:date","ga:country","ga:region"], "metrics": ["ga:newUsers"]}, {"name": "users_per_city", "dimensions": ["ga:city"], "metrics": ["ga:users"]}]\n')),(0,r.kt)("p",null,"To create a list of dimensions, you can use default Google Analytics dimensions (listed below) or custom dimensions if you have some defined. Each report can contain no more than 7 dimensions, and they must all be unique. The default Google Analytics dimensions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:city")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:continent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:country")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:deviceCategory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:hostname")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:medium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:metro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:operatingSystem")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:pagePath")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:region")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:socialNetwork")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:subContinent"))),(0,r.kt)("p",null,"To create a list of metrics, use a default Google Analytics metric (values from the list below) or custom metrics if you have defined them.",(0,r.kt)("br",{parentName:"p"}),"\n","A custom report can contain no more than 10 unique metrics. The default available Google Analytics metrics are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:14dayUsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:1dayUsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:28dayUsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:30dayUsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:7dayUsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:avgSessionDuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:avgTimeOnPage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:bounceRate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:entranceRate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:entrances")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:exitRate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:exits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:newUsers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:pageviews")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:pageviewsPerSession")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:sessions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:sessionsPerUser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:uniquePageviews")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ga:users"))),(0,r.kt)("p",null,"Incremental sync is supported only if you add ",(0,r.kt)("inlineCode",{parentName:"p"},"ga:date")," dimension to your custom report."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-10-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17717"},"17717")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improve CHECK by using ",(0,r.kt)("inlineCode",{parentName:"td"},"ga:hits")," metric.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15087"},"17326")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15087"},"15087")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix documentationUrl")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-26"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15042"},"15042")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update ",(0,r.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field to true from schemas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-22"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14949"},"14949")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add handle request daily quota error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-06-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14298"},"14298")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify integer type for ga:dateHourMinute dimension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12426"},"12426")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Expose ",(0,r.kt)("inlineCode",{parentName:"td"},"isDataGOlden")," field and always resync data two days back to make sure it is golden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-19"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12150"},"12150")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minor changes to documentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11803"},"11803")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved documentation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11512"},"11512")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved Unit and Acceptance tests coverage, fixed ",(0,r.kt)("inlineCode",{parentName:"td"},"read")," with abnormally large state values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-01-26"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9480"},"9480")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reintroduce ",(0,r.kt)("inlineCode",{parentName:"td"},"window_in_days")," and log warning when sampling occurs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-28"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9165"},"9165")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-09"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8656"},"8656")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix date format in schemas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-09"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8676"},"8676")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,r.kt)("inlineCode",{parentName:"td"},"window_in_days")," validation issue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-03"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8175"},"8175")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix validation of unknown metric(s) or dimension(s) error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-30"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8264"},"8264")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Corrected date range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-19"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8087"},"8087")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support ",(0,r.kt)("inlineCode",{parentName:"td"},"start_date")," before the account has any data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-10-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7410"},"7410")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add check for correct permission for requested ",(0,r.kt)("inlineCode",{parentName:"td"},"view_id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-10-13"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7020"},"7020")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add intermediary auth config support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-10-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6414"},"6414")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Declare OAuth parameters in Google sources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6459"},"6459")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update OAuth Spec File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-21"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6357"},"6357")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix OAuth workflow parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6306"},"6306")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Support of Airbyte OAuth initialization flow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-25"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5655"},"5655")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Corrected validation of empty custom report")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-10"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5290"},"5290")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,u=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);