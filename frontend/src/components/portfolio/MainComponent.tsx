import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
          <Redirect to="/home" />
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
}

export default MainComponent;
