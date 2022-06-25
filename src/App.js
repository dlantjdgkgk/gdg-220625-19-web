import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Neighborhoods from './components/Neighborhoods';
import MyPage from './components/MyPage';
import { AppContext } from './contexts';

function App({ context }) {
  return (
    <AppContext.Provider value={context}>
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
    </AppContext.Provider>
  );
}

export default App;
