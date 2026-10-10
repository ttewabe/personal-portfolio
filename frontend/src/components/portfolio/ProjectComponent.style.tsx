import { Modal } from 'reactstrap';
import styled from 'styled-components';

export const ProjectTrigger = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const ProjectModal = styled(Modal)`
  .modal-content {
    min-height: min(80vh, 700px);
    background: var(--bg);
    color: var(--text);
  }

  .modal-header {
    color: var(--text-h);
  }
`;

export const ProjectTitle = styled.h2`
  margin: 0;
  color: var(--text-h);
`;

export const ProjectCard = styled.article`
  align-items: center;
  margin: 0 0 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  h2 {
    color: var(--text-h);
  }
`;

export const ProjectAction = styled.div`
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
