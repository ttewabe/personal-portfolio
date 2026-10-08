import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { SkillItem, SkillsContainer, SkillsHeading, SkillsList } from './Skills.style';

function Skills() {
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    let retryTimeout: ReturnType<typeof setTimeout>;

    const loadSkills = async () => {
      try {
        const response = await fetch('https://localhost:7171/api/skills');
        if (!response.ok) {
          throw new Error('Failed to fetch skills');
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data) || !data.every((skill) => typeof skill === 'string')) {
          throw new Error('Skills API returned an invalid response');
        }

        if (cancelled) {
          return;
        }

        setSkills(data);
        if (data.length === 0) {
          retryTimeout = setTimeout(loadSkills, 3000);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Unable to load skills; retrying in 3 seconds.', err);
          retryTimeout = setTimeout(loadSkills, 3000);
        }
      }
    };

    void loadSkills();

    return () => {
      cancelled = true;
      clearTimeout(retryTimeout);
    };
  }, []);

  if (skills.length === 0) {
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
