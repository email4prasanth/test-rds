# Terraform Remote Backend Configuration - S3 for backend code 
terraform {
  backend "s3" {
    bucket  = "testrdshubinotfstore"
    key     = "backend/terraform.tfstate"
    region  = "us-east-1"
    # profile = "prasanth_rds_test"
  }
}
