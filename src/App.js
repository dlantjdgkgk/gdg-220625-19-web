import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Neighborhoods from './components/Neighborhoods';
import MyPage from './components/MyPage';
import { Redirect } from './utils/Redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Redirect to="/neighborhoods" />} />
          <Route path="neighborhoods" element={<Neighborhoods />} />
          <Route path="chatlist" element={null} />
          <Route path="chatroot/:chatId" element={null} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="*" element={<Redirect to="/neighborhoods" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
