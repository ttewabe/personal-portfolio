import { Modal } from 'reactstrap';
import styled from 'styled-components';

export const SkillTrigger = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const SkillModal = styled(Modal)`
  .modal-content {
    min-height: min(80vh, 700px);
    background: var(--bg);
    color: var(--text);
  }

  .modal-header {
    color: var(--text-h);
  }
`;

export const SkillTitle = styled.h2<{ $proficient?: boolean }>`
  margin: 0;
  color: ${({ $proficient }) => ($proficient ? '#e9d5b8' : 'var(--text-h)')};
`;

export const SkillContent = styled.div`
  h1,
  h4 {
    color: var(--text-h);
  }
`;

export const SkillProgress = styled.div`
  height: 0.6rem;
  overflow: hidden;
  border-radius: 1rem;
  background: var(--border);
`;

export const SkillProgressBar = styled.div<{ $proficiency: number }>`
  width: ${({ $proficiency }) => `${Math.min(100, Math.max(0, $proficiency))}%`};
  height: 100%;
  background: var(--accent);
`;

export const ResumeButtonRow = styled.div`
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
