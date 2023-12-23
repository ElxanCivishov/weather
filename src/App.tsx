import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./partials";
import { DisplayWeather } from "./pages";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DisplayWeather />} />
      </Route>

      {/* not found */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
