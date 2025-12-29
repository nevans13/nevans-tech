# nevans-tech
Code for nevans-tech.com

## Setup
Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/EnableWebsiteHosting.html
1. Create an S3 bucket, named "nevans-tech", with the default Block Public Access settings disabled
2. Add the bucket_policy.json to the Bucket Policy under Permissions
3. Enable Static Website Hosting in the S3 console
4. Upload the content in the static directory to the root of the bucket
5. Configure masked redirects for root "@" and "www" to the bucket FQDN



## To-Do
[x] Create basic frontend\
[ ] Add portfolio of projects (code, installs, managed systems, etc)\
[ ] Add blog section with articles (encryption techncial details/pcaps, hosting on AWS, other highly technical networking concepts)\
[ ] Add dark mode