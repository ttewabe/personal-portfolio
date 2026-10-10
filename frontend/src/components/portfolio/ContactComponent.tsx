import { useState, type ChangeEvent, type FormEvent } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { hasContactData, isContactInfo } from '../../api/portfolio';
import { useApiResource } from '../../api/useApiResource';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import {
  ContactIntro,
  ContactModal,
  ContactTrigger,
  SocialLinks,
  SubHeader,
} from './ContactComponent.style';

interface ContactState {
  name: string;
  email: string;
  subject: string;
  message: string;
  agree: boolean;
  isModalOpen: boolean;
}

function Contact() {
  const contact = useApiResource('/contact', isContactInfo, hasContactData);
  const [state, setState] = useState<ContactState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    agree: false,
    isModalOpen: false,
  });

  const toggleModal = () => {
    setState((current) => ({ ...current, isModalOpen: !current.isModalOpen }));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget;
    if (
      name === 'name' ||
      name === 'email' ||
      name === 'subject' ||
      name === 'message'
    ) {
      setState((current) => ({ ...current, [name]: value }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log(`Current state is: ${JSON.stringify(state)}`);
    alert(`Current state is: ${JSON.stringify(state)}`);
    event.preventDefault();
  };

  return (
    <>
      <ContactTrigger type="button" onClick={toggleModal}>
        <b>Contact</b>
      </ContactTrigger>
      <ContactModal
        className="my-modals"
        isOpen={state.isModalOpen}
        toggle={toggleModal}
        style={{ maxWidth: '1000px', width: '100%', height: '100%' }}
      >
        <ModalHeader tag="div" toggle={toggleModal}>
          <h2 className="about-t">CONTACT</h2>
        </ModalHeader>
        <ModalBody>
          <div className="row row-content">
            <div>
              {contact ? (
                <ContactIntro className="col mb-3">{contact.intro}</ContactIntro>
              ) : (
                <LoadingSpinner />
              )}
            </div>
          </div>
          <div className="row row-about">
            <div className="col-md-6 col-row-form">
              <Form onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="name" md={1} />
                  <Col lg={12}>
                    <Input
                      className="text-message"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={state.name}
                      onChange={handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={1} />
                  <Col lg={12}>
                    <Input
                      className="text-message"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={state.email}
                      onChange={handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="subject" md={1} />
                  <Col lg={12}>
                    <Input
                      className="text-message"
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={state.subject}
                      onChange={handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="message" md={1} />
                  <Col lg={12}>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      rows={12}
                      placeholder="Message"
                      value={state.message}
                      onChange={handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 11, offset: 1 }}>
                    <Button className="sendMessage" type="submit">
                      SEND MESSAGE
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
            <SocialLinks className="col-md-6 text-center">
              <SubHeader>Find me on</SubHeader>
              {contact ? (
                contact.socialLinks.map((link) => (
                  <a
                    className={`btn btn-social-icon ${link.iconClass}`}
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                  >
                    <i className={`fa ${link.iconClass}`} />
                  </a>
                ))
              ) : (
                <LoadingSpinner />
              )}
            </SocialLinks>
          </div>
        </ModalBody>
      </ContactModal>
    </>
  );
}

export default Contact;
