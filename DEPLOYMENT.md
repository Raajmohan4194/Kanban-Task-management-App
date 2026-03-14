# Deployment Guide - Kanban Task Manager

This guide provides step-by-step instructions for deploying the Kanban Task Manager application to Vercel or Netlify.

## Prerequisites

- GitHub account (for connecting repository)
- Vercel or Netlify account (both free)
- Project code in a GitHub repository
- Node.js v18+ (for local building/testing)

## Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Vite applications and provides instant deployment.

### Step 1: Prepare Your GitHub Repository

1. **Initialize Git (if not already done)**
```bash
cd /Users/raajmohan/Documents/VS Code/kanban\ note\ making
git init
git add .
git commit -m "Initial commit: Kanban Task Manager"
```

2. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name: `kanban-task-manager`
   - Description: "A modern Kanban board task management application"
   - Visibility: Public
   - Click "Create repository"

3. **Connect Local to GitHub**
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/kanban-task-manager.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. **Sign Up/Login to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or login with GitHub
   - Click "Continue with GitHub"
   - Authorize Vercel to access your repositories

2. **Create New Project**
   - Click "New Project"
   - Select your `kanban-task-manager` repository
   - Click "Import"

3. **Configure Project**
   - **Project Name:** kanban-task-manager (pre-filled)
   - **Framework Preset:** Vite (usually auto-detected)
   - **Root Directory:** ./ (default)
   - **Build Command:** `npm run build` (already correct)
   - **Output Directory:** `dist` (already correct)
   - **Environment Variables:** None needed

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - You'll see "Congratulations! Your project has been successfully deployed"

5. **Access Your App**
   - Click "Visit" button
   - Your app is now live at `https://kanban-task-manager-[random].vercel.app`
   - Or your custom domain if configured

### Vercel Custom Domain (Optional)

1. From project dashboard, go to **Settings**
2. Click **Domains**
3. Click **Add Domain**
4. Enter your custom domain (e.g., `kanban.mysite.com`)
5. Follow DNS configuration instructions
6. Domain should be live within 48 hours

### Vercel Automatic Deployments

- Every push to `main` branch triggers automatic deployment
- Preview deployments created for pull requests
- Rollback to previous versions anytime

---

## Option 2: Deploy to Netlify

Netlify offers similar functionality with a slightly different interface.

### Step 1: Prepare Your GitHub Repository

Follow the same GitHub setup as Vercel (Step 1 above).

### Step 2: Deploy on Netlify

1. **Sign Up/Login to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign up" or login with GitHub
   - Click "Continue with GitHub"
   - Authorize Netlify

2. **Connect Repository**
   - Click "New site from Git"
   - Select GitHub
   - Authorize access and select your repository

3. **Configure Build Settings**
   - **Repository:** kanban-task-manager ✓
   - **Branch:** main ✓
   - **Base directory:** (leave empty) ✓
   - **Build command:** `npm run build` ✓
   - **Publish directory:** `dist` ✓
   - Click "Deploy site"

4. **Wait for Deployment**
   - You'll see build progress
   - Takes 2-3 minutes typically
   - Status shows "Published"

5. **Access Your Site**
   - Netlify generates a domain: `https://[random-id].netlify.app`
   - Click the link to visit your live app

### Netlify Custom Domain (Optional)

1. Go to **Site settings**
2. Click **Domain management**
3. Click **Add domain**
4. Enter your custom domain
5. Accept Netlify's offer to add the SSL certificate
6. Update DNS records at your domain registrar
7. Domain should be live within 24 hours

### Netlify Environment Variables (if needed)

1. Go to **Site settings**
2. Click **Build & deploy**
3. Click **Environment**
4. Add variables if needed (not required for this app)

---

## Manual Deployment to Any Static Host

If you want to deploy elsewhere (AWS, Google Cloud, etc.):

### Build Locally

```bash
npm run build
```

This creates a `dist/` folder with all static files.

### What to Upload

- Upload all files from `dist/` folder to your hosting provider
- Configure server to serve `index.html` for SPA routing (important!)

### Typical Server Configuration

**For Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**For Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Deployment Checklist

Before deploying to production:

- [ ] All tests passing locally
- [ ] No console errors (test in browser DevTools)
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] Dark theme working correctly
- [ ] localStorage persistence verified
- [ ] Build runs successfully: `npm run build`
- [ ] README.md is complete
- [ ] .gitignore includes node_modules
- [ ] No sensitive data in commits
- [ ] Package.json has correct version

---

## Post-Deployment Testing

After your app is live:

1. **Test Core Features**
   - [ ] Create a task
   - [ ] Move task between columns
   - [ ] Edit and delete task
   - [ ] Search and filter working
   - [ ] Dark theme toggle works
   - [ ] Refresh page - data persists

2. **Test Performance**
   - Check page load time (should be <2s)
   - Monitor Lighthouse score (target >90)
   - Check bundle size in DevTools

3. **Test on Different Devices**
   - [ ] Desktop (Chrome, Firefox, Safari, Edge)
   - [ ] Tablet (iPad, Android)
   - [ ] Mobile (iPhone, Android)

4. **Monitor Deployment**
   - Set up Vercel/Netlify notifications
   - Monitor build status
   - Check error logs if issues occur

---

## Continuous Deployment Workflow

Once deployed:

1. **Make local changes**
```bash
# Update code locally
# Test locally: npm run dev
# Test build: npm run build
```

2. **Commit and push**
```bash
git add .
git commit -m "Feature: Add new capability"
git push origin main
```

3. **Automatic deployment**
   - Vercel/Netlify detects push
   - Automatically builds and deploys
   - Your changes go live within minutes

---

## Troubleshooting Deployment

### Issue: Build Fails

**Check build logs:**
- Vercel: Dashboard → Deployments → select failed deployment → View logs
- Netlify: Dashboard → Deploys → select failed deploy → View logs

**Common causes:**
- Missing dependencies: Run `npm install` locally
- Wrong build command: Ensure `npm run build` works locally
- Node version mismatch: Vercel uses Node 18+ by default

### Issue: 404 on Refresh

**Cause:** SPA routing not configured

**Solutions:**
- Vercel: Automatic (no action needed)
- Netlify: Add `_redirects` file:

Create file `public/_redirects`:
```
/* /index.html 200
```

### Issue: Data Not Persisting

**Check:**
- Is localStorage enabled in browser?
- Check browser's Application tab > localStorage
- Try incognito window to rule out cache issues
- Check for any errors in DevTools Console

### Issue: Styles Not Loading

- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file paths are correct
- Verify build was successful
- Check Vercel/Netlify build logs

### Issue: Slow Performance

**Optimize:**
- Run `npm run build` to verify bundle size
- Check Lighthouse score
- Monitor network tab for large files
- Contact host support if infrastructure issue

---

## Monitoring & Analytics

### Vercel Analytics (Free)

1. Dashboard → Settings → Analytics
2. Analytics automatically enabled
3. View in Dashboard → Analytics

Tracks:
- Page load times
- Core Web Vitals
- Error rates

### Netlify Analytics (Paid)

Similar features available with Netlify Pro.

---

## Updating Your Deployment

### Small Updates

1. Make local changes
2. Test locally: `npm run dev`
3. Commit: `git commit -m "message"`
4. Push: `git push origin main`
5. Auto-deployed within seconds

### Major Updates

1. Create feature branch: `git checkout -b feature/name`
2. Make changes
3. Push to GitHub
4. Create Pull Request
5. Vercel creates preview deployment
6. Review and merge
7. Main deployment updated

### Rollback to Previous Version

**Vercel:**
1. Dashboard → Deployments
2. Select previous stable deployment
3. Click three dots → Promote to Production

**Netlify:**
1. Dashboard → Deploys
2. Click on previous deployment
3. Click "Publish deploy"

---

## Environment-Specific Configurations

### Development (Local)
- Run: `npm run dev`
- Access: `http://localhost:5173`
- Hot module reloading enabled

### Production (Deployed)
- Build: `npm run build`
- Optimizations enabled
- CSS minified
- JavaScript bundled

---

## Custom Domain Configuration

### For Both Vercel and Netlify

1. **Buy domain** from Namecheap, GoDaddy, etc.
2. **Point to Vercel/Netlify**
   - Get nameservers from Vercel/Netlify
   - Update domain registrar DNS settings
   - Wait 24-48 hours for propagation
3. **Add to Vercel/Netlify**
   - Project settings → Domains
   - Add your domain
   - Enable HTTPS (automatic with both)

---

## Performance Optimization

### Cache Headers (Vercel)

Vercel automatically sets optimal cache headers:
- HTML: No cache (always fresh)
- JS/CSS: 1 year cache (versioned filenames)
- Assets: 1 year cache

### Bundle Analysis

Check bundle size:
```bash
npm run build
ls -lah dist/
```

Target: Keep under 500KB total

---

## Security Best Practices

- ✅ HTTPS enabled automatically
- ✅ No sensitive data in code
- ✅ Use environment variables for secrets
- ✅ Regular dependency updates: `npm audit fix`
- ✅ Keep Vercel/Netlify updated

---

## Useful Links

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html
- **GitHub Docs:** https://docs.github.com

---

## Support

If you need help:

1. Check Vercel/Netlify documentation
2. Review application logs in dashboard
3. Test application locally first
4. Post on community forums
5. Contact support (paid plans)

---

**Congratulations! Your Kanban Task Manager is now live! 🚀**

**Share your deployment link:** https://[your-domain].vercel.app or .netlify.app

Continue developing by:
- Making local changes
- Testing with `npm run dev`
- Pushing to GitHub
- Watching automatic deployment

Happy task managing! 📋✨
