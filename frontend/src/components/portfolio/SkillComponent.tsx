import { useState } from 'react';
import { Form, FormGroup, ModalBody, ModalHeader } from 'reactstrap';
import LoadingSpinner from '../LoadingSpinner';
import { hasSkillsDetailsData, isSkillsDetails } from '../../api/portfolio';
import { useApiResource } from '../../api/useApiResource';
import {
  ResumeButtonRow,
  SkillContent,
  SkillModal,
  SkillProgress,
  SkillProgressBar,
  SkillTitle,
  SkillTrigger,
} from './SkillComponent.style';

function truncateText(text: string): string {
  return text.length > 10 ? `${text.substring(0, 10)}...` : text;
}

function Skill() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const skills = useApiResource('/skills/categories', isSkillsDetails, hasSkillsDetailsData);
  const toggleModal = () => setIsModalOpen((isOpen) => !isOpen);

  return (
    <>
      <SkillTrigger type="button" onClick={toggleModal}>
        <b>Skill</b>
      </SkillTrigger>
      <SkillModal
        className="my-modals"
        isOpen={isModalOpen}
        toggle={toggleModal}
        style={{ maxWidth: '1000px', width: '100%', height: '100%' }}
      >
        <ModalHeader tag="div" toggle={toggleModal}>
          <SkillTitle>MY SKILLS</SkillTitle>
        </ModalHeader>
        <ModalBody>
          {skills ? (
            <SkillContent>
              <Form>
                <h1>{skills.heading}</h1>

                <FormGroup>
                  <SkillTitle $proficient>{skills.proficiencyLabel}</SkillTitle>
                </FormGroup>

                {skills.categories.map((category) => (
                  <FormGroup key={category.name}>
                    <h4 title={category.name}>{truncateText(category.name)}</h4>
                    <SkillProgress>
                      <SkillProgressBar $proficiency={category.proficiency} />
                    </SkillProgress>
                  </FormGroup>
                ))}

                <ResumeButtonRow className="row">
                  <div className="col-12 resume-btn">
                    <button type="button">
                      <a
                        href={skills.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RESUME
                      </a>
                    </button>
                  </div>
                </ResumeButtonRow>
              </Form>
            </SkillContent>
          ) : (
            <LoadingSpinner />
          )}
        </ModalBody>
      </SkillModal>
    </>
  );
}

export default Skill;
