# SSH Authentication - Permanent Configuration

## Working Setup (Never Change!)
- **Remote URL**: `git@git-openclaw:bipin061singh/abc.git`
- **SSH Key**: `~/.ssh/openclaw_git` (already configured)
- **SSH Host**: `git-openclaw` → `github.com` with correct key

## Verification Commands (Always Run First)
```bash
# Check remote is correct
cd /home/ubuntu/openclaw-repo && git remote -v

# Test SSH authentication
ssh -T git@git-openclaw

# Check SSH agent has key
ssh-add -l
```

## Auto-Push Protocol (Never Forget)
1. Verify remote shows `git@git-openclaw:...`
2. Test SSH authentication works
3. Ensure SSH agent has `openclaw_git` key
4. Only then: `git push origin openclaw/demo-1771075580`

## Critical Rules (Never Violate)
- Never generate new SSH keys
- Never switch to HTTPS/personal access tokens
- Never use `git@github.com` remote
- Never modify authentication without explicit instruction

## Emergency Fix
If push fails:
1. `eval $(ssh-agent -s)`
2. `ssh-add ~/.ssh/openclaw_git`
3. Test SSH again
4. Push to correct remote

This configuration is permanent and working. Never modify it unless explicitly instructed.