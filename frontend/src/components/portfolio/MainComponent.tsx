import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ApiSkills from '../skill-component/Skills';
import Fly from './FlyComponent';
import Home from './HomeComponent';
import { MainContainer } from './MainComponent.style';

function MainComponent() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Fly />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/skills"
            component={ApiSkills}
          />
          <Redirect to="/home" />
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
}

export default MainComponent;
