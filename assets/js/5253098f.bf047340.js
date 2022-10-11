"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9736],{76613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(83117),i=(n(67294),n(3905));const a={},r="On Kubernetes (Beta)",l={unversionedId:"deploying-airbyte/on-kubernetes",id:"deploying-airbyte/on-kubernetes",title:"On Kubernetes (Beta)",description:"Overview",source:"@site/../docs/deploying-airbyte/on-kubernetes.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-kubernetes",permalink:"/deploying-airbyte/on-kubernetes",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On GCP (Compute Engine)",permalink:"/deploying-airbyte/on-gcp-compute-engine"},next:{title:"On Plural",permalink:"/deploying-airbyte/on-plural"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Cluster Setup",id:"cluster-setup",level:3},{value:"Install <code>kubectl</code>",id:"install-kubectl",level:3},{value:"Configure <code>kubectl</code>",id:"configure-kubectl",level:3},{value:"Configure Logs",id:"configure-logs",level:3},{value:"Default Configuration",id:"default-configuration",level:4},{value:"Custom Configuration",id:"custom-configuration",level:4},{value:"Configuring Custom Minio Log Location",id:"configuring-custom-minio-log-location",level:5},{value:"Configuring Custom S3 Log Location",id:"configuring-custom-s3-log-location",level:5},{value:"Configuring Custom GCS Log Location",id:"configuring-custom-gcs-log-location",level:5},{value:"Launch Airbyte",id:"launch-airbyte",level:3},{value:"Production Airbyte on Kubernetes",id:"production-airbyte-on-kubernetes",level:2},{value:"Setting resource limits",id:"setting-resource-limits",level:3},{value:"Increasing job parallelism",id:"increasing-job-parallelism",level:3},{value:"Cloud logging",id:"cloud-logging",level:3},{value:"Using an external DB",id:"using-an-external-db",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Customizing Airbyte Manifests",id:"customizing-airbyte-manifests",level:2},{value:"View Raw Manifests",id:"view-raw-manifests",level:3},{value:"Helm Charts",id:"helm-charts",level:3},{value:"Operator Guide",id:"operator-guide",level:2},{value:"View API Server Logs",id:"view-api-server-logs",level:3},{value:"Connector Container Logs",id:"connector-container-logs",level:3},{value:"Upgrading Airbyte Kube",id:"upgrading-airbyte-kube",level:3},{value:"Resizing Volumes",id:"resizing-volumes",level:3},{value:"Copy Files To/From Volumes",id:"copy-files-tofrom-volumes",level:3},{value:"Listing Files",id:"listing-files",level:3},{value:"Reading Files",id:"reading-files",level:3},{value:"Persistent storage on GKE regional cluster",id:"persistent-storage-on-gke-regional-cluster",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Developing Airbyte on Kubernetes",id:"developing-airbyte-on-kubernetes",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-kubernetes-beta"},"On Kubernetes (Beta)"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Airbyte allows scaling sync workloads horizontally using Kubernetes. The core components ","(","api server, scheduler, etc",")"," run as deployments while the scheduler launches connector-related pods on different nodes."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"If you don't want to configure your own K8s cluster and Airbyte instance, you can use the free, open-source project ",(0,i.kt)("a",{parentName:"p",href:"https://www.plural.sh/"},"Plural")," to bring up a K8s cluster and Airbyte for you. Use ",(0,i.kt)("a",{parentName:"p",href:"/deploying-airbyte/on-plural"},"this guide")," to get started."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"cluster-setup"},"Cluster Setup"),(0,i.kt)("p",null,"For local testing we recommend following one of the following setup guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/kubernetes"},"Docker Desktop ","(","Mac",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start"},"Minikube"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NOTE: Start Minikube with at least 4gb RAM with ",(0,i.kt)("inlineCode",{parentName:"li"},"minikube start --memory=4000")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind"))),(0,i.kt)("p",null,"For testing on GKE you can ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster"},"create a cluster with the command line or the Cloud Console UI"),"."),(0,i.kt)("p",null,"For testing on EKS you can ",(0,i.kt)("a",{parentName:"p",href:"https://eksctl.io/introduction/"},"install eksctl")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"eksctl create cluster")," to create an EKS cluster/VPC/subnets/etc. This process should take 10-15 minutes."),(0,i.kt)("p",null,"For production, Airbyte should function on most clusters v1.19 and above. We have tested support on GKE and EKS. If you run into a problem starting Airbyte, please reach out on the ",(0,i.kt)("inlineCode",{parentName:"p"},"#troubleshooting")," channel on our ",(0,i.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=type%2Fbug&template=bug-report.md&title="},"create an issue on GitHub"),"."),(0,i.kt)("h3",{id:"install-kubectl"},"Install ",(0,i.kt)("inlineCode",{parentName:"h3"},"kubectl")),(0,i.kt)("p",null,"If you do not already have the CLI tool ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," installed, please follow ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"these instructions to install"),"."),(0,i.kt)("h3",{id:"configure-kubectl"},"Configure ",(0,i.kt)("inlineCode",{parentName:"h3"},"kubectl")),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your cluster by using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl use-context my-cluster-name"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For GKE"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"gcloud")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"gcloud auth login"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the Google Cloud Console, the cluster page will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," button, which will give a command to run locally that looks like"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"gcloud container clusters get-credentials CLUSTER_NAME --zone ZONE_NAME --project PROJECT_NAME"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to show the contexts available.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config use-context <gke context>")," to access the cluster from ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For EKS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"},"Configure your AWS CLI")," to connect to your project."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://eksctl.io/introduction/"},"eksctl")),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"eksctl utils write-kubeconfig --cluster=<CLUSTER NAME>")," to make the context available to ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config get-contexts")," to show the contexts available."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config use-context <eks context>")," to access the cluster with ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),".")))),(0,i.kt)("h3",{id:"configure-logs"},"Configure Logs"),(0,i.kt)("h4",{id:"default-configuration"},"Default Configuration"),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," versions of Airbyte include a stand-alone ",(0,i.kt)("inlineCode",{parentName:"p"},"Minio")," deployment. Airbyte publishes logs to this ",(0,i.kt)("inlineCode",{parentName:"p"},"Minio")," deployment by default. This means Airbyte comes as a ",(0,i.kt)("strong",{parentName:"p"},"self-contained Kubernetes deployment - no other configuration is required"),"."),(0,i.kt)("p",null,"So if you just want logs to be sent to the local ",(0,i.kt)("inlineCode",{parentName:"p"},"Minio")," deployment, you do not need to change the values of any environment variables from what is currently on master."),(0,i.kt)("h4",{id:"custom-configuration"},"Custom Configuration"),(0,i.kt)("p",null,"Alternatively, if you want logs to be sent to a custom location, Airbyte currently supports logging to ",(0,i.kt)("inlineCode",{parentName:"p"},"Minio"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"S3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"GCS"),". The following instructions are for users wishing to log to their own ",(0,i.kt)("inlineCode",{parentName:"p"},"Minio")," layer, ",(0,i.kt)("inlineCode",{parentName:"p"},"S3")," bucket or ",(0,i.kt)("inlineCode",{parentName:"p"},"GCS")," bucket."),(0,i.kt)("p",null,"The provided credentials require both read and write permissions. The logger attempts to create the log bucket if it does not exist."),(0,i.kt)("h5",{id:"configuring-custom-minio-log-location"},"Configuring Custom Minio Log Location"),(0,i.kt)("p",null,"To write to a custom minio log location, replace the following variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube/overlays/stable")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"S3_LOG_BUCKET=<your_minio_bucket_to_write_logs_in>\nAWS_ACCESS_KEY_ID=<your_minio_access_key>\nAWS_SECRET_ACCESS_KEY=<your_minio_secret_key>\nS3_MINIO_ENDPOINT=<endpoint_where_minio_is_deployed_at>\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"S3_PATH_STYLE_ACCESS")," variable should remain ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"S3_LOG_BUCKET_REGION")," variable should remain empty."),(0,i.kt)("h5",{id:"configuring-custom-s3-log-location"},"Configuring Custom S3 Log Location"),(0,i.kt)("p",null,"To write to a custom S3 log location, replace the following variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube/overlays/stable")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"S3_LOG_BUCKET=<your_s3_bucket_to_write_logs_in>\nS3_LOG_BUCKET_REGION=<your_s3_bucket_region>\n# Set this to empty.\nS3_MINIO_ENDPOINT=\n# Set this to empty.\nS3_PATH_STYLE_ACCESS=\n")),(0,i.kt)("p",null,"Additionally, replace the following variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube/overlays/stable")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"AWS_ACCESS_KEY_ID=<your_aws_access_key_id>\nAWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"here")," for instructions on creating an S3 bucket and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"here")," for instructions on creating AWS credentials."),(0,i.kt)("h5",{id:"configuring-custom-gcs-log-location"},"Configuring Custom GCS Log Location"),(0,i.kt)("p",null,"Create the GCP service account with read/write permission to the GCS log bucket."),(0,i.kt)("p",null,"1",")"," Base64 encode the GCP json secret."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# The output of this command will be a Base64 string.\n$ cat gcp.json | base64\n")),(0,i.kt)("p",null,"2",")"," Populate the gcs-log-creds secrets with the Base64-encoded credential. This is as simple as taking the encoded credential from the previous step and adding it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"secret-gcs-log-creds.yaml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: gcs-log-creds\n  namespace: default\ndata:\n  gcp.json: <base64-encoded-string>\n")),(0,i.kt)("p",null,"3",")"," Replace the following variables in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube/overlays/stable")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"GCS_LOG_BUCKET=<your_GCS_bucket_to_write_logs_in>\n")),(0,i.kt)("p",null,"4",")"," Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},".secrets")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube/overlays/stable")," directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# The path the GCS creds are written to. Unless you know what you are doing, use the below default value.\nGOOGLE_APPLICATION_CREDENTIALS=/secrets/gcs-log-creds/gcp.json\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"here")," for instruction on creating a GCS bucket and ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-account-keys-create-console"},"here")," for instruction on creating GCP credentials."),(0,i.kt)("h3",{id:"launch-airbyte"},"Launch Airbyte"),(0,i.kt)("p",null,"Run the following commands to launch Airbyte:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\nkubectl apply -k kube/overlays/stable\n")),(0,i.kt)("p",null,"After 2-5 minutes, ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods | grep airbyte")," should show ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," as the status for all the core Airbyte pods. This may take longer on Kubernetes clusters with slow internet connections."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl port-forward svc/airbyte-webapp-svc 8000:80")," to allow access to the UI/API."),(0,i.kt)("p",null,"Now visit ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")," in your browser and start moving some data!"),(0,i.kt)("h2",{id:"production-airbyte-on-kubernetes"},"Production Airbyte on Kubernetes"),(0,i.kt)("h3",{id:"setting-resource-limits"},"Setting resource limits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core container pods",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Instead of launching Airbyte with ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl apply -k kube/overlays/stable"),", you can run with ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl apply -k kube/overlays/stable-with-resource-limits"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"kube/overlays/stable-with-resource-limits/set-resource-limits.yaml")," file can be modified to provide different resource requirements for core pods."))),(0,i.kt)("li",{parentName:"ul"},"Connector pods",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"By default, connector pods launch without resource limits."),(0,i.kt)("li",{parentName:"ul"},'To add resource limits, configure the "Docker Resource Limits" section of the ',(0,i.kt)("inlineCode",{parentName:"li"},".env")," file in the overlay folder you're using."))),(0,i.kt)("li",{parentName:"ul"},"Volume sizes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can modify ",(0,i.kt)("inlineCode",{parentName:"li"},"kube/resources/volume-*")," files to specify different volume sizes for the persistent volumes backing Airbyte.")))),(0,i.kt)("h3",{id:"increasing-job-parallelism"},"Increasing job parallelism"),(0,i.kt)("p",null,"The number of simultaneous jobs ","(","getting specs, checking connections, discovering schemas, and performing syncs",")"," is limited by a few factors. First of all, jobs are picked up and executed by airbyte-worker pods, so increasing the number of workers will allow more jobs to be processed in parallel."),(0,i.kt)("p",null,"The number of worker pods can be changed by increasing the number of replicas for the ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte-worker")," deployment. An example of a Kustomization patch that increases this number can be seen in ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte/kube/overlays/dev-integration-test/kustomization.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte/kube/overlays/dev-integration-test/parallelize-worker.yaml"),". The number of simultaneous jobs on a specific worker pod is also limited by the number of ports exposed by the worker deployment and set by ",(0,i.kt)("inlineCode",{parentName:"p"},"TEMPORAL_WORKER_PORTS")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file. Without additional ports used to communicate to connector pods, jobs will start to run but will hang until ports become available."),(0,i.kt)("p",null,"You can also tune environment variables for the max simultaneous job types that can run on the worker pod by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_SPEC_WORKERS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_CHECK_WORKERS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_DISCOVER_WORKERS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MAX_SYNC_WORKERS")," for the worker pod deployment ","(","not in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file",")",". These values can be used if you want to create separate worker deployments for separate types of workers with different resource allocations."),(0,i.kt)("h3",{id:"cloud-logging"},"Cloud logging"),(0,i.kt)("p",null,"Airbyte writes logs to two directories. App logs, including server and scheduler logs, are written to the ",(0,i.kt)("inlineCode",{parentName:"p"},"app-logging")," directory. Job logs are written to the ",(0,i.kt)("inlineCode",{parentName:"p"},"job-logging")," directory. Both directories live at the top-level e.g., the ",(0,i.kt)("inlineCode",{parentName:"p"},"app-logging")," directory lives at ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://log-bucket/app-logging")," etc. These paths can change, so we recommend having a dedicated log bucket, and to not use this bucket for other purposes."),(0,i.kt)("p",null,"Airbyte publishes logs every minute. This means it is normal to see minute-long log delays. Each publish creates it's own log file, since Cloud Storages do not support append operations. This also mean it is normal to see hundreds of files in your log bucket."),(0,i.kt)("p",null,"Each log file is named ",(0,i.kt)("inlineCode",{parentName:"p"},"{yyyyMMddHH24mmss}_{podname}_{UUID}")," and is not compressed. Users can view logs simply by navigating to the relevant folder and downloading the file for the time period in question."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/deploying-airbyte/on-kubernetes#known-issues"},"Known Issues")," section for planned logging improvements."),(0,i.kt)("h3",{id:"using-an-external-db"},"Using an external DB"),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3605"},"Issue ","#","3605")," is completed, users will be able to configure custom dbs instead of a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres")," container running directly in Kubernetes. This separate instance ","(","preferable on a system like AWS RDS or Google Cloud SQL",")"," should be easier and safer to maintain than Postgres on your cluster."),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"As we improve our Kubernetes offering, we would like to point out some common pain points. We are working on improving these. Please let us know if there are any other issues blocking your adoption of Airbyte or if you would like to contribute fixes to address any of these issues."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some UI operations have higher latency on Kubernetes than Docker-Compose. ","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/4233"},"#","4233"),")"),(0,i.kt)("li",{parentName:"ul"},"Logging to Azure Storage is not supported. ","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/4200"},"#","4200"),")"),(0,i.kt)("li",{parentName:"ul"},"Large log files might take a while to load. ","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/4201"},"#","4201"),")"),(0,i.kt)("li",{parentName:"ul"},"UI does not include configured buckets in the displayed log path. ","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/4204"},"#","4204"),")"),(0,i.kt)("li",{parentName:"ul"},"Logs are not reset when Airbyte is re-deployed. ","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/4235"},"#","4235"),")"),(0,i.kt)("li",{parentName:"ul"},"File sources reading from and file destinations writing to local mounts are not supported on Kubernetes."),(0,i.kt)("li",{parentName:"ul"},"Cannot run custom DBT transformation. ","(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/5091"},"#","5091"),")")),(0,i.kt)("h2",{id:"customizing-airbyte-manifests"},"Customizing Airbyte Manifests"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://kustomize.io/"},"Kustomize")," to allow overrides for different environments. Our shared resources are in the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube/resources")," directory, and we define overlays for each environment. We recommend creating your own overlay if you want to customize your deployments. This overlay can live in your own VCS."),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\n\nbases:\n  - https://github.com/airbytehq/airbyte.git/kube/overlays/stable?ref=master\n")),(0,i.kt)("h3",{id:"view-raw-manifests"},"View Raw Manifests"),(0,i.kt)("p",null,"For a specific overlay, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl kustomize kube/overlays/stable")," to view the manifests that Kustomize will apply to your Kubernetes cluster. This is useful for debugging because it will show the exact resources you are defining."),(0,i.kt)("h3",{id:"helm-charts"},"Helm Charts"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/charts/airbyte"},"Helm Chart Readme")),(0,i.kt)("h2",{id:"operator-guide"},"Operator Guide"),(0,i.kt)("h3",{id:"view-api-server-logs"},"View API Server Logs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubectl logs deployments/airbyte-server")," to view real-time logs. Logs can also be downloaded as a text file via the Admin tab in the UI."),(0,i.kt)("h3",{id:"connector-container-logs"},"Connector Container Logs"),(0,i.kt)("p",null,"Although all logs can be accessed by viewing the scheduler logs, connector container logs may be easier to understand when isolated by accessing from the Airbyte UI or the ",(0,i.kt)("a",{parentName:"p",href:"/api-documentation"},"Airbyte API")," for a specific job attempt. Connector pods launched by Airbyte will not relay logs directly to Kubernetes logging. You must access these logs through Airbyte."),(0,i.kt)("h3",{id:"upgrading-airbyte-kube"},"Upgrading Airbyte Kube"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/operator-guides/upgrading-airbyte"},"Upgrading K8s"),"."),(0,i.kt)("h3",{id:"resizing-volumes"},"Resizing Volumes"),(0,i.kt)("p",null,"To resize a volume, change the ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.resources.requests.storage")," value. After re-applying, the mount should be extended if that operation is supported for your type of mount. For a production deployment, it's useful to track the usage of volumes to ensure they don't run out of space."),(0,i.kt)("h3",{id:"copy-files-tofrom-volumes"},"Copy Files To/From Volumes"),(0,i.kt)("p",null,"See the documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cp"},(0,i.kt)("inlineCode",{parentName:"a"},"kubectl cp")),"."),(0,i.kt)("h3",{id:"listing-files"},"Listing Files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it airbyte-server-6b5747df5c-bj4fx ls /tmp/workspace/8\n")),(0,i.kt)("h3",{id:"reading-files"},"Reading Files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it airbyte-server-6b5747df5c-bj4fx cat /tmp/workspace/8/0/logs.log\n")),(0,i.kt)("h3",{id:"persistent-storage-on-gke-regional-cluster"},"Persistent storage on GKE regional cluster"),(0,i.kt)("p",null,"Running Airbyte on GKE regional cluster requires enabling persistent regional storage. To do so, enable ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver"},"CSI driver")," on GKE. After enabling, add ",(0,i.kt)("inlineCode",{parentName:"p"},"storageClassName: standard-rwo")," to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/86ee2ad05bccb4aca91df2fb07c412efde5ba71c/kube/resources/volume-configs.yaml"},"volume-configs")," yaml."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"volume-configs.yaml")," example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: airbyte-volume-configs\n  labels:\n    airbyte: volume-configs\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\n  storageClassName: standard-rwo\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problems operating Airbyte on Kubernetes, please reach out on the ",(0,i.kt)("inlineCode",{parentName:"p"},"#issues")," channel on our ",(0,i.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=type%2Fbug&template=bug-report.md&title="},"create an issue on GitHub"),"."),(0,i.kt)("h2",{id:"developing-airbyte-on-kubernetes"},"Developing Airbyte on Kubernetes"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/contributing-to-airbyte/developing-on-kubernetes"},"Read about the Kubernetes dev cycle!")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);