import LoadingSpinner from '../LoadingSpinner';
import { SkillItem, SkillsContainer, SkillsHeading, SkillsList } from './Skills.style';
import { hasNonEmptyArray, isStringArrayResponse } from '../../api/portfolio';
import { useApiResource } from '../../api/useApiResource';

function Skills() {
  const skills = useApiResource('/skills', isStringArrayResponse, hasNonEmptyArray);

  if (!skills) {
    return <LoadingSpinner />;
  }

  return (
    <SkillsContainer>
      <SkillsHeading>Skills</SkillsHeading>
      <SkillsList>
        {skills.map((skill) => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
}

export default Skills;
