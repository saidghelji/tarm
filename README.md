# Amenagment Website

This repository contains both the frontend React application and a custom backend API for handling contact form submissions.

## Project Structure

- `/src` - Frontend React application
- `/server` - Backend Express API for handling contact form submissions

## Frontend Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Backend Setup

The backend API handles contact form submissions and sends emails to your Zoho Mail inbox (support@tarm.ma).

### 1. Configure Environment Variables

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Copy the example environment file:
   ```
   cp .env.example .env
   ```

3. Edit the `.env` file with your Zoho Mail credentials:
   ```
   EMAIL_USER=support@tarm.ma
   EMAIL_PASS=your_zoho_mail_password
   EMAIL_FROM=support@tarm.ma
   EMAIL_TO=support@tarm.ma
   ```

### 2. Install Dependencies

```
cd server
npm install
```

### 3. Start the Server

For development:
```
npm run dev
```

For production:
```
npm start
```

## Deployment

### Frontend

1. Build the frontend:
   ```
   npm run build
   ```

2. Deploy the contents of the `dist` directory to your web hosting service

### Backend

1. Deploy the `server` directory to your server
2. Set up environment variables on your server
3. Install dependencies: `npm install --production`
4. Start the server: `npm start`

For production, consider using a process manager like PM2:
```
npm install -g pm2
pm2 start server.js
```

## Environment Variables

### Frontend (.env)

- `VITE_API_URL` - URL of the backend API

### Backend (.env)

- `PORT` - Port for the server to listen on
- `EMAIL_HOST` - SMTP host (smtp.zoho.com)
- `EMAIL_PORT` - SMTP port (587 or 465)
- `EMAIL_USER` - Your Zoho Mail email address
- `EMAIL_PASS` - Your Zoho Mail password or app password
- `EMAIL_FROM` - Sender email address
- `EMAIL_TO` - Recipient email address
- `CORS_ORIGIN` - Allowed origin for CORS (your frontend URL)