
$baseUrl = "https://sbnhealthcaresolution.com/img/"
$images = @("logo.png", "bg1.jpg", "intro-img.jpg", "feature1.jpg", "feature2.jpg", "feature3.jpg", "service1.jpg", "service2.jpg", "service3.jpg", "service4.jpg")
$outputDir = "public/img"

if (!(Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

foreach ($img in $images) {
    $url = "$baseUrl$img"
    $output = "$outputDir/$img"
    Write-Host "Downloading $url to $output"
    try {
        Invoke-WebRequest -Uri $url -OutFile $output
    } catch {
        Write-Host "Error downloading $img : $_"
    }
}
