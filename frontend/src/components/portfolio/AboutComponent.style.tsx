import { Modal } from 'reactstrap';
import styled from 'styled-components';

export const AboutTrigger = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const AboutModal = styled(Modal)`
  .modal-content {
    min-height: min(80vh, 700px);
   background: #242835;
    color: #fcfbfb;
    font-size: 25px;
    font-weight: 700;
    height: 80%;
    margin: 10px 5px;
    width: 100%;
  }

  .modal-header {
   color: #f0d0a0;
    font-size: 35px;
    font-weight: 900;
  }
`;

export const AboutTitle = styled.h1`
  margin: 0;
  color: var(--text-h);
`;

export const AboutContent = styled.div`
  h1 {
    color: var(--text-h);
  }
`;

export const AboutText = styled.p`
  line-height: 1.7;
`;
