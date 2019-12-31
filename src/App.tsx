import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//COMPONENTS
import SideMenu from './components/side-menu/side-menu.component';
import MainContent from './components/main-content/main-content.component';
import SideMenuItem from './components/side-menu-item/side-menu-item.component';
import Header from './components/header/header.component';

//REDUX
import { fetchEmployeeStart } from './redux/employee/empolyee.actions';

//PAGES
import Homepage from './pages/home-page/home-page.component';
import AddEmployeePage from './pages/add-employee-page/add-employee-page.component';
import EditEmployeePage from './pages/edit-employee-page/edit-employee.component';
import './App.css';

interface State {
  isOpen: boolean;
}

interface Props {
  fetchEmployeeStart: any;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  componentDidMount() {
    this.props.fetchEmployeeStart();
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
            <Route path="/employee/edit/:id" component={EditEmployeePage} />
            {/* This route is only for gh-pages deployment*/}
            <Route path="/addis-software" component={Homepage} />
            <Redirect to="/" />
          </Switch>
        </MainContent>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  fetchEmployeeStart: () => dispatch(fetchEmployeeStart())
});
export default connect(null, mapDispatchToProps)(App);
