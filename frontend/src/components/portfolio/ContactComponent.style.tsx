import { Modal } from 'reactstrap';
import styled from 'styled-components';

export const ContactTrigger = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const ContactModal = styled(Modal)`
  .modal-content {
    min-height: min(80vh, 700px);
    background: var(--bg);
    color: var(--text);
  }

  .modal-header {
    color: var(--text-h);
  }
`;

export const ContactIntro = styled.h2`
  color: var(--text-h);
`;

export const SubHeader = styled.h3`
  margin-top: 20px;
  color: var(--text-h);
  font-weight: 700;
  font-size: 35px;
  letter-spacing: 3px;
`;

export const SocialLinks = styled.div`
  a {
    font-size: 1.25rem;
  }
`;
