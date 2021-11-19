import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutMeScreen from "./screens/AboutMeScreen";
import ContactMeScreen from "./screens/ContactMeScreen";
import ProjectsListScreen from "./screens/ProjectsListScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";
import ResumeScreen from "./screens/ResumeScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminProfileSettingsScreen from "./screens/AdminProfileSettingsScreen";
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
            <main className="bg-dark">
                <Routes>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route path="/about" element={<AboutMeScreen />} />
                    <Route
                        path="/project/:id"
                        element={<ProjectDetailsScreen />}
                    />
                    <Route path="/projects" element={<ProjectsListScreen />} />
                    <Route path="/contact" element={<ContactMeScreen />} />
                    <Route path="/resume" element={<ResumeScreen />} />
                    <Route path="/login" element={<AdminLoginScreen />} />
                    <Route
                        path="/admin/settings"
                        element={<AdminProfileSettingsScreen />}
                    />
                    <Route
                        path="/admin/project/:id/edit"
                        element={<AdminProjectEditScreen />}
                    />
                    <Route
                        path="/admin/contact/:id/details"
                        element={<AdminContactDetailsScreen />}
                    />
                    <Route
                        exact
                        path="/admin/viewprojects"
                        element={<AdminProjectsListScreen />}
                    />
                    <Route
                        path="/admin/viewcontacts"
                        element={<AdminContactListScreen />}
                    />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
