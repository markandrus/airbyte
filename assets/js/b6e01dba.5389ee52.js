"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2183],{66864:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));const i={},l="ClickHouse",o={unversionedId:"integrations/sources/clickhouse",id:"integrations/sources/clickhouse",title:"ClickHouse",description:"Overview",source:"@site/../docs/integrations/sources/clickhouse.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/clickhouse",permalink:"/integrations/sources/clickhouse",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/clickhouse.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Chartmogul",permalink:"/integrations/sources/chartmogul"},next:{title:"Close.com",permalink:"/integrations/sources/close-com"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Resulting schema",id:"resulting-schema",level:4},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"1. Make sure your database is accessible from the machine running Airbyte",id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte",level:4},{value:"2. Create a dedicated read-only user with access to the relevant tables (Recommended but optional)",id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional",level:4},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:2},{value:"Changelog",id:"changelog",level:2},{value:"CHANGELOG source-clickhouse-strict-encrypt",id:"changelog-source-clickhouse-strict-encrypt",level:2}],p={toc:d};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhouse"},"ClickHouse"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ClickHouse source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,r.kt)("p",null,"This Clickhouse source connector is built on top of the source-jdbc code base and is configured to rely on JDBC v0.3.1 standard drivers provided by ClickHouse ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"here")," as described in ClickHouse documentation ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.tech/docs/en/interfaces/jdbc/"},"here"),"."),(0,r.kt)("h4",{id:"resulting-schema"},"Resulting schema"),(0,r.kt)("p",null,"The ClickHouse source does not alter the schema present in your warehouse. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Logical Replication ","(","WAL",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Coming soon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Connection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabled by default")))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ClickHouse Server ",(0,r.kt)("inlineCode",{parentName:"li"},"21.3.10.1")," or later."),(0,r.kt)("li",{parentName:"ol"},"Create a dedicated read-only Airbyte user with access to all tables needed for replication")),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h4",{id:"1-make-sure-your-database-is-accessible-from-the-machine-running-airbyte"},"1. Make sure your database is accessible from the machine running Airbyte"),(0,r.kt)("p",null,"This is dependent on your networking setup. The easiest way to verify if Airbyte is able to connect to your ClickHouse instance is via the check connection tool in the UI."),(0,r.kt)("h4",{id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-tables-recommended-but-optional"},"2. Create a dedicated read-only user with access to the relevant tables ","(","Recommended but optional",")"),(0,r.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Airbyte with an existing user in your database."),(0,r.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'airbyte'@'%' IDENTIFIED BY 'your_password_here';\n")),(0,r.kt)("p",null,"Then give it access to the relevant schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON <database name>.* TO 'airbyte'@'%';\n")),(0,r.kt)("p",null,"You can limit this grant down to specific tables instead of the whole database. Note that to replicate data from multiple ClickHouse databases, you can re-run the command above to grant access to all the relevant schemas, but you'll need to set up multiple sources connecting to the same db on multiple schemas."),(0,r.kt)("p",null,"Your database user should now be ready for use with Airbyte."),(0,r.kt)("h2",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,r.kt)("p",null,"Airbyte has the ability to connect to a Clickhouse instance via an SSH Tunnel. The reason you might want to do this because it is not possible ","(","or against security policy",")"," to connect to the database directly ","(","e.g. it does not have a public IP address",")","."),(0,r.kt)("p",null,"When using an SSH tunnel, you are configuring Airbyte to connect to an intermediate server ","(","a.k.a. a bastion sever",")"," that ",(0,r.kt)("em",{parentName:"p"},"does")," have direct access to the database. Airbyte connects to the bastion and then asks the bastion to connect directly to the server."),(0,r.kt)("p",null,"Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure all fields for the source as you normally would, except ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method")," defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"No Tunnel")," ","(","meaning a direct connection",")",". If you want to use an SSH Tunnel choose ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel ","(","see below for more information on generating this key",")","."),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Jump Server Host")," refers to the intermediate ","(","bastion",")"," server that Airbyte will connect to. This should be a hostname or an IP Address."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,r.kt)("inlineCode",{parentName:"li"},"22"),", so unless you have explicitly changed something, go with the default."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," is the username that Airbyte should use when connection to the bastion server. This is NOT the Clickhouse username."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"Password Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," leave this blank. Again, this is not the Clickhouse password, but the password for the OS-user that Airbyte is using to perform commands on the bastion."),(0,r.kt)("li",{parentName:"ol"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication"),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,r.kt)("inlineCode",{parentName:"li"},"-----END RSA PRIVATE KEY-----"),".")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17031"},"17031")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added custom jdbc url parameters field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16238"},"16238")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Emit state messages more frequently")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14356"},"14356")),(0,r.kt)("td",{parentName:"tr",align:"left"},"DB Sources: only show a table can sync incrementally if at least one column can be used as a cursor field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-12"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11514"},"11729")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bump mina-sshd from 2.7.0 to 2.8.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-09"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10214"},"#","10214")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix exception in case ",(0,r.kt)("inlineCode",{parentName:"td"},"password")," field is not provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-24"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"#","8958")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-15"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"#","8429")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8371"},"#","8371")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Fixed incorrect handling "\\n" in ssh key')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7327"},"#","7327")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added support for connection via SSH tunnel(aka Bastion server).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7127"},"#","7127")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added SSL connections support.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"13.08.2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4699"},"#","4699")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added json config validator.")))),(0,r.kt)("h2",{id:"changelog-source-clickhouse-strict-encrypt"},"CHANGELOG source-clickhouse-strict-encrypt"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-27"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17031"},"17031")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added custom jdbc url parameters field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16238"},"16238")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Emit state messages more frequently")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14356"},"14356")),(0,r.kt)("td",{parentName:"tr",align:"left"},"DB Sources: only show a table can sync incrementally if at least one column can be used as a cursor field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-09"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10214"},"#","10214")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix exception in case ",(0,r.kt)("inlineCode",{parentName:"td"},"password")," field is not provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,r.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9182"},"#","9182")," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8958"},"#","8958")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add support for JdbcType.ARRAY. Fixed tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8371"},"#","8371")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Fixed incorrect handling "\\n" in ssh key')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7327"},"#","7327")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added support for connection via SSH tunnel(aka Bastion server).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20.10.2021"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7127"},"#","7127")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added source-clickhouse-strict-encrypt that supports SSL connections only.")))))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,l(l({ref:e},p),{},{components:a})):n.createElement(h,l({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);