import { useState } from 'react';
import { hasProfileData, isProfile } from '../../api/portfolio';
import { useApiResource } from '../../api/useApiResource';
import { ModalBody, ModalHeader } from 'reactstrap';
import {
  AboutContent,
  AboutModal,
  AboutTrigger,
  AboutTitle,
  AboutText,
} from './AboutComponent.style';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profile = useApiResource('/profile', isProfile, hasProfileData);
  const toggleModal = () => setIsModalOpen((isOpen) => !isOpen);

  return (
    <>
      <AboutTrigger type="button" onClick={toggleModal}>
        <b>About</b>
      </AboutTrigger>
      <AboutModal
        className="my-modals"
        isOpen={isModalOpen}
        toggle={toggleModal}
        style={{ maxWidth: '1100px', width: '100%', height: '100%' }}
      >
        <ModalHeader tag="div" toggle={toggleModal}>
          <AboutTitle>{profile?.aboutTitle ?? 'About'}</AboutTitle>
        </ModalHeader>
        <ModalBody>
          {profile ? (
            <AboutContent>
              <h1>{profile.aboutRole}</h1>
              {profile.aboutParagraphs.map((paragraph) => (
                <AboutText key={paragraph}>{paragraph}</AboutText>
              ))}
            </AboutContent>
          ) : (
            <p role="status">Loading...</p>
          )}
        </ModalBody>
      </AboutModal>
    </>
  );
}

export default About;
