Test-backend-hubino
├──.github\workflows\dev.yml
├──backend-infra/
  ├── lambda/
  │   └── test_function.py
  ├── api-lambdatest.tf
  └── backend.tf
  ├── iam.tf
  ├── lambda-test.tf
  ├── locals.tf
  ├── outputs.tf
  └── route.tf


INSERT INTO practice_software (id, readable_id, software_name, created_at, updated_at)
OVERRIDING SYSTEM VALUE
VALUES 
('11111111-1111-1111-1111-111111111111', 8, 'Carestream Dental', now(), now()),
('22222222-2222-2222-2222-222222222222', 9, 'Open Dental', now(), now());
