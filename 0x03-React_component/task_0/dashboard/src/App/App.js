import React from "react";
import PropTypes from 'prop-types';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

const App = ({ isLoggedIn = false }) => {
  return (
    <React.Fragment>
      <div className="App" data-testid="App">
        <div className="appContainer">
          <Notifications listNotifications={listNotifications} displayDrawer={true} />
          <Header />
        </div>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
};

// PropTypes for validation
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
