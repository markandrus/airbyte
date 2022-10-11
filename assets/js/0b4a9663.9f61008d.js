"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4087],{13144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(83117),a=(n(67294),n(3905));const i={},r="Building a Python Source",s={unversionedId:"connector-development/tutorials/building-a-python-source",id:"connector-development/tutorials/building-a-python-source",title:"Building a Python Source",description:"Summary",source:"@site/../docs/connector-development/tutorials/building-a-python-source.md",sourceDirName:"connector-development/tutorials",slug:"/connector-development/tutorials/building-a-python-source",permalink:"/connector-development/tutorials/building-a-python-source",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/building-a-python-source.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 8: Test Connector",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/test-your-connector"},next:{title:"Building a Python Destination",permalink:"/connector-development/tutorials/building-a-python-destination"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Checklist",id:"checklist",level:2},{value:"Creating a Source",id:"creating-a-source",level:3},{value:"Submitting a Source to Airbyte",id:"submitting-a-source-to-airbyte",level:3},{value:"Explaining Each Step",id:"explaining-each-step",level:2},{value:"Step 1: Create the source using template",id:"step-1-create-the-source-using-template",level:3},{value:"Step 2: Build the newly generated source",id:"step-2-build-the-newly-generated-source",level:3},{value:"Step 3: Set up your Airbyte development environment",id:"step-3-set-up-your-airbyte-development-environment",level:3},{value:"Dependencies",id:"dependencies",level:4},{value:"Development Environment",id:"development-environment",level:4},{value:"Iterating on your implementation",id:"iterating-on-your-implementation",level:4},{value:"Step 4: Implement <code>spec</code>",id:"step-4-implement-spec",level:3},{value:"Step 5: Implement <code>check</code>",id:"step-5-implement-check",level:3},{value:"Step 6: Implement <code>discover</code>",id:"step-6-implement-discover",level:3},{value:"Step 7: Implement <code>read</code>",id:"step-7-implement-read",level:3},{value:"Step 8: Set up Standard Tests",id:"step-8-set-up-standard-tests",level:3},{value:"Step 9: Write unit tests and/or integration tests",id:"step-9-write-unit-tests-andor-integration-tests",level:3},{value:"Unit Tests",id:"unit-tests",level:4},{value:"Integration Tests",id:"integration-tests",level:4},{value:"Step 10: Update the <code>README.md</code>",id:"step-10-update-the-readmemd",level:3},{value:"Step 11: Add the connector to the API/UI",id:"step-11-add-the-connector-to-the-apiui",level:3},{value:"Step 12: Add docs",id:"step-12-add-docs",level:3},{value:"Related tutorials",id:"related-tutorials",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-a-python-source"},"Building a Python Source"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This article provides a checklist for how to create a python source. Each step in the checklist has a link to a more detailed explanation below."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Docker, Python, and Java with the versions listed in the ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/tech-stack"},"tech stack section"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All the commands below assume that ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," points to a version of python ",">","3.7. On some systems, ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," points to a Python2 installation and ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," points to Python3. If this is the case on your machine, substitute all ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," commands in this guide with ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," . Otherwise, make sure to install Python 3 before beginning.")),(0,a.kt)("h2",{id:"checklist"},"Checklist"),(0,a.kt)("h3",{id:"creating-a-source"},"Creating a Source"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1: Create the source using template"),(0,a.kt)("li",{parentName:"ul"},"Step 2: Build the newly generated source "),(0,a.kt)("li",{parentName:"ul"},"Step 3: Set up your Airbyte development environment "),(0,a.kt)("li",{parentName:"ul"},"Step 4: Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"spec")," ","(","and define the specification for the source ",(0,a.kt)("inlineCode",{parentName:"li"},"airbyte-integrations/connectors/source-<source-name>/spec.yaml"),")"),(0,a.kt)("li",{parentName:"ul"},"Step 5: Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"check")),(0,a.kt)("li",{parentName:"ul"},"Step 6: Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"discover")),(0,a.kt)("li",{parentName:"ul"},"Step 7: Implement ",(0,a.kt)("inlineCode",{parentName:"li"},"read")),(0,a.kt)("li",{parentName:"ul"},"Step 8: Set up Standard Tests"),(0,a.kt)("li",{parentName:"ul"},"Step 9: Write unit tests or integration tests"),(0,a.kt)("li",{parentName:"ul"},"Step 10: Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"README.md")," ","(","If API credentials are required to run the integration, please document how they can be obtained or link to a how-to guide.",")"),(0,a.kt)("li",{parentName:"ul"},"Step 11: Add the connector to the API/UI ","(","by adding an entry in ",(0,a.kt)("inlineCode",{parentName:"li"},"airbyte-config/init/src/main/resources/seed/source_definitions.yaml"),")"),(0,a.kt)("li",{parentName:"ul"},"Step 12: Add docs ","(","in ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/integrations/sources/<source-name>.md"),")")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Each step of the Creating a Source checklist is explained in more detail below.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew")," commands must be run from the root of the airbyte project.")),(0,a.kt)("h3",{id:"submitting-a-source-to-airbyte"},"Submitting a Source to Airbyte"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you need help with any step of the process, feel free to submit a PR with your progress and any questions you have. "),(0,a.kt)("li",{parentName:"ul"},"Submit a PR."),(0,a.kt)("li",{parentName:"ul"},"To run integration tests, Airbyte needs access to a test account/environment. Coordinate with an Airbyte engineer ","(","via the PR",")"," to add test credentials so that we can run tests for the integration in the CI. ","(","We will create our own test account once you let us know what source we need to create it for.",")"),(0,a.kt)("li",{parentName:"ul"},"Once the config is stored in Github Secrets, edit ",(0,a.kt)("inlineCode",{parentName:"li"},".github/workflows/test-command.yml")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".github/workflows/publish-command.yml")," to inject the config into the build environment."),(0,a.kt)("li",{parentName:"ul"},"Edit the ",(0,a.kt)("inlineCode",{parentName:"li"},"airbyte/tools/bin/ci_credentials.sh")," script to pull the script from the build environment and write it to ",(0,a.kt)("inlineCode",{parentName:"li"},"secrets/config.json")," during the build.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you have a question about a step the Submitting a Source to Airbyte checklist include it in your PR or ask it on ",(0,a.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"slack"),".")),(0,a.kt)("h2",{id:"explaining-each-step"},"Explaining Each Step"),(0,a.kt)("h3",{id:"step-1-create-the-source-using-template"},"Step 1: Create the source using template"),(0,a.kt)("p",null,"Airbyte provides a code generator which bootstraps the scaffolding for our connector."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd airbyte-integrations/connector-templates/generator # assumes you are starting from the root of the Airbyte project.\n$ ./generate.sh\n")),(0,a.kt)("p",null,"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," template and then input the name of your connector. For this walk through we will refer to our source as ",(0,a.kt)("inlineCode",{parentName:"p"},"example-python")),(0,a.kt)("h3",{id:"step-2-build-the-newly-generated-source"},"Step 2: Build the newly generated source"),(0,a.kt)("p",null,"Build the source by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"cd airbyte-integrations/connectors/source-<name>\npython -m venv .venv # Create a virtual environment in the .venv directory\nsource .venv/bin/activate # enable the venv\npip install -r requirements.txt\n")),(0,a.kt)("p",null,"This step sets up the initial python environment. ",(0,a.kt)("strong",{parentName:"p"},"All")," subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," commands assume you have activated your virtual environment."),(0,a.kt)("h3",{id:"step-3-set-up-your-airbyte-development-environment"},"Step 3: Set up your Airbyte development environment"),(0,a.kt)("p",null,"The generator creates a file ",(0,a.kt)("inlineCode",{parentName:"p"},"source_<source_name>/source.py"),". This will be where you implement the logic for your source. The templated ",(0,a.kt)("inlineCode",{parentName:"p"},"source.py")," contains extensive comments explaining each method that needs to be implemented. Briefly here is an overview of each of these methods."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"spec"),": declares the user-provided credentials or configuration needed to run the connector"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"check"),": tests if with the user-provided configuration the connector can connect with the underlying data source."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"discover"),": declares the different streams of data that this connector can output"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"read"),": reads data from the underlying data source ","(","The stock ticker API",")")),(0,a.kt)("h4",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Python dependencies for your source should be declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-<source-name>/setup.py")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"install_requires")," field. You will notice that a couple of Airbyte dependencies are already declared there. Do not remove these; they give your source access to the helper interface that is provided by the generator."),(0,a.kt)("p",null,"You may notice that there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," in your source's directory as well. Do not touch this. It is autogenerated and used to provide Airbyte dependencies. All your dependencies should be declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py"),"."),(0,a.kt)("h4",{id:"development-environment"},"Development Environment"),(0,a.kt)("p",null,"The commands we ran above created a virtual environment for your source. If you want your IDE to auto complete and resolve dependencies properly, point it at the virtual env ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-<source-name>/.venv"),". Also anytime you change the dependencies in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py")," make sure to re-run the build command. The build system will handle installing all dependencies in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py")," into the virtual environment."),(0,a.kt)("p",null,"Pretty much all it takes to create a source is to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Source")," interface. The template fills in a lot of information for you and has extensive docstrings describing what you need to do to implement each method. The next 4 steps are just implementing that interface."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All logging should be done through the ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," object passed into each method. Otherwise, logs will not be shown in the Airbyte UI.")),(0,a.kt)("h4",{id:"iterating-on-your-implementation"},"Iterating on your implementation"),(0,a.kt)("p",null,"Everyone develops differently but here are 3 ways that we recommend iterating on a source. Consider using whichever one matches your style."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run the source using python")),(0,a.kt)("p",null,"You'll notice in your source's directory that there is a python file called ",(0,a.kt)("inlineCode",{parentName:"p"},"main.py"),". This file exists as convenience for development. You can call it from within the virtual environment mentioned above ",(0,a.kt)("inlineCode",{parentName:"p"},". ./.venv/bin/activate")," to test out that your source works."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# from airbyte-integrations/connectors/source-<source-name>\npython main.py spec\npython main.py check --config secrets/config.json\npython main.py discover --config secrets/config.json\npython main.py read --config secrets/config.json --catalog sample_files/configured_catalog.json\n")),(0,a.kt)("p",null,"The nice thing about this approach is that you can iterate completely within in python. The downside is that you are not quite running your source as it will actually be run by Airbyte. Specifically you're not running it from within the docker container that will house it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Run the source using docker")),(0,a.kt)("p",null,"If you want to run your source exactly as it will be run by Airbyte ","(","i.e. within a docker container",")",", you can use the following commands from the connector module directory ","(",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-example-python"),")",":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# First build the container\ndocker build . -t airbyte/source-example-python:dev\n\n# Then use the following commands to run it\ndocker run --rm airbyte/source-example-python:dev spec\ndocker run --rm -v $(pwd)/secrets:/secrets airbyte/source-example-python:dev check --config /secrets/config.json\ndocker run --rm -v $(pwd)/secrets:/secrets airbyte/source-example-python:dev discover --config /secrets/config.json\ndocker run --rm -v $(pwd)/secrets:/secrets -v $(pwd)/sample_files:/sample_files airbyte/source-example-python:dev read --config /secrets/config.json --catalog /sample_files/configured_catalog.json\n")),(0,a.kt)("p",null,"Note: Each time you make a change to your implementation you need to re-build the connector image. ",(0,a.kt)("inlineCode",{parentName:"p"},"docker build . -t airbyte/source-example-python:dev"),". This ensures the new python code is added into the docker container."),(0,a.kt)("p",null,"The nice thing about this approach is that you are running your source exactly as it will be run by Airbyte. The tradeoff is that iteration is slightly slower, because you need to re-build the connector between each change."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Detailed Debug Messages")),(0,a.kt)("p",null,"During development of your connector, you can enable the printing of detailed debug information during a sync by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," flag. This will allow you to get a better picture of what is happening during each step of your sync."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"python main.py read --config secrets/config.json --catalog sample_files/configured_catalog.json --debug\n")),(0,a.kt)("p",null,"In addition to the preset CDK debug statements, you can also emit custom debug information from your connector by introducing your own debug statements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'self.logger.debug(\n    "your debug message here",\n    extra={\n        "debug_field": self.value,\n        "custom_field": your_object.field\n    }\n)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TDD using standard tests")),(0,a.kt)("p",null,'Airbyte provides a standard test suite that is run against every source. The objective of these tests is to provide some "free" tests that can sanity check that the basic functionality of the source works. One approach to developing your connector is to simply run the tests between each change and use the feedback from them to guide your development.'),(0,a.kt)("p",null,"If you want to try out this approach, check out Step 8 which describes what you need to do to set up the standard tests for your source."),(0,a.kt)("p",null,"The nice thing about this approach is that you are running your source exactly as Airbyte will run it in the CI. The downside is that the tests do not run very quickly."),(0,a.kt)("h3",{id:"step-4-implement-spec"},"Step 4: Implement ",(0,a.kt)("inlineCode",{parentName:"h3"},"spec")),(0,a.kt)("p",null,"Each source contains a specification that describes what inputs it needs in order for it to pull data. This file can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/source-<source-name>/spec.yaml"),". This is a good place to start when developing your source. Using JsonSchema define what the inputs are ","(","e.g. username and password",")",". Here's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-stripe/source_stripe/spec.yaml"},"an example")," of what the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.yaml")," looks like for the stripe source."),(0,a.kt)("p",null,"For more details on what the spec is, you can read about the Airbyte Protocol ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"here"),"."),(0,a.kt)("p",null,"The generated code that Airbyte provides, handles implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," method for you. It assumes that there will be a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.yaml")," in the same directory as ",(0,a.kt)("inlineCode",{parentName:"p"},"source.py"),". If you have declared the necessary JsonSchema in ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.yaml")," you should be done with this step."),(0,a.kt)("h3",{id:"step-5-implement-check"},"Step 5: Implement ",(0,a.kt)("inlineCode",{parentName:"h3"},"check")),(0,a.kt)("p",null,"As described in the template code, this method takes in a json object called config that has the values described in the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.yaml")," filled in. In other words if the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.yaml")," said that the source requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," the config object might be ",(0,a.kt)("inlineCode",{parentName:"p"},'{ "username": "airbyte", "password": "password123" }'),". It returns a json object that reports, given the credentials in the config, whether we were able to connect to the source. For example, with the given credentials could the source connect to the database server."),(0,a.kt)("p",null,"While developing, we recommend storing this object in ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets/config.json"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets")," directory is gitignored by default."),(0,a.kt)("h3",{id:"step-6-implement-discover"},"Step 6: Implement ",(0,a.kt)("inlineCode",{parentName:"h3"},"discover")),(0,a.kt)("p",null,"As described in the template code, this method takes in the same config object as ",(0,a.kt)("inlineCode",{parentName:"p"},"check"),". It then returns a json object called a ",(0,a.kt)("inlineCode",{parentName:"p"},"catalog")," that describes what data is available and metadata on what options are available for how to replicate it."),(0,a.kt)("p",null,"For a brief overview on the catalog check out ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog"},"Beginner's Guide to the Airbyte Catalog"),"."),(0,a.kt)("h3",{id:"step-7-implement-read"},"Step 7: Implement ",(0,a.kt)("inlineCode",{parentName:"h3"},"read")),(0,a.kt)("p",null,'As described in the template code, this method takes in the same config object as the previous methods. It also takes in a "configured catalog". This object wraps the catalog emitted by the ',(0,a.kt)("inlineCode",{parentName:"p"},"discover")," step and includes configuration on how the data should be replicated. For a brief overview on the configured catalog check out ",(0,a.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog"},"Beginner's Guide to the Airbyte Catalog"),". It then returns a generator which returns each record in the stream."),(0,a.kt)("h3",{id:"step-8-set-up-standard-tests"},"Step 8: Set up Standard Tests"),(0,a.kt)("p",null,"The Standard Tests are a set of tests that run against all sources. These tests are run in the Airbyte CI to prevent regressions. They also can help you sanity check that your source works as expected. The following ",(0,a.kt)("a",{parentName:"p",href:"/connector-development/testing-connectors/source-acceptance-tests-reference"},"article")," explains Standard Tests and how to run them."),(0,a.kt)("p",null,"You can run the tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew :airbyte-integrations:connectors:source-<source-name>:integrationTest"),". Make sure to run this command from the Airbyte repository root."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In some rare cases we make exceptions and allow a source to not need to pass all the standard tests. If for some reason you think your source cannot reasonably pass one of the tests cases, reach out to us on github or slack, and we can determine whether there's a change we can make so that the test will pass or if we should skip that test for your source.")),(0,a.kt)("h3",{id:"step-9-write-unit-tests-andor-integration-tests"},"Step 9: Write unit tests and/or integration tests"),(0,a.kt)("p",null,"The Standard Tests are meant to cover the basic functionality of a source. Think of it as the bare minimum required for us to add a source to Airbyte. In case you need to test additional functionality of your source, write unit or integration tests."),(0,a.kt)("h4",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("p",null,"Add any relevant unit tests to the ",(0,a.kt)("inlineCode",{parentName:"p"},"unit_tests")," directory. Unit tests should ",(0,a.kt)("em",{parentName:"p"},"not")," depend on any secrets."),(0,a.kt)("p",null,"You can run the tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"python -m pytest -s unit_tests")),(0,a.kt)("h4",{id:"integration-tests"},"Integration Tests"),(0,a.kt)("p",null,"Place any integration tests in the ",(0,a.kt)("inlineCode",{parentName:"p"},"integration_tests")," directory such that they can be ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/6.2.x/goodpractices.html#conventions-for-python-test-discovery"},"discovered by pytest"),"."),(0,a.kt)("p",null,"Run integration tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"python -m pytest -s integration_tests"),"."),(0,a.kt)("h3",{id:"step-10-update-the-readmemd"},"Step 10: Update the ",(0,a.kt)("inlineCode",{parentName:"h3"},"README.md")),(0,a.kt)("p",null,"The template fills in most of the information for the readme for you. Unless there is a special case, the only piece of information you need to add is how one can get the credentials required to run the source. e.g. Where one can find the relevant API key, etc."),(0,a.kt)("h3",{id:"step-11-add-the-connector-to-the-apiui"},"Step 11: Add the connector to the API/UI"),(0,a.kt)("p",null,"Open the following file: ",(0,a.kt)("inlineCode",{parentName:"p"},"airbyte-config/init/src/main/resources/seed/source_definitions.yaml"),". You'll find a list of all the connectors that Airbyte displays in the UI. Pattern match to add your own connector. Make sure to generate a new ",(0,a.kt)("em",{parentName:"p"},"unique")," UUIDv4 for the ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceDefinitionId")," field. You can get one ",(0,a.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/"},"here"),". Note that modifications to source_definitions.yaml will only be picked-up the first time you start Airbyte, or when you upgrade Airbyte, or if you entirely wipe our your instance of Airbyte and start from scratch."),(0,a.kt)("p",null,"Note that for simple and quick testing use cases, you can also do this step ",(0,a.kt)("a",{parentName:"p",href:"/integrations/custom-connectors#adding-your-connectors-in-the-ui"},"using the UI"),"."),(0,a.kt)("h3",{id:"step-12-add-docs"},"Step 12: Add docs"),(0,a.kt)("p",null,"Each connector has its own documentation page. By convention, that page should have the following path: in ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/integrations/sources/<source-name>.md"),". For the documentation to get packaged with the docs, make sure to add a link to it in ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/SUMMARY.md"),". You can pattern match doing that from existing connectors."),(0,a.kt)("h2",{id:"related-tutorials"},"Related tutorials"),(0,a.kt)("p",null,"For additional examples of how to use the Python CDK to build an Airbyte source connector, see the following tutorials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/connector-development/tutorials/cdk-speedrun"},"Python CDK Speedrun: Creating a Source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://airbyte.com/tutorials/extract-data-from-the-webflow-api"},"Build a connector to extract data from the Webflow API"))))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);