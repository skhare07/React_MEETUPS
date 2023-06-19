import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupPage from "./pages/NewMeetUp";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
