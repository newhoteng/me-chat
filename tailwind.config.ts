import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Gradients
        'lightmagenta': 'hsl(293, 100%, 63%)',
        'lightviolet': 'hsl(264, 100%, 61%)' ,
        // Text
        'mainheading': 'hsl(271, 36%, 24%)',
        'subheading': 'hsl(276, 100%, 81%)',
        'chatonleft': 'hsl(276, 55%, 52%)',
        'chatonright': 'hsl(271, 15%, 43%)',
        'placeholder': 'hsl(206, 6%, 79%)',
        'paragraph': 'hsl(270, 7%, 64%)',
        // secondary
        'white': 'hsl(0, 0%, 100%)',
        'appbackground': 'hsl(270, 20%, 96%)',
        'submitbutton': 'hsl(271, 36%, 24%)',
        'radio': 'hsl(289, 100%, 72%)',
        'paleviolet': '#f7f5fa',
        'leftchatbg': '#ede5f3',
        'pixel1': '#fecfff',
        'pixel2': '#fbd9ff',

      }
    },
  },
  plugins: [],
}
export default config
