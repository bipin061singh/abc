# Snake Game Project - Permanent Location

## Critical Information (Never Forget!)
- **Project Location**: `/home/ubuntu/openclaw-repo`
- **Branch**: `openclaw/demo-1771075580`
- **Remote**: `git@git-openclaw:bipin061singh/abc.git`
- **SSH Key**: `~/.ssh/openclaw_git` (already configured)

## Auto-Push Protocol (Always Follow)
1. Always operate in `/home/ubuntu/openclaw-repo`
2. Check remote: `git remote -v` → must show `git@git-openclaw:...`
3. Test SSH: `ssh -T git@git-openclaw` → should authenticate successfully
4. If SSH agent not running: `eval $(ssh-agent -s)` then `ssh-add ~/.ssh/openclaw_git`
5. Only then: `git push origin openclaw/demo-1771075580`

## Verification Commands (Always Run First)
```bash
# Check remote is correct
cd /home/ubuntu/openclaw-repo && git remote -v

# Test SSH authentication
ssh -T git@git-openclaw

# Check SSH agent has key
ssh-add -l
```

## Emergency Fix Procedure
If push fails:
1. Check if SSH agent running: `ssh-add -l`
2. If no identities: `eval $(ssh-agent -s)` && `ssh-add ~/.ssh/openclaw_git`
3. Test connection again
4. Push to correct remote

## Permanent Rules (Never Violate)
- Never generate new SSH keys
- Never switch to HTTPS/personal access tokens
- Never use `git@github.com` remote
- Never modify authentication without explicit instruction
- Always use existing SSH configuration
- Always verify remote and SSH before pushing

## Project Status
- ✅ Project exists at `/home/ubuntu/openclaw-repo`
- ✅ Branch is `openclaw/demo-1771075580`
- ✅ SSH configuration is working
- ✅ Auto-push is configured correctly

This is the permanent location and configuration. Never forget this!