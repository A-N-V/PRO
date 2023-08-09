/** @type {import('next').NextConfig} */

/**
 * Remote applist add
 */
 const NextFederationPlugin = require("@module-federation/nextjs-mf"); 
 const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   webpack: (config, options) => {
     config.plugins.push(
       new NextFederationPlugin({
         name: "remote", /** */
         filename: "static/chunks/remoteEntry.js",
         exposes: { 
            './REMOTE':"./src/components/Component.tsx"
         },
         remotes: {},
         shared: {},
         extraOptions: {
           automaticAsyncBoundary: true,
         },
       })
     );
     return config;
   },
 };
 module.exports = nextConfig;
 