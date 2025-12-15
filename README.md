# nevans-tech
Code for nevans-tech.com

## Setup
1. Install and authenticate to AWS CLI
2. Create an SSH key in the AWS EC2 Key Pairs feature
3. Create an AWS CloudFormation stack with the cloudformation.yaml file
4. Build Docker images and push to AWS ECR
    docker build . --tag nevans-tech/web:1.0


## To-Do
[x] Create basic frontend\
[ ] Add portfolio of projects (code, installs, managed systems, etc)\
[ ] Enforce PQC KEM algorithm\
[ ] Add blog section with articles (encryption techncial details/pcaps, hosting on AWS, other highly technical networking concepts)\
[ ] Add dark mode