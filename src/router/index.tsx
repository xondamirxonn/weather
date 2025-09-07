import MainLayouts from "@/layouts/MainLayouts";
import { Route, Routes } from "react-router";
import { MainRoutes } from "./routes";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        {MainRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
};

export default Index;
