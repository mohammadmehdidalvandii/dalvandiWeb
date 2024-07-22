/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{jsx}",
    "./src/app/**/*.{jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "danaMedium":"danaMedium",
        "danaBold":"danaBold",
        "danaBlack":"danaBlack"
      },
      fontSize:{
        'md':"2rem"
      },
      colors:{
        "back":"#111111",
        "primary":{
          default:"#FF0000",
          100:"#FC4343"
        },
        "secondary":"#161616",
        "success":"#303033",
        "font":{
          default:"#8B8A91",
          100:"#D5C1E0"
        }
      }
    },
    container:{
      "center":true,
    },
    screens:{
      'xs':"380px",

      'sm':"576px", 

      'md':"768px",

      'lg':"992px",

      'xl':"1220px",

      '2xl':"1420px",
    }
  },
  plugins: [],
};
