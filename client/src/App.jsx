const { Route, Routes } = require("react-router-dom");
const { default: AuthLayout } = require("./components/auth/layout");

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* children of auth/ register, login like this */}
          <Route path="/login" />
          <Route path="register" />
        </Route>
      </Routes>
    </div>
  );
}
