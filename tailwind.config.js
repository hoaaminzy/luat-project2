/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "bg-nen":"#F4F4F4",
        "bg-chudao":"#1cb0ad",
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      screens: {
        'sm': '640px', // Chiều rộng tối đa cho màn hình nhỏ
        'md': '768px', // Chiều rộng tối đa cho màn hình trung bình
        'lg': '1024px', // Chiều rộng tối đa cho màn hình lớn
        'xl': '1280px', // Chiều rộng tối đa cho màn hình extra-large
        '2xl': '1536px', // Chiều rộng tối đa cho màn hình extra-extra-large
      },
    },
  },
  plugins: [],
};
