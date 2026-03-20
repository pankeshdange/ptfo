# GitHub Setup Guide 🚀

Your portfolio project is now ready to be pushed to GitHub! Follow these steps:

## 1. Install Git (if not already installed)

**Windows:**
- Download from: https://git-scm.com/download/win
- Run the installer and follow the prompts

## 2. Configure Git

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 3. Initialize Git Repository

```powershell
# Navigate to your project directory (if not already there)
git init
```

## 4. Create a Repository on GitHub

1. Go to https://github.com/new
2. Enter repository name: `developer-portfolio`
3. Add description: "My developer portfolio built with React, TypeScript, Three.js, and GSAP"
4. Choose Public (so others can see) or Private
5. Click "Create repository"

## 5. Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```powershell
git add .
git commit -m "Initial commit: Developer portfolio setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/developer-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 6. Verify

- Go to your repository on GitHub
- You should see all your files there
- The GitHub Actions CI/CD will automatically run

## What's Included

✅ `.gitignore` - Excludes node_modules, dist, build files, and environment variables
✅ `.github/CONTRIBUTING.md` - Contribution guidelines
✅ `.github/pull_request_template.md` - PR template for consistency
✅ `.github/workflows/ci.yml` - Automated CI/CD pipeline

## Future: Connect to Vercel

Your `vercel.json` is already configured. To deploy:

1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel will automatically deploy on every push to `main`

## Next Steps

- [ ] Install Git on your machine
- [ ] Create a GitHub account (if you don't have one)
- [ ] Create the repository on GitHub
- [ ] Push your code using the commands above
- [ ] (Optional) Connect Vercel for automatic deployment

Happy coding! 🎉
