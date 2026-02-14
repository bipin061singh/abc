# SSH Configuration - Critical Rules

## Permanent SSH Setup
- **Repository**: `git@git-openclaw:bipin061singh/abc.git` (NOT `git@github.com:...`)
- **SSH Key**: `~/.ssh/openclaw_git` (already configured and working)
- **SSH Config**: Host `git-openclaw` points to `github.com` with the correct key

## Auto-Push Protocol (Never Forget!)
1. Always operate in `/home/ubuntu/openclaw-repo`
2. Check remote: `git remote -v` → must show `git@git-openclaw:...`
3. Test SSH: `ssh -T git@git-openclaw` → should authenticate successfully
4. If SSH agent not running: `eval $(ssh-agent -s)` then `ssh-add ~/.ssh/openclaw_git`
5. Only then attempt `git push origin openclaw/demo-1771075580`

## Critical Rules (Never Violate!)
- ❌ NEVER generate new SSH keys
- ❌ NEVER switch to HTTPS or personal access tokens  
- ❌ NEVER use `git@github.com` as remote
- ❌ NEVER modify authentication unless explicitly instructed
- ✅ ALWAYS use existing SSH configuration
- ✅ ALWAYS verify remote and SSH before pushing

## Diagnostic Checklist
1. `git remote -v` ✓
2. `ssh -T git@git-openclaw` ✓
3. SSH agent running with correct key ✓
4. Only then push ✓

## Emergency Fix Procedure
If push fails:
1. Check if SSH agent running: `ssh-add -l`
2. If no identities: `eval $(ssh-agent -s)` && `ssh-add ~/.ssh/openclaw_git`
3. Test connection again
4. Push to correct remote

This configuration is permanent and working. Never modify it unless explicitly instructed.