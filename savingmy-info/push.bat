aws ecr get-login --no-include-email --region us-east-1  > login.bat
call login.bat
del login.bat
dotnet restore
dotnet publish -o ./publish
docker build -f Dockerfile.build -t savingmy-info-build .
docker create --name savingmy-info-build-container savingmy-info-build
docker cp savingmy-info-build-container:/out ./publish
docker build -t savingmy-info .

docker tag savingmy-info 445932717067.dkr.ecr.us-east-1.amazonaws.com/savingmy-info:latest 
docker push 445932717067.dkr.ecr.us-east-1.amazonaws.com/savingmy-info:latest