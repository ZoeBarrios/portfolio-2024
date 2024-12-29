/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'day_bg_main': '#f9f7f3',
        'day_bg_2main': '#eeeeee',
        'night_bg_main': '#53a8b6',
        'night_bg_2main': '#5585b5',
        'day_text_color': 'gray',
        'day_text_gradiente_1': '#bde4f4',
        'day_text_gradiente_2': '#93e4c1',
        'night_text_gradiente_1': '#53a8b6',
        'night_text_gradiente_2': '#38598b',
        'night_text_color': 'white',
        'day_bg_comment': '#ececec',
        'night_bg_comment': '#a2a8d3',
      },

    },

    fontFamily: {
      'elegant': [`Edu AU VIC WA NT Pre`],
      'handwriting': [`Indie Flower`],
      'sans': ['ui-sans-serif', 'system-ui'],
      'lato': ['Lato'],
    },
  },
  plugins: [],
}

