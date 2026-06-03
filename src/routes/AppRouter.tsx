import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SubjectPage from "../pages/SubjectPage";
import GradePage from "../pages/GradePage";
import ContentViewer from "../pages/ContentViewer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/subject/:subjectId" element={<SubjectPage />} />

        <Route
          path="/subject/:subjectId/:gradeId"
          element={<GradePage />}
        />

        <Route
          path="/subject/:subjectId/:gradeId/:contentId"
          element={<ContentViewer />}
        />
      </Routes>
    </BrowserRouter>
  );
}