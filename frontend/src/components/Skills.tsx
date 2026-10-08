import { useEffect, useState } from 'react';

function Skills() {
  const [skills, setSkills] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://localhost:7171/api/skills')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch skills');
        }

        return response.json();
      })
      .then((data: string[]) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Unable to load skills.');
        setLoading(false);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (loading || skills.length === 0) {
    return <h2>Loading skills...</h2>;
  }

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
