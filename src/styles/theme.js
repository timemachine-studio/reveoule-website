/**
 * Rêveoulé Skincare & Beauty Inc.
 * Luxury Brand Design System
 *
 * STRICT VISUAL GUIDELINES
 * All components must adhere to this theme configuration
 */

export const theme = {
  // Mandatory Color Palette
  colors: {
    // Primary Colors
    white: '#FFFFFF',           // Primary background, high-end minimal sections
    lightGray: '#E6E6E6',       // Secondary background, separators, neutral surfaces
    warmBeige: '#E5DED6',       // Warm beige accent, soft backgrounds, subtle borders
    deepCrimson: '#59090C',     // Primary brand color. Deep luxury crimson
    darkRuby: '#370506',        // Dark ruby. Gradients, hover effects, premium emphasis
    nearBlack: '#1A0202',       // Near-black burgundy. Primary text, footer, navigation
  },

  // Typography System
  fonts: {
    heading: "'Playfair Display', 'Cormorant Garamond', serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    button: "'Inter', sans-serif",
  },

  fontSizes: {
    h1: 'clamp(48px, 8vw, 72px)',
    h2: 'clamp(36px, 6vw, 56px)',
    h3: 'clamp(28px, 4vw, 40px)',
    h4: 'clamp(22px, 3vw, 32px)',
    body: '17px',
    bodyLarge: '18px',
    small: '15px',
    button: '14px',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    heading: 1.3,
    body: 1.65,
    relaxed: 1.75,
  },

  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.03em',
  },

  // Spacing System (Generous white space)
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '48px',
    xl: '64px',
    xxl: '96px',
    xxxl: '128px',
  },

  // Border Radius (Minimal - 0-4px max)
  borderRadius: {
    none: '0px',
    minimal: '2px',
    small: '4px',
  },

  // Shadows (Subtle, feathered, low-contrast)
  shadows: {
    subtle: '0 2px 8px rgba(26, 2, 2, 0.04)',
    card: '0 4px 16px rgba(26, 2, 2, 0.06)',
    elevated: '0 8px 24px rgba(26, 2, 2, 0.08)',
    navigation: '0 2px 12px rgba(26, 2, 2, 0.05)',
  },

  // Transitions (Slow, smooth, ease-based)
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Breakpoints
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
    ultrawide: '1536px',
  },

  // Z-index layers
  zIndex: {
    base: 1,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    notification: 500,
  },
};

// CSS Variables generator
export const getCSSVariables = () => {
  return `
    :root {
      /* Colors */
      --color-white: ${theme.colors.white};
      --color-light-gray: ${theme.colors.lightGray};
      --color-warm-beige: ${theme.colors.warmBeige};
      --color-deep-crimson: ${theme.colors.deepCrimson};
      --color-dark-ruby: ${theme.colors.darkRuby};
      --color-near-black: ${theme.colors.nearBlack};

      /* Typography */
      --font-heading: ${theme.fonts.heading};
      --font-body: ${theme.fonts.body};
      --font-button: ${theme.fonts.button};

      /* Spacing */
      --spacing-xs: ${theme.spacing.xs};
      --spacing-sm: ${theme.spacing.sm};
      --spacing-md: ${theme.spacing.md};
      --spacing-lg: ${theme.spacing.lg};
      --spacing-xl: ${theme.spacing.xl};
      --spacing-xxl: ${theme.spacing.xxl};
      --spacing-xxxl: ${theme.spacing.xxxl};

      /* Transitions */
      --transition-fast: ${theme.transitions.fast};
      --transition-base: ${theme.transitions.base};
      --transition-slow: ${theme.transitions.slow};
      --transition-slower: ${theme.transitions.slower};
    }
  `;
};

export default theme;
