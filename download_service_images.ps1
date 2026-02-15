
$baseUrl = "https://sbnhealthcaresolution.com/img/"
$files = @(
    "eligibility-verification.html",
    "medical-billing.html",
    "medical-coding.html",
    "ar-follow-up-and-denial-management.html",
    "credentialing-and-contracting.html",
    "credit-balance-resolution.html"
)

$uniqueImages = @{}

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $matches = [regex]::Matches($content, 'src=["'']img/([^"'']+)["'']')
        foreach ($match in $matches) {
            $imgName = $match.Groups[1].Value
            if (-not $uniqueImages.ContainsKey($imgName)) {
                $uniqueImages[$imgName] = $true
            }
        }
    } else {
        Write-Host "File not found: $file"
    }
}

Write-Host "Found $($uniqueImages.Count) unique images."
foreach ($img in $uniqueImages.Keys) {
    $url = "$baseUrl$img"
    $dest = "public/img/$img"
    if (-not (Test-Path $dest)) {
        Write-Host "Downloading $img..."
        try {
            Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent "Mozilla/5.0"
        } catch {
            Write-Host "Failed to download $img : $_"
        }
    } else {
        Write-Host "Skipping $img (already exists)"
    }
}
