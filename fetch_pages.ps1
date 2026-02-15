
$baseUrl = "https://sbnhealthcaresolution.com/"
$pages = @("about-us.html", "white-paper.html", "security.html", "career.html", "privacy-policy.html")

foreach ($page in $pages) {
    $url = "$baseUrl$page"
    $output = $page
    Write-Host "Downloading $url to $output"
    try {
        Invoke-WebRequest -Uri $url -OutFile $output
    } catch {
        Write-Host "Error downloading $page : $_"
    }
}
