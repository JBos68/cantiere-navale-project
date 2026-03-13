@REM ----------------------------------------------------------------------------
@REM Maven Start Up Batch script
@REM ----------------------------------------------------------------------------
@echo off
setlocal

set MAVEN_WRAPPER_JAR="%USERPROFILE%\.m2\wrapper\dists\apache-maven-3.9.9-bin\maven-wrapper.jar"
set MAVEN_WRAPPER_PROPERTIES="%~dp0.mvn\wrapper\maven-wrapper.properties"

for /f "usebackq tokens=1,2 delims==" %%a in (%MAVEN_WRAPPER_PROPERTIES%) do (
  if "%%a"=="distributionUrl" set DISTRIBUTION_URL=%%b
)

set WRAPPER_LAUNCHER=org.apache.maven.wrapper.MavenWrapperMain

set DOWNLOAD_URL="https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.3.2/maven-wrapper-3.3.2.jar"

set WRAPPER_DIR="%USERPROFILE%\.m2\wrapper\dists"
if not exist %WRAPPER_DIR% mkdir %WRAPPER_DIR%

set JAR_PATH="%USERPROFILE%\.m2\wrapper\dists\maven-wrapper.jar"
if not exist %JAR_PATH% (
  echo Downloading Maven Wrapper...
  powershell -Command "Invoke-WebRequest -Uri %DOWNLOAD_URL% -OutFile %JAR_PATH%"
)

java -cp %JAR_PATH% %WRAPPER_LAUNCHER% %*

endlocal
