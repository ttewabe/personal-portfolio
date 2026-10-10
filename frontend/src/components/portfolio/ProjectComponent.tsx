import { useState } from 'react';
import { ModalBody, ModalHeader } from 'reactstrap';
import LoadingSpinner from '../LoadingSpinner';
import { hasNonEmptyArray, isProjects } from '../../api/portfolio';
import { useApiResource } from '../../api/useApiResource';
import {
  ProjectAction,
  ProjectCard,
  ProjectContent,
  ProjectImage,
  ProjectModal,
  ProjectTitle,
  ProjectTrigger,
} from './ProjectComponent.style';

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = useApiResource('/projects', isProjects, hasNonEmptyArray);
  const toggleModal = () => setIsModalOpen((isOpen) => !isOpen);

  return (
    <>
      <ProjectTrigger type="button" onClick={toggleModal}>
        <b>Projects</b>
      </ProjectTrigger>
      <ProjectModal
        className="my-modals"
        isOpen={isModalOpen}
        toggle={toggleModal}
        style={{
          maxWidth: '1000px',
          width: '100%',
          height: '100%',
          color: 'white',
        }}
      >
        <ModalHeader tag="div" toggle={toggleModal}>
          <ProjectTitle>PROJECTS</ProjectTitle>
        </ModalHeader>
        <ModalBody>
          {projects ? (
            projects.map((project) => (
              <ProjectCard className="row card-container-t" key={project.name}>
                <div className="col-md-5 image-container-t">
                  <ProjectImage src={project.imageUrl} alt={project.imageAlt} />
                </div>
                <ProjectContent className="col-md-5 card-content-t">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </ProjectContent>
                <ProjectAction className="col-md-2 btn-t">
                  {project.websiteUrl ? (
                    <button type="button">
                      <a href={project.websiteUrl} target="_blank" rel="noreferrer">
                        Website
                      </a>
                    </button>
                  ) : (
                    <button type="button">Website</button>
                  )}
                </ProjectAction>
              </ProjectCard>
            ))
          ) : (
            <LoadingSpinner />
          )}
        </ModalBody>
      </ProjectModal>
    </>
  );
}

export default Project;
