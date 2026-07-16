import { Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio.jsx';

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Resources from "./pages/Resources.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Auth from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Admin from "./pages/Admin.jsx";
import LessonPage from "./pages/LessonPage.jsx";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import LessonEnginePage from "./pages/LessonEnginePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LinearAlgebraCoursePage from "./pages/LinearAlgebraCoursePage.jsx";
import MasteryPage from "./pages/MasteryPage.jsx";
import InstructorPage from "./pages/InstructorPage.jsx";
import CreateCoursePage from "./pages/CreateCoursePage.jsx";
import CourseBuilderPage from "./pages/CourseBuilderPage.jsx";
import ModuleBuilderPage from "./pages/ModuleBuilderPage.jsx";
import LessonBuilderPage from "./pages/LessonBuilderPage.jsx";
import AssessmentBuilderPage from "./pages/AssessmentBuilderPage.jsx";
import ResearchBuilderPage from "./pages/ResearchBuilderPage.jsx";
import PortfolioBuilderPage from "./pages/PortfolioBuilderPage.jsx";
import PublishCoursePage from "./pages/PublishCoursePage.jsx";
import TestSupabase from "./pages/TestSupabase";
import { Navigate } from "react-router-dom";
import LibraryHome from "./pages/library/LibraryHome.jsx";
import Mathematics from "./pages/library/Mathematics.jsx";
import HighSchoolMath from "./pages/library/HighSchoolMath.jsx";
import LinearAlgebraLesson from "./pages/library/college/LinearAlgebraLesson";

import LinearAlgebraLessonsTest from "./pages/library/college/LinearAlgebraLessonsTest";
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/lessons/:lessonId" element={<LessonPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/lesson-engine" element={<LessonEnginePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/instructor" element={<InstructorPage />} />
          

         <Route
  path="/dashboard"
  element={<Navigate to="/instructor/courses" replace />}
/>

          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
  path="/courses/linear-algebra-foundations"
  element={<LinearAlgebraCoursePage />}
/>
          <Route 
          path="/projects/:id"
           element={<ProjectDetail />
        } 
        />
        <Route 
        path="/mastery" 
        element={<MasteryPage />}
         />
         <Route path="/instructor" element={<InstructorPage />} />

<Route
  path="/instructor/create-course"
  element={<CreateCoursePage />}
/>

<Route
  path="/instructor/courses"
  element={<CourseBuilderPage />}
/>

<Route
  path="/instructor/modules"
  element={<ModuleBuilderPage />}
/>

<Route
  path="/instructor/lessons"
  element={<LessonBuilderPage />}
/>

<Route
  path="/instructor/assessments"
  element={<AssessmentBuilderPage />}
/>

<Route
  path="/instructor/research"
  element={<ResearchBuilderPage />}
/>

<Route
  path="/instructor/portfolio"
  element={<PortfolioBuilderPage />}
/>

<Route
  path="/instructor/publish"
  element={<PublishCoursePage />}
/>
<Route
  path="/test-supabase"
  element={<TestSupabase />}
/>
<Route 
path="/library" 
element={<LibraryHome />} 
/>
<Route
  path="/library/mathematics"
  element={<Mathematics />}
/>
<Route
  path="/library/mathematics/high-school"
  element={<HighSchoolMath />}
/>
     
<Route
  path="/test/linear-algebra-lessons"
  element={<LinearAlgebraLessonsTest />}
/>
<Route
  path="/library/college/linear-algebra/module/:moduleNumber/lesson/:lessonSlug"
  element={<LinearAlgebraLesson />}
/>
   </Routes>
      </main>

      <Footer />
    </div>
  );
}