import { ReactTyped } from 'react-typed';
import LoadingSpinner from '../LoadingSpinner';
import { hasProfileData, isProfile } from '../../api/portfolio';
import { useApiResource } from '../../api/useApiResource';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Project from './ProjectComponent';
import Skill from './SkillComponent';
import {
  ActionGrid,
  ActionItem,
  Footer,
  Greeting,
  HomeContainer,
  HomeImage,
  Intro,
  Rule,
  VerticalRule,
} from './HomeComponent.style';

function Home() {
  const profile = useApiResource('/profile', isProfile, hasProfileData);

  if (!profile) {
    return <LoadingSpinner />;
  }

  return (
    <HomeContainer className="container">
      <div className="circle">
        <HomeImage
          width={172}
          height={172}
          src={profile.imageUrl}
          alt={profile.name}
        />
      </div>
      <VerticalRule aria-hidden="true" />
      <Rule />
      <Intro>
        <Greeting>
          <strong>Hello, I&apos;m {profile.name}!</strong>
          <br />
          <span>I am a {profile.jobTitle} and</span>
          <br />
          <ReactTyped
            className="typical-tt"
            typeSpeed={50}
            backSpeed={30}
            backDelay={1000}
            loop
            strings={profile.personalityTraits}
          />
        </Greeting>
      </Intro>
      <Rule />
      <VerticalRule aria-hidden="true" />
      <ActionGrid className="row button-row grid-container">
        <ActionItem className="col-sm-2 grid-item">
          <a className="button-row-grid" href="#about">
            <About />
          </a>
        </ActionItem>
        <ActionItem className="col-sm-2 grid-item">
          <a className="button-row-grid" href="#skill">
            <Skill />
          </a>
        </ActionItem>
        <ActionItem className="col-sm-3 grid-item">
          <a className="button-row-grid" href="#project">
            <Project />
          </a>
        </ActionItem>
        <ActionItem className="col-sm-3 grid-item">
          <a className="button-row-grid" href="#contact">
            <Contact />
          </a>
        </ActionItem>
        <ActionItem className="col-sm-2 grid-item">
          <a
            className="button-row-grid"
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </ActionItem>
      </ActionGrid>
      <Footer className="col-12 footer">
        <a
          className="btn"
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <p>🎅 DECEMBER 2018</p>
        </a>
      </Footer>
    </HomeContainer>
  );
}

export default Home;
