# yarn openapi-generator-cli generate \
#     -i openapi/dist/index.yaml \
#     -g typescript-axios \
#     -o frontend/lib/infra/schemas

yarn openapi-typescript \
    openapi/dist/index.yaml \
    -o frontend/lib/infra/schemas.ts