# 🚀 Step-by-Step Deployment Guide

## Overview
This guide will walk you through deploying your Jevelon Technologies website to production.

## 📋 Prerequisites
- GitHub account with your code pushed
- Render account (for backend)
- Vercel account (for frontend)
- SendGrid account (for emails)

---

## 🖥️ Backend Deployment on Render

### Step 1: Sign up for Render
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Verify your email

### Step 2: Create PostgreSQL Database
1. Click **"New +"** → **"PostgreSQL"**
2. **Name**: `jevelon-db`
3. **Region**: Choose closest to your users (e.g., `Oregon (US West)`)
4. **Plan**: Free (for testing) or Paid (for production)
5. Click **"Create Database"**
6. **Copy the Internal Database URL** (you'll need this later)

### Step 3: Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Select your repository: `Jevelon Technologies Company Website`

### Step 4: Configure Web Service
Fill in these details:

**Basic Settings:**
- **Name**: `jevelon`
- **Environment**: `Python 3`
- **Region**: Same as your database
- **Branch**: `main`

**Build Settings:**
- **Root Directory**: `backend`
- **Build Command**: `chmod +x build.sh && ./build.sh`
- **Start Command**: `gunicorn jevelon_backend.wsgi:application`

### Step 5: Set Environment Variables
Click **"Environment"** tab and add:

```env
DEBUG=False
SECRET_KEY=your-super-secret-key-here-make-it-long-and-random
DATABASE_URL=postgresql://username:password@host:port/database_name
SENDGRID_API_KEY=your-sendgrid-api-key
DEFAULT_FROM_EMAIL=jevelonemmisions@gmail.com
ADMIN_EMAIL=jevelonemmisions@gmail.com
ALLOWED_HOSTS=.onrender.com
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app
```

**Important Notes:**
- **SECRET_KEY**: Generate at [djecrety.ir](https://djecrety.ir/)
- **DATABASE_URL**: Use the Internal Database URL from Step 2
- **SENDGRID_API_KEY**: Get from [SendGrid](https://sendgrid.com/)
- **ALLOWED_HOSTS**: Use `.onrender.com` (includes all Render subdomains)
- **CORS_ALLOWED_ORIGINS**: Will be your Vercel URL (we'll get this later)

**Important:**
- **SECRET_KEY**: Generate at [djecrety.ir](https://djecrety.ir/)
- **DATABASE_URL**: Use the Internal Database URL from Step 2
- **SENDGRID_API_KEY**: Get from [SendGrid](https://sendgrid.com/)
- **ALLOWED_HOSTS**: Will be `jevelon-backend.onrender.com` (or your service name)
- **CORS_ALLOWED_ORIGINS**: Will be your Vercel URL (we'll get this later)

### Step 6: Deploy
1. Click **"Create Web Service"**
2. Wait for build to complete (2-5 minutes)
3. Your backend URL will be: `https://jevelon.onrender.com`

### Step 7: Create Admin User
1. Go to your Render dashboard
2. Click on your web service
3. Go to **"Shell"** tab
4. Run:
```bash
python manage.py createsuperuser
```

### Step 8: Test Backend
1. Test health check: `https://jevelon.onrender.com/`
2. Test endpoint: `https://jevelon.onrender.com/test/`
3. Test admin: `https://jevelon.onrender.com/admin/`
4. Test API: `https://jevelon.onrender.com/api/contact/`

### Step 9: Troubleshooting Common Errors

#### 400 Bad Request Error
If you get a 400 Bad Request error, check these common issues:

1. **Environment Variables**: Ensure all required environment variables are set in Render
2. **Database Connection**: Verify DATABASE_URL is correct and database is accessible
3. **CORS Issues**: Check if your frontend domain is in CORS_ALLOWED_ORIGINS
4. **Secret Key**: Ensure SECRET_KEY is properly set (not DJANGO_SECRET_KEY)
5. **Debug Mode**: Set DEBUG=True temporarily to see detailed error messages

#### 502 Bad Gateway Error (Admin Endpoint)
If you get a 502 error for the admin endpoint:

1. **Check Render Logs**: Go to Render dashboard → Logs tab for detailed error messages
2. **Run Debug Script**: In Render shell, run: `python debug_admin.py`
3. **Check Database**: Ensure database is connected and migrations are run
4. **Create Admin User**: Run `python manage.py createsuperuser` in Render shell
5. **Check Static Files**: Ensure static files are collected properly

#### 400 Bad Request Error (Favicon)
If you get a 400 error for `/favicon.ico`:
- This is now fixed with a favicon handler
- The error was harmless but has been resolved

**Quick Debug Steps:**
```bash
# Check the health endpoint for configuration info
curl https://jevelon.onrender.com/

# Check if test endpoint works
curl https://jevelon.onrender.com/test/

# Run debug script in Render shell
python debug_admin.py

# Run status check locally
python check_status.py
```

---

## 🏗️ Frontend Deployment on Vercel

### Step 1: Sign up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Verify your email

### Step 2: Import Project
1. Click **"New Project"**
2. Import your GitHub repository
3. Select the repository: `Jevelon Technologies Company Website`

### Step 3: Configure Project
**Framework Preset**: `Vite`
**Root Directory**: `./` (leave empty)
**Build Command**: `npm run build`
**Output Directory**: `dist`
**Install Command**: `npm install`

### Step 4: Set Environment Variables
Click **"Environment Variables"** and add:

```env
VITE_API_URL=https://jevelon.onrender.com
VITE_SITE_URL=https://your-frontend-domain.vercel.app
```

**Note**: Replace `your-frontend-domain.vercel.app` with your actual Vercel domain.

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait for build to complete (1-3 minutes)
3. Your frontend URL will be: `https://your-project-name.vercel.app`

### Step 6: Update Backend CORS
1. Go back to Render dashboard
2. Update the `CORS_ALLOWED_ORIGINS` environment variable:
```env
CORS_ALLOWED_ORIGINS=https://your-project-name.vercel.app
```
3. Redeploy the backend service

---

## 🔧 Post-Deployment Setup

### Step 1: Test Everything
1. **Frontend**: Visit your Vercel URL
2. **Contact Form**: Test form submission
3. **Support Form**: Test support ticket creation
4. **Navigation**: Test all pages and links
5. **Mobile**: Test on mobile devices

### Step 2: Set up Custom Domain (Optional)
1. **Vercel**: Add custom domain in project settings
2. **Render**: Add custom domain in service settings
3. Update CORS settings with new domains

### Step 3: Monitor Performance
1. **Lighthouse**: Test performance scores
2. **Core Web Vitals**: Monitor in Google Search Console
3. **Error Tracking**: Set up monitoring tools

---

## 🚨 Troubleshooting

### Common Issues:

#### Backend Issues:
1. **Build Failures**: Check build logs in Render
2. **Database Connection**: Verify DATABASE_URL
3. **CORS Errors**: Check CORS_ALLOWED_ORIGINS
4. **Email Issues**: Verify SendGrid API key

#### Frontend Issues:
1. **Build Failures**: Check build logs in Vercel
2. **API Errors**: Verify VITE_API_URL
3. **404 Errors**: Check routing configuration
4. **Performance Issues**: Analyze bundle size

### Debug Commands:
```bash
# Check backend logs
# Go to Render dashboard → Logs tab

# Check frontend logs
# Go to Vercel dashboard → Functions tab

# Test API endpoints
curl https://jevelon.onrender.com/api/contact/
curl https://jevelon.onrender.com/api/support/tickets/
```

---

## 📊 Success Checklist

### Backend ✅
- [ ] Database connected and migrations run
- [ ] Admin user created
- [ ] API endpoints responding
- [ ] Email service configured
- [ ] CORS settings correct
- [ ] Environment variables set

### Frontend ✅
- [ ] Build successful
- [ ] All pages loading
- [ ] Forms submitting to backend
- [ ] Navigation working
- [ ] Mobile responsive
- [ ] Performance optimized

### Integration ✅
- [ ] Contact form working
- [ ] Support form working
- [ ] Consultation booking working
- [ ] No CORS errors
- [ ] All links functional

---

## 🎯 Your Live URLs

After deployment, your URLs will be:

- **Frontend**: `https://your-project-name.vercel.app`
- **Backend**: `https://jevelon.onrender.com`
- **Admin**: `https://jevelon.onrender.com/admin/`

---

**Need Help?**
- Render Docs: [docs.render.com](https://docs.render.com)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- SendGrid Docs: [sendgrid.com/docs](https://sendgrid.com/docs) 