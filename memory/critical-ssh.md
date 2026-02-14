# SSH Configuration - Critical Rules

## Permanent Rules (Never Forget!)
1. **Repository**: `git@git-openclaw:bipin061singh/abc.git` 
2. **SSH Key**: `~/.ssh/openclaw_git` (already working)
3. **SSH Config**: Host `git-openclaw` points to `github.com` with correct key
4. **Auto-Push Protocol**: Always verify remote & SSH before pushing

## NEVER Do These:
- Generate new SSH keys
- Switch to HTTPS or personal access tokens
- Use `git@github.com` as remote
- Modify authentication without explicit instruction

## ALWAYS Do These:
- Check `git remote -v` shows correct remote
- Test SSH with `ssh -T git@git-openclaw`
- Ensure SSH agent has `openclaw_git` key loaded
- Push to correct branch: `openclaw/demo-1771075580`

## Emergency Fix Procedure
If authentication fails:
1. Check SSH agent: `ssh-add -l`
2. If no identities: `eval $(ssh-agent -s)` && `ssh-add ~/.ssh/openclaw_git`
3. Test connection
4. Push again

This configuration is permanent and working. Never modify it unless explicitly instructed.