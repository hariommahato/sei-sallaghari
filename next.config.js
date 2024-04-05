/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env:{
    NEXT_MONGODB_URL:"mongodb+srv://sei:sei@cluster0.mxfc7kq.mongodb.net/?retryWrites=true&w=majority",
    // NEXT_MONGODB_URL:"mongodb+srv://sei:sei@cluster0.mxfc7kq.mongodb.net/",
    CLOUDINARY_NAME:"dijky1jjg",
    CLOUDINARY_API_KEY:"557477556585753",
    CLOUDINARY_API_SECRET:"sEE6XWIEmTmIvxFnr7Xkvg5HkMs",
    NEXTAUTH_SECRET:"asfsdfkulsghdfbjkshdfv"
  }
}

module.exports = nextConfig
