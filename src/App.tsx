import React from 'react';

import SideMenu from './components/side-menu/side-menu.component';
import MainContent from './components/main-content/main-content.component';
import SideMenuItem from './components/side-menu-item/side-menu-item.component';
import Header from './components/header/header.component';

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
        </MainContent>
      </div>
    );
  }
}

export default App;
