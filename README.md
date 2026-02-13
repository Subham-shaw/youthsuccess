# 🚀 YouthSuccess Eccomerce Pvt. Ltd.

A production-ready Next.js application.

------------------------------------------------------------------------

# 📦 Tech Stack

-   Next.js
-   Node.js
-   React

------------------------------------------------------------------------

# 🛠️ System Requirements

Make sure your server has:

-   Node.js 18 or higher
-   npm (comes with Node)

Check versions:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

# 🏗️ Build for Production

Build the optimized production version:

``` bash
npm run build
```

This generates an optimized `.next` build folder.

------------------------------------------------------------------------

# ▶️ Run in Production

Start the production server:

``` bash
npm start
```

By default, the app runs at:

http://localhost:3000

To change the port:

``` bash
PORT=4000 npm start
```

------------------------------------------------------------------------

# 🧠 Using PM2 (Recommended for VPS Deployment)

Install PM2 globally:

``` bash
npm install -g pm2
```

Start the app:

``` bash
pm2 start npm --name "next-app" -- start
```

Save the PM2 process list:

``` bash
pm2 save
```

Enable startup on reboot:

``` bash
pm2 startup
```

Restart the app anytime:

``` bash
pm2 restart next-app
```

------------------------------------------------------------------------

# 🌐 Using Nginx as Reverse Proxy (Optional but Recommended)

Example Nginx configuration:

``` nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

After adding the config:

``` bash
sudo systemctl restart nginx
```

------------------------------------------------------------------------

# 🐳 Docker (Optional)

Build the Docker image:

``` bash
docker build -t next-app .
```

Run the container:

``` bash
docker run -p 3000:3000 next-app
```

------------------------------------------------------------------------

# 🧪 Development Mode

For local development:

``` bash
npm run dev
```

Runs at:

http://localhost:3000