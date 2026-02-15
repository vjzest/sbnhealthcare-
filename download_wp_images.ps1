
$baseUrl = "https://sbnhealthcaresolution.com/img/"
$images = @("red-white.jpg", "white-paper.jpg", "white-paper2.jpg", "white-paper3.jpg", "white-paper1.jpg")
$outputDir = "public/img"

foreach ($img in $images) {
    try {
        Invoke-WebRequest -Uri ($baseUrl + $img) -OutFile ("$outputDir/" + $img)
        Write-Host "Downloaded $img"
    } catch {
        Write-Host "Failed to download $img"
    }
}
