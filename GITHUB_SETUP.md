# GitHub Setup Guide for Amazon India Clone

## Issues and Solutions

### 1. **Images Not Showing**
- **Problem**: Using placeholder images from `via.placeholder.com`
- **Solution**: Replace with real screenshots

### 2. **Website Link Not Working**
- **Problem**: GitHub Pages not enabled
- **Solution**: Enable GitHub Pages in repository settings

## Step-by-Step Fix

### **Step 1: Create GitHub Repository**
```bash
# Navigate to your project folder
cd d:\PROJECT\Amazon-India-Clone

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Amazon India Clone"

# Create repository on GitHub first, then:
git remote add origin https://github.com/rupam179/amazon-india-clone.git

# Push to GitHub
git push -u origin main
```

### **Step 2: Enable GitHub Pages**
1. Go to https://github.com/rupam179/amazon-india-clone
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**
7. Wait 5-10 minutes for deployment
8. Your site will be live at: https://rupam179.github.io/amazon-india-clone

### **Step 3: Add Real Screenshots**
1. Open your website locally (`index.html`)
2. Take screenshots:
   - Desktop view (full page)
   - Mobile view (responsive)
   - Hero section
   - Product cards
3. Create `screenshots` folder in your project
4. Save images as:
   - `desktop-view.png`
   - `mobile-view.png` 
   - `hero-section.png`
   - `product-cards.png`

### **Step 4: Update README with Real Images**
Replace placeholder links with:
```markdown
![Desktop View](screenshots/desktop-view.png)
![Mobile View](screenshots/mobile-view.png)
```

### **Step 5: Push Updates**
```bash
git add .
git commit -m "Add screenshots and fix README"
git push
```

## Quick Commands
```bash
# Create screenshots folder
mkdir screenshots

# Add and commit new files
git add .
git commit -m "Add real screenshots"
git push
```

Your website will be live at: **https://rupam179.github.io/amazon-india-clone**