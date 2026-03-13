# start.ps1 - Avvia il backend Cantiere Navale
# Scarica Maven 3.9.9 automaticamente al primo avvio

$MAVEN_VERSION = "3.9.9"
$DIST_DIR      = Join-Path $PSScriptRoot ".mvn-dist"
$MAVEN_DIR     = Join-Path $DIST_DIR "apache-maven-$MAVEN_VERSION"
$MAVEN_ZIP     = Join-Path $DIST_DIR "apache-maven-$MAVEN_VERSION-bin.zip"
$MAVEN_URL     = "https://downloads.apache.org/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.zip"
$MVN_CMD       = Join-Path $MAVEN_DIR "bin\mvn.cmd"

if (-not (Test-Path $DIST_DIR)) {
    New-Item -ItemType Directory -Path $DIST_DIR | Out-Null
}

if (-not (Test-Path $MVN_CMD)) {
    Write-Host "[INFO] Maven $MAVEN_VERSION non trovato. Download in corso..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri $MAVEN_URL -OutFile $MAVEN_ZIP -UseBasicParsing
    if (-not $?) {
        Write-Host "[ERRORE] Download fallito. Scarica manualmente da https://maven.apache.org/download.cgi" -ForegroundColor Red
        exit 1
    }
    Write-Host "[INFO] Estrazione Maven..." -ForegroundColor Cyan
    Expand-Archive -Path $MAVEN_ZIP -DestinationPath $DIST_DIR -Force
    Remove-Item $MAVEN_ZIP
    Write-Host "[OK] Maven installato in $MAVEN_DIR" -ForegroundColor Green
}

Write-Host ""
Write-Host "[START] Backend Cantiere Navale - http://localhost:8080" -ForegroundColor Green
Write-Host "        H2 Console : http://localhost:8080/h2-console" -ForegroundColor DarkGray
Write-Host "        JDBC URL   : jdbc:h2:file:./data/cantiere-db" -ForegroundColor DarkGray
Write-Host "        Ctrl+C per fermare." -ForegroundColor DarkGray
Write-Host ""

Set-Location $PSScriptRoot
& $MVN_CMD spring-boot:run
