import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutMePage from "./pages/aboutMePage/AboutMePage";
import ContactMePage from "./pages/contactMePage/ContactMePage";
import ProjectsListPage from "./pages/projectsListPage/ProjectsListPage";
import ProjectDetailsPage from "./pages/projectDetailsPage/ProjectDetailsPage";
import ResumePage from "./pages/resumePage/ResumePage";
import AdminLoginPage from "./pages/adminLoginPage/AdminLoginPage";
import AdminProfileSettingsPage from "./pages/adminProfileSettingsPage/AdminProfileSettingsPage";
import AdminProjectsListPage from "./pages/adminProjectsListPage/AdminProjectsListPage";
import AdminProjectEditPage from "./pages/adminProjectEditPage/AdminProjectEditPage";
import AdminContactListPage from "./pages/adminContactListPage/AdminContactListPage";
import AdminContactDetailsPage from "./pages/adminContactDetailsPage/AdminContactDetailsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Header from "./components/molecules/header/Header";
import Footer from "./components/atoms/footer/Footer";
import AdminSkillSchedulePage from "./pages/adminSkillSchedulePage/AdminSkillSchedulePage";

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-dark">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/contact" element={<ContactMePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/skills" element={<AdminSkillSchedulePage />} />
          <Route
            path="/admin/settings"
            element={<AdminProfileSettingsPage />}
          />
          <Route
            path="/admin/project/:id/edit"
            element={<AdminProjectEditPage />}
          />
          <Route
            path="/admin/contact/:id/details"
            element={<AdminContactDetailsPage />}
          />
          <Route
            path="/admin/viewprojects"
            element={<AdminProjectsListPage />}
          />
          <Route
            path="/admin/viewcontacts"
            element={<AdminContactListPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
