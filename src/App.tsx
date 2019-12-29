import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

//COMPONENTS
import SideMenu from './components/side-menu/side-menu.component';
import MainContent from './components/main-content/main-content.component';
import SideMenuItem from './components/side-menu-item/side-menu-item.component';
import Header from './components/header/header.component';

//PAGES
import Homepage from './pages/home-page/home-page.component';
import AddEmployeePage from './pages/add-employee-page/add-employee-page.component';

import './App.css';

interface State {
  isOpen: boolean;
}

interface Props {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  render() {
    return (
      <div>
        <SideMenu isOpen={this.state.isOpen}>
          <SideMenuItem text="Home" to="/" />
          <SideMenuItem text="Add Employee" to="/employee/new" />
        </SideMenu>
        <MainContent isOpen={this.state.isOpen}>
          <Header
            title="Addis Software Employees"
            handleToggle={() => this.setState({ isOpen: !this.state.isOpen })}
          />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/employee/new" component={AddEmployeePage} />
            <Redirect to="/" />
          </Switch>
        </MainContent>
      </div>
    );
  }
}

export default App;
