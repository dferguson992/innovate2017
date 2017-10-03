FROM microsoft/aspnetcore-build:2.0
RUN mkdir app
WORKDIR /app

COPY . /app
ENTRYPOINT ["dotnet", "Frontend.dll"]