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
    background: var(--bg);
    color: var(--text);
  }

  .modal-header {
    color: var(--text-h);
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
