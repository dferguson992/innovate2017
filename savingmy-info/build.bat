dotnet restore
dotnet publish -o ./publish

docker build -f Dockerfile.build -t savingmy-info-build .

docker create --name savingmy-info-build-container savingmy-info-build
rd /s /q ./publish
docker cp savingmy-info-build-container:/out ./publish

docker build -t savingmy-info .

