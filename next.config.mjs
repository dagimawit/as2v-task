/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_HOSTNAME: "https://akil-backend.onrender.com/signup",
    MONGODB_URI: "mongodb://localhost:27017/job",
    NEXTAUTH_SECRET: "codingmstrsecret",
    NEXTAUTH_URL: "http://localhost:3002",
    SECRET: "RAMDOM_STRING",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
