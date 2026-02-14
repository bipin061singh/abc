# Critical Project Information - Never Forget

## Snake Game Project
- **Location**: `/home/ubuntu/openclaw-repo`
- **Branch**: `openclaw/demo-1771075580`
- **Remote**: `git@git-openclaw:bipin061singh/abc.git`

## SSH Configuration (Permanent)
- **SSH Key**: `~/.ssh/openclaw_git` (working)
- **SSH Host**: `git-openclaw` → `github.com`
- **Authentication**: Already configured and working

## Auto-Push Protocol
1. Always check remote: `git remote -v` → `git@git-openclaw:...`
2. Test SSH: `ssh -T git@git-openclaw` → should work
3. Ensure SSH agent has `openclaw_git` key
4. Push to: `openclaw/demo-1771075580`

## Emergency Fix
If authentication fails:
1. `eval $(ssh-agent -s)`
2. `ssh-add ~/.ssh/openclaw_git`
3. Test SSH
4. Push again

## Never Forget This Location
This is the permanent project location. Never search elsewhere!