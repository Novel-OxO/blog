import { defineConfig, defineTextStyles } from '@pandacss/dev'

const textStyles = defineTextStyles({
  heading: {
    1: {
      description: 'Page title',
      value: {
        fontSize: '60px',
        lineHeight: '64px',
        fontWeight: '500',
        letterSpacing: '-0.3px',
      },
    },
    2: {
      description: 'Section title',
      value: {
        fontSize: '52px',
        lineHeight: '56px',
        fontWeight: '500',
        letterSpacing: '-0.52px',
      },
    },
    3: {
      description: 'Subsection title',
      value: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '500',
        letterSpacing: '-0.24px',
      },
    },
  },
  body: {
    base: {
      description: 'Body text',
      value: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '400',
      },
    },
    sm: {
      description: 'Small body text',
      value: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '450',
      },
    },
    xs: {
      description: 'Extra small body text',
      value: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '400',
      },
    },
  },
})

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  exclude: [],

  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          // Primary orange (heat)
          heat: {
            50: { value: '#fff5ef' },
            100: { value: '#ffe8d8' },
            200: { value: '#ffcdb0' },
            300: { value: '#ffaa7e' },
            400: { value: '#ff7d42' },
            500: { value: '#fa5d19' },
            600: { value: '#e8430a' },
            700: { value: '#c1320a' },
            800: { value: '#992a10' },
            900: { value: '#7c2611' },
            950: { value: '#431006' },
            // Alpha variants
            a4: { value: 'rgba(250, 93, 25, 0.04)' },
            a8: { value: 'rgba(250, 93, 25, 0.08)' },
            a12: { value: 'rgba(250, 93, 25, 0.12)' },
            a16: { value: 'rgba(250, 93, 25, 0.16)' },
            a20: { value: 'rgba(250, 93, 25, 0.20)' },
            a40: { value: 'rgba(250, 93, 25, 0.40)' },
            a90: { value: 'rgba(250, 93, 25, 0.90)' },
            a100: { value: 'rgba(250, 93, 25, 1)' },
          },
          // Neutral grays
          neutral: {
            50: { value: '#fafafa' },
            100: { value: '#f5f5f5' },
            200: { value: '#e8e8e8' },
            300: { value: '#d6d6d6' },
            400: { value: '#b0b0b0' },
            500: { value: '#8a8a8a' },
            600: { value: '#6e6e6e' },
            700: { value: '#525252' },
            800: { value: '#3a3a3a' },
            900: { value: '#262626' },
            950: { value: '#171717' },
          },
          // Accent colors
          accent: {
            black: { value: '#262626' },
            white: { value: '#ffffff' },
            amethyst: { value: '#9061ff' },
            bluetron: { value: '#2a6dfb' },
            crimson: { value: '#eb3424' },
            forest: { value: '#42c366' },
            honey: { value: '#ecb730' },
          },
        },
        fonts: {
          heading: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
          body: { value: 'var(--font-geist-sans), system-ui, sans-serif' },
          mono: { value: 'var(--font-geist-mono), monospace' },
        },
        fontSizes: {
          xs: { value: '12px' },
          sm: { value: '14px' },
          md: { value: '16px' },
          lg: { value: '18px' },
          xl: { value: '20px' },
          '2xl': { value: '24px' },
          '3xl': { value: '32px' },
          '4xl': { value: '40px' },
          '5xl': { value: '52px' },
          '6xl': { value: '60px' },
        },
        fontWeights: {
          normal: { value: '400' },
          medium: { value: '450' },
          semibold: { value: '500' },
          bold: { value: '600' },
        },
        lineHeights: {
          tight: { value: '1.1' },
          snug: { value: '1.25' },
          normal: { value: '1.5' },
          relaxed: { value: '1.625' },
        },
        letterSpacings: {
          tighter: { value: '-0.52px' },
          tight: { value: '-0.3px' },
          normal: { value: '0px' },
          wide: { value: '0.5px' },
        },
        sizes: {
          container: { value: '1112px' },
          containerPadded: { value: '1144px' },
        },
        radii: {
          xs: { value: '4px' },
          sm: { value: '6px' },
          md: { value: '8px' },
          lg: { value: '10px' },
          xl: { value: '16px' },
          '2xl': { value: '20px' },
          '3xl': { value: '24px' },
          full: { value: '999px' },
        },
        shadows: {
          xs: {
            value: 'inset 0 0 0 1px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
          },
          sm: {
            value:
              '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.03)',
          },
          md: {
            value:
              '0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04)',
          },
          lg: {
            value:
              '0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.06), 0 16px 32px rgba(0, 0, 0, 0.06)',
          },
          primary: {
            value:
              '0 0 0 1px rgba(250, 93, 25, 0.2), 0 2px 8px rgba(250, 93, 25, 0.2), 0 4px 16px rgba(250, 93, 25, 0.12)',
          },
        },
      },
      semanticTokens: {
        colors: {
          surface: { value: { base: '#ffffff', _dark: '{colors.neutral.950}' } },
          'surface.raised': { value: { base: '#ffffff', _dark: '{colors.neutral.900}' } },
          'bg.base': { value: { base: '#f9f9f9', _dark: '{colors.neutral.950}' } },
          'bg.lighter': { value: { base: '#fbfbfb', _dark: '{colors.neutral.900}' } },
          'text.primary': {
            value: { base: '{colors.neutral.900}', _dark: '{colors.neutral.50}' },
          },
          'text.secondary': {
            value: { base: '{colors.neutral.600}', _dark: '{colors.neutral.400}' },
          },
          'text.muted': {
            value: { base: '{colors.neutral.500}', _dark: '{colors.neutral.500}' },
          },
          'border.faint': { value: { base: '#ededed', _dark: '{colors.neutral.800}' } },
          'border.muted': { value: { base: '#e8e8e8', _dark: '{colors.neutral.800}' } },
          'border.loud': { value: { base: '#e6e6e6', _dark: '{colors.neutral.700}' } },
        },
      },
    },
  },

  outdir: 'styled-system',
})
