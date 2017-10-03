dotnet restore
dotnet publish -o ./publish

docker build -f Dockerfile.build -t savingmy-info-build .

docker create --name savingmy-info-build-container savingmy-info-build
rd /s /q ./publish
docker cp savingmy-info-build-container:/out ./publish

docker build -t 445932717067.dkr.ecr.us-east-1.amazonaws.com/innovate2017/savingmy-info:latest .

