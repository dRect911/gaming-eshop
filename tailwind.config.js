/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT:'#5124F2',
          light:'#DAD3F5',
          dark:'#32188F',
        },
        secondary:{
          DEFAULT:'#F2245F',
          light:'#F5D3DD',
          dark:'#8F183A',
        },
        bgDark:'#171326',
        bgLight:'#F2F0F7',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    
    
  },
  plugins: [],
}


/* blue palette */
/* 
#00005a
#000088
#131ab9
#E6E6FF
#F5F5FF
*/