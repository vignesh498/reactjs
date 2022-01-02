import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupPage from "./Pages/NewMeetup";
import FavoritesPage from "./Pages/Favourites";
import Layout from "./Components/layout/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <FavoritesContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/NewMeetup" element={<NewMeetupPage />} />
          <Route path="/Favourite" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </FavoritesContextProvider>
  );
}

export default App;
