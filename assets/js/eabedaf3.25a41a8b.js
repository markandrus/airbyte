"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8963],{91422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(83117),r=(n(67294),n(3905));const o={},s="Adding Incremental Sync to a Source",i={unversionedId:"connector-development/tutorials/adding-incremental-sync",id:"connector-development/tutorials/adding-incremental-sync",title:"Adding Incremental Sync to a Source",description:"Overview",source:"@site/../docs/connector-development/tutorials/adding-incremental-sync.md",sourceDirName:"connector-development/tutorials",slug:"/connector-development/tutorials/adding-incremental-sync",permalink:"/connector-development/tutorials/adding-incremental-sync",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/adding-incremental-sync.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Update Catalog in <code>discover</code>",id:"update-catalog-in-discover",level:2},{value:"Update <code>read</code>",id:"update-read",level:2},{value:"Run the incremental tests",id:"run-the-incremental-tests",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-incremental-sync-to-a-source"},"Adding Incremental Sync to a Source"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This tutorial will assume that you already have a working source. If you do not, feel free to refer to the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/tutorials/building-a-python-source"},"Building a Toy Connector")," tutorial. This tutorial will build directly off the example from that article. We will also assume that you have a basic understanding of how Airbyte's Incremental-Append replication strategy works. We have a brief explanation of it ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-append"},"here"),"."),(0,r.kt)("h2",{id:"update-catalog-in-discover"},"Update Catalog in ",(0,r.kt)("inlineCode",{parentName:"h2"},"discover")),(0,r.kt)("p",null,"First we need to identify a given stream in the Source as supporting incremental. This information is declared in the catalog that the ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," method returns. You will notice in the stream object contains a field called ",(0,r.kt)("inlineCode",{parentName:"p"},"supported_sync_modes"),". If we are adding incremental to an existing stream, we just need to add ",(0,r.kt)("inlineCode",{parentName:"p"},'"incremental"')," to that array. This tells Airbyte that this stream can either be synced in an incremental fashion. In practice, this will mean that in the UI, a user will have the ability to configure this type of sync."),(0,r.kt)("p",null,"In the example we used in the Toy Connector tutorial, the ",(0,r.kt)("inlineCode",{parentName:"p"},"discover"),' method would not look like this. Note: that "incremental" has been added to the ',(0,r.kt)("inlineCode",{parentName:"p"},"supported_sync_modes")," array. We also set ",(0,r.kt)("inlineCode",{parentName:"p"},"source_defined_cursor")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"default_cursor_field")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'["date"]')," to declare that the Source knows what field to use for the cursor, in this case the date field, and does not require user input. Nothing else has changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def discover():\n    catalog = {\n        "streams": [{\n            "name": "stock_prices",\n            "supported_sync_modes": ["full_refresh", "incremental"],\n            "source_defined_cursor": True,\n            "default_cursor_field": ["date"],\n            "json_schema": {\n                "properties": {\n                    "date": {\n                        "type": "string"\n                    },\n                    "price": {\n                        "type": "number"\n                    },\n                    "stock_ticker": {\n                        "type": "string"\n                    }\n                }\n            }\n        }]\n    }\n    airbyte_message = {"type": "CATALOG", "catalog": catalog}\n    print(json.dumps(airbyte_message))\n')),(0,r.kt)("h2",{id:"update-read"},"Update ",(0,r.kt)("inlineCode",{parentName:"h2"},"read")),(0,r.kt)("p",null,"Next we will adapt the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," method that we wrote previously. We need to change three things."),(0,r.kt)("p",null,"First, we need to pass it information about what data was replicated in the previous sync. In Airbyte this is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," object. The structure of the state object is determined by the Source. This means that each Source can construct a state object that makes sense to it and does not need to worry about adhering to any other convention. That being said, a pretty typical structure for a state object is a map of stream name to the last value in the cursor field for that stream."),(0,r.kt)("p",null,"In this case we might choose something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "stock_prices": {\n    "date": "2020-02-01"\n  }\n}\n')),(0,r.kt)("p",null,"The second change we need to make to the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," method is to use the state object so that we only emit new records. "),(0,r.kt)("p",null,"Lastly, we need to emit an updated state object, so that the next time this Source runs we do not resend messages that we have already sent."),(0,r.kt)("p",null,"Here's what our updated ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," method would look like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def read(config, catalog, state):\n    # Assert required configuration was provided\n    if "api_key" not in config or "stock_ticker" not in config:\n        log("Input config must contain the properties \'api_key\' and \'stock_ticker\'")\n        sys.exit(1)\n\n    # Find the stock_prices stream if it is present in the input catalog\n    stock_prices_stream = None\n    for configured_stream in catalog["streams"]:\n        if configured_stream["stream"]["name"] == "stock_prices":\n            stock_prices_stream = configured_stream\n\n    if stock_prices_stream is None:\n        log("No streams selected")\n        return\n\n    # By default we fetch stock prices for the 7 day period ending with today\n    today = date.today()\n    cursor_value = today.strftime("%Y-%m-%d")\n    from_day = (today - timedelta(days=7)).strftime("%Y-%m-%d")\n\n    # In case of incremental sync, state should contain the last date when we fetched stock prices\n    if stock_prices_stream["sync_mode"] == "incremental":\n        if state and "stock_prices" in state and state["stock_prices"].get("date"):\n            from_date = datetime.strptime(state["stock_prices"].get("date"), "%Y-%m-%d")\n            from_day = (from_date + timedelta(days=1)).strftime("%Y-%m-%d")\n\n    # If the state indicates that we have already ran the sync up to cursor_value, we can skip the sync\n    if cursor_value > from_day:\n        # If we\'ve made it this far, all the configuration is good and we can pull the market data\n        response = _call_api(ticker=config["stock_ticker"], token = config["api_key"], from_day=from_day, to_day=cursor_value)\n        if response.status_code != 200:\n            # In a real scenario we\'d handle this error better :)\n            log("Failure occurred when calling Polygon.io API")\n            sys.exit(1)\n        else:\n            # Stock prices are returned sorted by date in ascending order\n            # We want to output them one by one as AirbyteMessages\n            response_json = response.json()\n            if response_json["resultsCount"] > 0:\n                results = response_json["results"]\n                for result in results:\n                    data = {"date": datetime.fromtimestamp(result["t"]/1000, tz=timezone.utc).strftime("%Y-%m-%d"), "stock_ticker": config["stock_ticker"], "price": result["c"]}\n                    record = {"stream": "stock_prices", "data": data, "emitted_at": int(datetime.now().timestamp()) * 1000}\n                    output_message = {"type": "RECORD", "record": record}\n                    print(json.dumps(output_message))\n\n                    # We update the cursor as we print out the data, so that next time sync starts where we stopped printing out results\n                    if stock_prices_stream["sync_mode"] == "incremental":\n                        cursor_value = datetime.fromtimestamp(results[len(results)-1]["t"]/1000, tz=timezone.utc).strftime("%Y-%m-%d")\n\n    # Emit new state message.\n    if stock_prices_stream["sync_mode"] == "incremental":\n        output_message = {"type": "STATE", "state": {"data": {"stock_prices": {"date": cursor_value}}}}\n        print(json.dumps(output_message))\n')),(0,r.kt)("p",null,"We will also need to parse ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," argument in the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," method. In order to do that, we will modify the code that\ncalls ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'    elif command == "read":\n        config = read_json(get_input_file_path(parsed_args.config))\n        configured_catalog = read_json(get_input_file_path(parsed_args.catalog))\n        state = None\n        if parsed_args.state:\n            state = read_json(get_input_file_path(parsed_args.state))\n\n        read(config, configured_catalog, state)\n')),(0,r.kt)("p",null,"Finally, we need to pass more arguments to our ",(0,r.kt)("inlineCode",{parentName:"p"},"_call_api")," method in order to fetch only new prices for incremental sync:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def _call_api(ticker, token, from_day, to_day):\n    return requests.get(f"https://api.polygon.io/v2/aggs/ticker/{ticker}/range/1/day/{from_day}/{to_day}?sort=asc&limit=120&apiKey={token}")\n')),(0,r.kt)("p",null,"You will notice that in order to test these changes you need a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," object. If you run an incremental sync\nwithout passing a state object, the new code will output a state object that you can use with the next sync. If you run this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python source.py read --config secrets/valid_config.json --catalog incremental_configured_catalog.json\n")),(0,r.kt)("p",null,"The output will look like following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"type": "RECORD", "record": {"stream": "stock_prices", "data": {"date": "2022-03-07", "stock_ticker": "TSLA", "price": 804.58}, "emitted_at": 1647294277000}}\n{"type": "RECORD", "record": {"stream": "stock_prices", "data": {"date": "2022-03-08", "stock_ticker": "TSLA", "price": 824.4}, "emitted_at": 1647294277000}}\n{"type": "RECORD", "record": {"stream": "stock_prices", "data": {"date": "2022-03-09", "stock_ticker": "TSLA", "price": 858.97}, "emitted_at": 1647294277000}}\n{"type": "RECORD", "record": {"stream": "stock_prices", "data": {"date": "2022-03-10", "stock_ticker": "TSLA", "price": 838.3}, "emitted_at": 1647294277000}}\n{"type": "RECORD", "record": {"stream": "stock_prices", "data": {"date": "2022-03-11", "stock_ticker": "TSLA", "price": 795.35}, "emitted_at": 1647294277000}}\n{"type": "STATE", "state": {"data": {"stock_prices": {"date": "2022-03-11"}}}}\n')),(0,r.kt)("p",null,"Notice that the last line of output is the state object. Copy the state object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"stock_prices": {"date": "2022-03-11"}}\n')),(0,r.kt)("p",null,"and paste it into a new file (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"state.json"),"). Now you can run an incremental sync:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python source.py read --config secrets/valid_config.json --catalog incremental_configured_catalog.json --state state.json \n")),(0,r.kt)("h2",{id:"run-the-incremental-tests"},"Run the incremental tests"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/connector-development/testing-connectors/source-acceptance-tests-reference"},"Source Acceptance Test (SAT) suite")," also includes test cases to ensure that incremental mode is working correctly. "),(0,r.kt)("p",null,"To enable these tests, modify the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml")," by adding the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  incremental:\n    - config_path: "secrets/valid_config.json"\n      configured_catalog_path: "incremental_configured_catalog.json"\n      future_state_path: "abnormal_state.json"\n')),(0,r.kt)("p",null,"Your full ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml")," should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# See [Source Acceptance Tests](https://docs.airbyte.io/connector-development/testing-connectors/source-acceptance-tests-reference)\n# for more information about how to configure these tests\nconnector_image: airbyte/source-stock-ticker-api:dev\ntests:\n  spec:\n    - spec_path: "spec.json"\n      config_path: "secrets/valid_config.json"\n  connection:\n    - config_path: "secrets/valid_config.json"\n      status: "succeed"\n    - config_path: "secrets/invalid_config.json"\n      status: "failed"\n  discovery:\n    - config_path: "secrets/valid_config.json"\n  basic_read:\n    - config_path: "secrets/valid_config.json"\n      configured_catalog_path: "fullrefresh_configured_catalog.json"\n      empty_streams: []\n  full_refresh:\n    - config_path: "secrets/valid_config.json"\n      configured_catalog_path: "fullrefresh_configured_catalog.json"\n  incremental:\n    - config_path: "secrets/valid_config.json"\n      configured_catalog_path: "incremental_configured_catalog.json"\n      future_state_path: "abnormal_state.json"\n')),(0,r.kt)("p",null,"You will also need to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"abnormal_state.json")," file with a date in the future, which should not produce any records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"stock_prices": {"date": "2121-01-01"}}\n')),(0,r.kt)("p",null,"Run the tests once again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./acceptance-test-docker.sh\n")),(0,r.kt)("p",null,"And finally, you should see a successful test summary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"collecting ... \n test_core.py \u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713\u2713                                                                                                                                                                                         86% \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b \n test_full_refresh.py \u2713                                                                                                                                                                                                   91% \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258f\n test_incremental.py \u2713\u2713                                                                                                                                                                                                  100% \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\n\nResults (8.90s):\n      22 passed\n")),(0,r.kt)("p",null,"That's all you need to do to add incremental functionality to the stock ticker Source."),(0,r.kt)("p",null,"You can deploy the new version of your connector simply by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew clean :airbyte-integrations:connectors:source-stock-ticker-api:build\n")),(0,r.kt)("p",null,"Bonus points: go to Airbyte UI and reconfigure the connection to use incremental sync."),(0,r.kt)("p",null,"Incremental definitely requires more configurability than full refresh, so your implementation may deviate slightly depending on whether your cursor\nfield is source defined or user-defined. If you think you are running into one of those cases, check out\nour ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-append"},"incremental")," documentation for more information on different types of\nconfiguration."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);