# Project Location - Critical Rules

## Snake Game Project Location
- **Path**: `/home/ubuntu/openclaw-repo`
- **Branch**: `openclaw/demo-1771075580`
- **Remote**: `git@git-openclaw:bipin061singh/abc.git`

## SSH Authentication (Permanent)
- **Key**: `~/.ssh/openclaw_git` (working)
- **Host**: `git-openclaw` → `github.com`
- **Status**: Configured and operational

## Auto-Push Protocol (Always Follow)
1. Check remote: `git remote -v` → must show `git@git-openclaw`
2. Test SSH: `ssh -T git@git-openclaw` → should authenticate
3. Ensure SSH agent has `openclaw_git` key loaded
4. Push to correct branch

## Emergency Procedure
If push fails:
1. Check SSH agent: `ssh-add -l`
2. If no identities: `eval $(ssh-agent -s)` && `ssh-add ~/.ssh/openclaw_git`
3. Test connection
4. Push again

## Never Forget This Location
This is the permanent project location. Never search elsewhere or use wrong remote!