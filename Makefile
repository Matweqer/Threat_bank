.PHONY: build-front
build-front:
"cd /opt/Threat_bank; \
git pull; \
docker build -t threats-frontend-image:latest ."

.PHONY: deploy-front
deploy-front:
"cd /opt/ci-helpers; \
docker stop threats-frontend; \
docker rm threats-frontend;\
docker-compose --profile frontend up -d;"