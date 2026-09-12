# OpenCode Fork Auto-Update Script
# Keeps your custom modifications while pulling all new upstream changes

Write-Host "Fetching latest updates from upstream (anomalyco/opencode)..." -ForegroundColor Cyan
git fetch --depth 1 --filter=blob:none upstream dev

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to fetch from upstream. Check internet connection." -ForegroundColor Red
    exit 1
}

# Update local dev to match upstream dev
Write-Host "Syncing dev branch with upstream..." -ForegroundColor Cyan
git checkout dev
git reset --hard upstream/dev
git push origin dev

# Rebase custom changes on top of new upstream code
Write-Host "Rebasing your custom changes (my-custom-dev) on top of latest dev..." -ForegroundColor Cyan
git checkout my-custom-dev
git rebase dev

if ($LASTEXITCODE -eq 0) {
    # Force push updated rebased branch to your GitHub fork
    git push -f origin my-custom-dev
    Write-Host ""
    Write-Host "SUCCESS: Your custom fork is fully updated with the latest OpenCode code!" -ForegroundColor Green
    Write-Host "Your custom modifications are preserved on branch 'my-custom-dev'." -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Conflict detected during rebase." -ForegroundColor Yellow
    Write-Host "Resolve the conflicts in the flagged files, then run:" -ForegroundColor Yellow
    Write-Host "  git rebase --continue" -ForegroundColor White
}
