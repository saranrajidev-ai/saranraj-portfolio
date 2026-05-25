# Saranraj S — Portfolio Website

A production-ready personal portfolio built with **Node.js + Express** — no frontend frameworks, no bloat.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your email credentials

# 3. (Optional) Drop your resume PDF into:
#    public/assets/Saranraj_Resume.pdf

# 4. Start the server
npm start          # production
npm run dev        # development (hot reload with nodemon)
```

Then open **http://localhost:3000**

---

## 📁 Project Structure

```
portfolio/
├── server.js              # Express server + API routes
├── package.json
├── .env.example           # Environment variable template
├── .gitignore
│
├── views/
│   └── index.html         # Single-page portfolio HTML
│
└── public/
    ├── css/
    │   └── style.css      # Complete dark theme stylesheet
    ├── js/
    │   └── main.js        # Cursor, typewriter, counters, form
    └── assets/
        └── Saranraj_Resume.pdf   ← drop your resume here
```

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Hero Section** | Animated dot-grid canvas, typewriter role switcher, stat counters |
| **About** | Animated terminal widget with real stack info |
| **Experience** | Timeline layout with animated entry cards |
| **Skills** | 6-category skill grid with hover effects |
| **Projects** | Featured + 3 project cards with metrics |
| **Contact** | Working POST form → `/api/contact` → logs / email |
| **Resume Download** | `/api/resume` serves the PDF |
| **Custom Cursor** | Smooth follower cursor (desktop) |
| **Scroll Reveal** | IntersectionObserver-based reveal animations |
| **Active Nav** | Highlights current section in navbar |
| **Responsive** | Mobile-first, hamburger menu on small screens |

---

## 🔧 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Serve portfolio page |
| `POST` | `/api/contact` | Accept contact form submission |
| `GET` | `/api/resume` | Trigger resume PDF download |

### Contact API – Request Body
```json
{
  "name": "Arjun Sharma",
  "email": "arjun@company.com",
  "message": "Hi, I'd like to discuss a role."
}
```

### Contact API – Response
```json
{ "success": true, "message": "Message received! I'll get back to you soon." }
```

---

## 📧 Enabling Real Email (nodemailer)

In `server.js`, uncomment the nodemailer block and set:

```
EMAIL_USER=saranraji.dev@gmail.com
EMAIL_PASS=<Gmail App Password>
```

Generate an App Password: **Google Account → Security → 2FA → App Passwords**

---

## 🚢 Deployment

### PM2 (VPS / Azure VM)
```bash
npm install -g pm2
pm2 start server.js --name portfolio
pm2 startup && pm2 save
```

### Nginx reverse proxy
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 🛠 Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js 4
- **Email**: Nodemailer (optional)
- **Fonts**: Syne (display) + DM Sans (body) + DM Mono (code)
- **Design**: Custom dark theme, CSS variables, vanilla JS

---

Built from scratch by Saranraj S · [saranraji.dev@gmail.com](mailto:saranraji.dev@gmail.com)
