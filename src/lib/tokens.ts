export const tokens = {
  teal: {
    DEFAULT: '#4A7E92',
    dark: '#2F5E70',
    deep: '#1A3E4C',
    void: '#0F2830',
    bright: '#6BA5B9',
    wash: '#E4EDF2',
    mist: '#F2F5F7',
  },
  ink: '#0F1922',
  graphite: '#2B3842',
  slate: '#5A6B77',
  fog: '#96A5B0',
  mist: '#D6DEE3',
  pearl: '#FAFBFC',
  paper: '#FFFFFF',
  ivory: '#F5F1E8',

  fonts: {
    sans: "'Montserrat', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    serif: "'Fraunces', Georgia, serif",
  },

  ease: [0.16, 1, 0.3, 1] as const,
} as const

export type Tokens = typeof tokens
