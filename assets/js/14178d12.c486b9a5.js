"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6342],{30120:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(83117),n=(a(67294),a(3905));const i={},l="Databricks Lakehouse",o={unversionedId:"integrations/destinations/databricks",id:"integrations/destinations/databricks",title:"Databricks Lakehouse",description:"Overview",source:"@site/../docs/integrations/destinations/databricks.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/databricks",permalink:"/integrations/destinations/databricks",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/databricks.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ClickHouse",permalink:"/integrations/destinations/clickhouse"},next:{title:"DynamoDB",permalink:"/integrations/destinations/dynamodb"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Sync Mode",id:"sync-mode",level:2},{value:"Data Source",id:"data-source",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Staging Parquet Files (Delta Format)",id:"staging-parquet-files-delta-format",level:2},{value:"Unmanaged Spark SQL Table",id:"unmanaged-spark-sql-table",level:2},{value:"Output Schema",id:"output-schema",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Related tutorial",id:"related-tutorial",level:2},{value:"CHANGELOG",id:"changelog",level:2}],p={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"databricks-lakehouse"},"Databricks Lakehouse"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This destination syncs data to Delta Lake on Databricks Lakehouse. Each stream is written to its own ",(0,n.kt)("a",{parentName:"p",href:"https://delta.io/"},"delta-table"),"."),(0,n.kt)("p",null,"This connector requires a JDBC driver to connect to the Databricks cluster. By using the driver and the connector, you must agree to the ",(0,n.kt)("a",{parentName:"p",href:"https://databricks.com/jdbc-odbc-driver-license"},"JDBC ODBC driver license"),". This means that you can only use this connector to connect third party applications to Apache Spark SQL within a Databricks offering using the ODBC and/or JDBC protocols."),(0,n.kt)("p",null,"Currently, this connector requires 30+MB of memory for each stream. When syncing multiple streams, it may run into an out-of-memory error if the allocated memory is too small. This performance bottleneck is tracked in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/11424"},"this issue"),". Once this issue is resolved, the connector should be able to sync an almost infinite number of streams with less than 500MB of memory."),(0,n.kt)("h2",{id:"sync-mode"},"Sync Mode"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured bucket path.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"data-source"},"Data Source"),(0,n.kt)("p",null,"Databricks Delta Lake supports various cloud storage as the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.databricks.com/data/data-sources/index.html"},"data source"),". Currently, only Amazon S3 is supported by this connector."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Category"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Databricks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Hostname"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"abc-12345678-wxyz.cloud.databricks.com"),". See ",(0,n.kt)("a",{parentName:"td",href:"https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url"},"documentation"),". Please note that this is the server for the Databricks Cluster. It is different from the SQL Endpoint Cluster.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"HTTP Path"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"sql/protocolvx/o/1234567489/0000-1111111-abcd90"),". See ",(0,n.kt)("a",{parentName:"td",href:"https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url"},"documentation"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Optional. Default to "443". See ',(0,n.kt)("a",{parentName:"td",href:"https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url"},"documentation"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personal Access Token"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Required. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"dapi0123456789abcdefghij0123456789AB"),". See ",(0,n.kt)("a",{parentName:"td",href:"https://docs.databricks.com/sql/user/security/personal-access-tokens.html"},"documentation"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"General"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Database schema"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Optional. Default to "public". Each data stream will be written to a table under this database schema.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Purge Staging Data"),(0,n.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The connector creates staging files and tables on S3. By default, they will be purged when the data sync is complete. Set it to ",(0,n.kt)("inlineCode",{parentName:"td"},"false")," for debugging purposes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Source - S3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bucket Name"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket to sync data into.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bucket Path"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subdirectory under the above bucket to sync the data into.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"See ",(0,n.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"documentation")," for all region codes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Access Key ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS/Minio credential.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"Secret Access Key"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS/Minio credential.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"S3 Filename pattern"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The pattern allows you to set the file-name format for the S3 staging file(s), next placeholders combinations are currently supported: {date}, {date:yyyy_MM}, {timestamp}, {timestamp:millis}, {timestamp:micros}, {part_number}, {sync_id}, {format_extension}. Please, don't use empty space and not supportable placeholders, as they won't recognized.")))),(0,n.kt)("p",null,'\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured bucket and path will be wiped out before each sync. We recommend you provision a dedicated S3 resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f'),(0,n.kt)("h2",{id:"staging-parquet-files-delta-format"},"Staging Parquet Files (Delta Format)"),(0,n.kt)("p",null,"Data streams are first written as staging delta-table (",(0,n.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Parquet")," + ",(0,n.kt)("a",{parentName:"p",href:"https://databricks.com/blog/2019/08/21/diving-into-delta-lake-unpacking-the-transaction-log.html"},"Transaction Log"),") files on S3, and then loaded into Databricks delta-tables. All the staging files will be deleted after the sync is done. For debugging purposes, here is the full path for a staging file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"s3://<bucket-name>/<bucket-path>/<uuid>/<stream-name>\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"s3://testing_bucket/data_output_path/98c450be-5b1c-422d-b8b5-6ca9903727d9/users/_delta_log\n     \u2191              \u2191                \u2191                                    \u2191     \u2191\n     |              |                |                                    |     transaction log\n     |              |                |                                    stream name\n     |              |                database schema\n     |              bucket path\n     bucket name\n")),(0,n.kt)("h2",{id:"unmanaged-spark-sql-table"},"Unmanaged Spark SQL Table"),(0,n.kt)("p",null,"Currently, all streams are synced into unmanaged Spark SQL tables. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.databricks.com/data/tables.html#managed-and-unmanaged-tables"},"documentation")," for details. In summary, you have full control of the location of the data underlying an unmanaged table. The full path of each data stream is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"s3://<bucket-name>/<bucket-path>/<database-schema>/<stream-name>\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"s3://testing_bucket/data_output_path/public/users\n     \u2191              \u2191                \u2191      \u2191\n     |              |                |      stream name\n     |              |                database schema\n     |              bucket path\n     bucket name\n")),(0,n.kt)("p",null,"Please keep these data directories on S3. Otherwise, the corresponding tables will have no data in Databricks."),(0,n.kt)("h2",{id:"output-schema"},"Output Schema"),(0,n.kt)("p",null,"Each table will have the following columns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Column"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UUID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,n.kt)("td",{parentName:"tr",align:"center"},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data emission timestamp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data fields from the source stream"),(0,n.kt)("td",{parentName:"tr",align:"center"},"various"),(0,n.kt)("td",{parentName:"tr",align:"left"},"All fields in the staging Parquet files will be expanded in the table.")))),(0,n.kt)("p",null,"Under the hood, an Airbyte data stream in Json schema is first converted to an Avro schema, then the Json object is converted to an Avro record, and finally the Avro record is outputted to the Parquet format. Because the data stream can come from any data source, the Json to Avro conversion process has arbitrary rules and limitations. Learn more about how source data is converted to Avro and the current limitations ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/json-avro-conversion"},"here"),"."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Credentials for a Databricks cluster. See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.databricks.com/clusters/create.html"},"documentation"),"."),(0,n.kt)("li",{parentName:"ol"},"Credentials for an S3 bucket. See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"documentation"),"."),(0,n.kt)("li",{parentName:"ol"},"Grant the Databricks cluster full access to the S3 bucket. Or mount it as Databricks File System ","(","DBFS",")",". See ",(0,n.kt)("a",{parentName:"li",href:"https://docs.databricks.com/data/data-sources/aws/amazon-s3.html"},"documentation"),".")),(0,n.kt)("h2",{id:"related-tutorial"},"Related tutorial"),(0,n.kt)("p",null,"Suppose you are interested in learning more about the Databricks connector or details on how the Delta Lake tables are created. You may want to consult the tutorial on ",(0,n.kt)("a",{parentName:"p",href:"https://airbyte.com/tutorials/load-data-into-delta-lake-on-databricks-lakehouse"},"How to Load Data into Delta Lake on Databricks Lakehouse"),"."),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"(unpublished)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16243"},"#","16243")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix Json to Avro conversion when there is field name clash from combined restrictions (",(0,n.kt)("inlineCode",{parentName:"td"},"anyOf"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"oneOf"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"allOf")," fields)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14801"},"#","14801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix multiply log bindings")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14494"},"#","14494")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Make S3 output filename configurable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14618"},"#","14618")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed additionalProperties: false from JDBC destination connectors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13852"},"#","13852")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13722"},"#","13722")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Rename to "Databricks Lakehouse".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13630"},"#","13630")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Rename to "Databricks Delta Lake" and add field orders in the spec.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12861"},"#","12861")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use new public Databricks JDBC driver, and open source the connector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12578"},"#","12578")),(0,n.kt)("td",{parentName:"tr",align:"left"},"In JSON to Avro conversion, log JSON field values that do not follow Avro schema for debugging.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"#","10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7622"},"#","7622")," ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/9153"},"#","9153")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Upgrade Spark JDBC driver to ",(0,n.kt)("inlineCode",{parentName:"td"},"2.6.21")," to patch Log4j vulnerability; update connector fields title/description.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7288"},"#","7288")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Support Json ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalProperties"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6792"},"#","6792")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Require users to accept Databricks JDBC Driver ",(0,n.kt)("a",{parentName:"td",href:"https://databricks.com/jdbc-odbc-driver-license"},"Terms & Conditions"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5998"},"#","5998")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial private release.")))))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=s(a),k=n,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return a?r.createElement(u,l(l({ref:e},p),{},{components:a})):r.createElement(u,l({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);