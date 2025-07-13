  /** @type {import('tailwindcss').Config} */
  export default {
    darkMode: ['class'],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
      extend: {
        fontFamily: {
          sans: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
          ],
          heading: [
            'Poppins',
            'Inter',
            'ui-sans-serif',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
          ],
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
          xl: '1.5rem', 
          '2xl': '2rem',
        },
        boxShadow: {
          'soft': '0 2px 8px 0 rgba(0,0,0,0.06)',
          'md-soft': '0 4px 16px 0 rgba(0,0,0,0.10)',
          'xl-soft': '0 8px 32px 0 rgba(0,0,0,0.12)',
          'primary-glow': '0 0 16px 2px hsl(var(--primary) / 0.25)',
        },
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          chart: {
            1: 'hsl(var(--chart-1))',
            2: 'hsl(var(--chart-2))',
            3: 'hsl(var(--chart-3))',
            4: 'hsl(var(--chart-4))',
            5: 'hsl(var(--chart-5))',
          },
          gradient: {
            'primary': 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))',
            'hero': 'linear-gradient(120deg, hsl(var(--primary)), hsl(var(--accent)))',
          },
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-8px)' },
          },
          'fade-in': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          pulse: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.6 },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          float: 'float 3s ease-in-out infinite',
          'fade-in': 'fade-in 0.8s ease-in',
          pulse: 'pulse 1.5s infinite',
        },
        backgroundImage: {
          'hero-pattern': "radial-gradient(circle at 20% 20%, hsl(var(--primary)/0.12) 0, transparent 70%)",
          'dots': "repeating-radial-gradient(circle, hsl(var(--muted)), hsl(var(--muted)) 1px, transparent 1px, transparent 20px)",
        },
      },
    },
    plugins: [require('tailwindcss-animate')],
  };