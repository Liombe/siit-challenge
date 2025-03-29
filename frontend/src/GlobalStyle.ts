import { createGlobalStyle, keyframes } from "styled-components";

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.bunny.net/css?family=inter:400,600,700);

  :root {
    --siit-color-accent: #504ff3;
    --siit-color-neutral: #d5d7d9;

    --siit-color-surface-base: white;

    --siit-color-text: #0a1017;
    --siit-color-text-light: #58595d;
  }

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    /* 4. Add accessible line-height */
    line-height: 1.5;
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter', sans-serif;
    color: var(--siit-color-text);
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
    font-weight: 600;
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }

  h1, h2 {
    margin-block: 1.5em .5em;
  }

  [data-state="loading"] [data-bone] {
    position: relative;
    min-width: 4ch;

    &::after {
      content: '';
      background: linear-gradient(110deg, var(--siit-color-surface-base) 8%, var(--siit-color-neutral) 18%, var(--siit-color-surface-base) 33%);
      background-size: 200% 100%;
      animation: 1.5s ${shine} linear infinite;
      border-radius: 4px;
      position: absolute;
      inset: 0;
    }
  }
`;
