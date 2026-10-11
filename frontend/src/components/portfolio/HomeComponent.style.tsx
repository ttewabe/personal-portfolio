import styled from 'styled-components';

export const HomeContainer = styled.main`
  position: relative;
  z-index: 1;
  min-height: 100vh;
 padding-top: 2rem;
  padding-bottom: 1rem;
  color: var(--text);

  .circle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 182px;
    height: 182px;
    margin: 60px auto 0;
    padding: 0;
    overflow: hidden;
    border: 2px dashed #959292;
    border-radius: 50%;
    box-shadow: 0 0 15px -5px #e9d5b8;
    text-align: center;
    box-sizing: border-box;
  }

  @media (max-width: 576px) {
    padding: 32px 5px 5px;
  }
`;

export const HomeImage = styled.img`
  display: block;
  width: 172px;
  height: 172px;
  max-width: 100%;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
`;

export const VerticalRule = styled.div<{ $short?: boolean }>`
  width: 1px;
  height: ${({ $short }) => ($short ? '60px' : '75px')};
  margin: 0 auto;
  background: var(--border);
`;

export const Rule = styled.hr`
  width: 100%;
  margin: 0 auto;
  border: 0;
  border-top: 1px solid var(--border);
  opacity: 1;
`;

export const Intro = styled.section`
   padding: 1rem 0;
  text-align: center;

  @media (max-width: 576px) {
     padding: 28px 0 52px;
  }
`;

export const Greeting = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.08rem);
  font-weight: 700;
  letter-spacing: 0.2em;
  line-height: 1.8;

  strong {
    color: var(--text-h);
    font-size: clamp(1.45rem, 3vw, 2rem);
    font-weight: 900;
    letter-spacing: 0.15em;
  }

  .typical-tt {
    color: var(--text);
  }

  @media (max-width: 576px) {
    letter-spacing: 0.1em;

    strong {
      letter-spacing: 0.08em;
    }
  }
`;

export const ActionGrid = styled.nav`
  width: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border: 1px solid var(--border);

  a {
    display: flex;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    color: var(--text);
    text-decoration: none;
    font-weight: 750;
    letter-spacing: 0.04em;
    transition: background-color 150ms ease, color 150ms ease;

    &:hover,
    &:focus-visible {
      background: rgba(232, 220, 198, 0.12);
      color: var(--text-h);
    }
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }

  @media (prefers-reduced-motion: reduce) {
    a {
      transition: none;
    }
  }
`;

export const ActionItem = styled.div`
  min-width: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;

  & + & {
    border-left: 1px solid var(--border);
  }

  button {
    width: 100%;
    min-height: 42px;
    color: inherit;
    font-weight: inherit;
  }

  @media (max-width: 576px) {
    flex: 1 1 33.333%;

    &:nth-child(4) {
      border-left: 0;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 96px;
  text-align: center;

  a {
    color: var(--text);
    font-size: 0.55rem;
    letter-spacing: 0.16em;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  @media (max-width: 576px) {
    margin-top: 64px;
  }
`;
