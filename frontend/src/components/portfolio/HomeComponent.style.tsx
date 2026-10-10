import styled from 'styled-components';

export const HomeContainer = styled.main`
  position: relative;
  z-index: 1;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const HomeImage = styled.img`
  width: 172px;
  height: 172px;
  max-width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const VerticalRule = styled.div`
  width: 1px;
  height: 2rem;
  margin: 0 auto;
  background: var(--border);
`;

export const Rule = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: var(--border);
`;

export const Intro = styled.section`
  padding: 1rem 0;
  text-align: center;
`;

export const Greeting = styled.p`
  margin: 0;
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  line-height: 1.6;

  strong {
    color: var(--text-h);
  }

  .typical-tt {
    color: var(--accent);
  }
`;

export const ActionGrid = styled.nav`
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  row-gap: 1rem;

  a {
    color: var(--text-h);
    text-decoration: none;
  }
`;

export const ActionItem = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;

  p {
    margin: 0;
  }
`;
