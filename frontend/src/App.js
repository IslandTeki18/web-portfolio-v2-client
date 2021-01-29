import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutMeScreen from "./screens/AboutMeScreen";
import ContactMeScreen from "./screens/ContactMeScreen";
import ProjectsListScreen from "./screens/ProjectsListScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";
import ResumeScreen from "./screens/ResumeScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminProjectsListScreen from "./screens/AdminProjectsListScreen";
import AdminProjectEditScreen from "./screens/AdminProjectEditScreen";
import AdminContactListScreen from "./screens/AdminContactListScreen";
import AdminContactDetailsScreen from "./screens/AdminContactDetailsScreen";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/about" component={AboutMeScreen} />
        <Route path="/project/:id" component={ProjectDetailsScreen} />
        <Route path="/projects" component={ProjectsListScreen} />
        <Route path="/contact" component={ContactMeScreen} />
        <Route path="/resume" component={ResumeScreen} />
        <Route path="/admin/login" component={AdminLoginScreen} />
        <Route
          path="/admin/project/:id/edit"
          component={AdminProjectEditScreen}
        />
        <Route
          path="/admin/contact/:id/details"
          component={AdminContactDetailsScreen}
        />
        <Route
          exact
          path="/admin/viewprojects"
          component={AdminProjectsListScreen}
        />
        <Route path="/admin/viewcontacts" component={AdminContactListScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
