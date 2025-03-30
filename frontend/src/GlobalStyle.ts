import { createGlobalStyle, keyframes } from "styled-components";

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --siit-color-accent: #504ff3;
    --siit-color-accent-light: rgb(from var(--siit-color-accent) r g b / .1);
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

  svg {
    flex-shrink: 0;
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

  main {
    margin-bottom: 3rem;
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

  :is(input, select) {
    display: inline-block;
    max-width: 100%;
    min-width: 0;
    height: 2rem;
    padding-inline: 0.75rem;
    line-height: 2rem;
    font-size: .875rem;
    font-weight: normal;
    border: 1px solid var(--siit-color-neutral);
    border-radius: 0.25rem;
    background-color: var(--siit-color-surface-base);
  }

  :is(input, select):focus {
    outline: 2px solid var(--siit-color-accent);
    outline-offset: 1px;
    border-color: rgb(from var(--siit-color-accent) r g b / 0.3);
  }
`;
