import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Neighborhoods from './components/Neighborhoods';
import MyPage from './components/MyPage';
import { Redirect } from './utils/Redirect';
import ChatList from './components/ChatList';
import ChatRoom from './components/ChatRoom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Redirect to='/neighborhoods' />} />
                    <Route path='neighborhoods' element={<Neighborhoods />} />
                    <Route path='chatlist' element={<ChatList />} />
                    <Route path='chatroom/:chatId' element={<ChatRoom />} />
                    <Route path='mypage' element={<MyPage />} />
                    <Route
                        path='*'
                        element={<Redirect to='/neighborhoods' />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
