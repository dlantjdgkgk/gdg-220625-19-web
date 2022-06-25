import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Neighborhoods from './components/Neighborhoods';
import MyPage from './components/MyPage';
import { AppContext } from './contexts';
import { Entry } from './components/Entry';

function App({ context }) {
  return (
    <AppContext.Provider value={context}>
      <Entry>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate to="/neighborhoods" replace={true} />} />
              <Route path="neighborhoods" element={<Neighborhoods />} />
              <Route path="chatlist" element={null} />
              <Route path="chatroom/:chatId" element={null} />
              <Route path="mypage" element={<MyPage />} />
              <Route path="*" element={<Navigate to="/neighborhoods" replace={true} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Entry>
    </AppContext.Provider>
  );
}

export default App;
