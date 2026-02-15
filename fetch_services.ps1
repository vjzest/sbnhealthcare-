
$baseUrl = "https://sbnhealthcaresolution.com/"
$pages = @(
    "eligibility-verification.html",
    "medical-billing.html",
    "medical-coding.html",
    "ar-follow-up-and-denial-management.html",
    "credentialing-and-contracting.html",
    "credit-balance-resolution.html"
)

foreach ($page in $pages) {
    $url = "$baseUrl$page"
    $output = $page
    Write-Host "Downloading $url to $output"
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -UserAgent "Mozilla/5.0"
    } catch {
        Write-Host "Error downloading $page : $_"
    }
}
