/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: [
          'cdn.logojoy.com',
          '99designs-blog.imgix.net',
          'media.istockphoto.com',
          'dt2sdf0db8zob.cloudfront.net',
          'penji.co',
          'www.logodesign.net',
          'www.topuniversities.com',
          'uasys.edu',
          'www.bw.edu',
          'www.csuci.edu',
          'uscga.edu',
          'www.athens.edu'
        ],
      },
  };

export default nextConfig;