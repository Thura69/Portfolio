/** @type {import('tailwindcss').Config} */
// #383f4a
// 48515e
// 2d3e54
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg": "#050608",
      "text": "#ffffff",
      "textgray":"#77818f",
      "border": "#2b3a4a",
      "active": "#17E134",
      'bg-blue':'#0000FF'
    },
    screens: {
      "sxs":'400px',
      "xs": '420px',
      "mxs": '434px',
      'xsm':'450px',
      'sm': '480px',
      'msm': '500px',
      'hsm':'530px',
      'lsm':'550px',
      // => @media (min-width: 640px) { ... }
      "mid": "600px",
      'lmid': '650px',
      'hmid': '700px',
      'amid':'750px',
      'md': '768px',
      'm-md':'950px',
      // => @media (min-width: 768px) { ... }
      'plg':'980px',
      'lg': '1024px',
      'alg':'1130px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}