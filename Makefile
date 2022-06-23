.PHONY: build-front
build-front:
ssh -i ~/.ssh/threats ubuntu@5.188.118.169 \
"cd /opt/Threat_bank; \
git pull; \
docker build -t threats-frontend-image:latest ."

.PHONY: deploy-front
deploy-front:
ssh -i ~/.ssh/threats ubuntu@5.188.118.169 \
"cd /opt/ci-helpers; \
docker stop threats-frontend; \
docker rm threats-frontend;\
docker-compose —profile frontend up -d;"