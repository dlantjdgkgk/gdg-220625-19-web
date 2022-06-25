import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Neighborhoods from './components/Neighborhoods';
import MyPage from './components/MyPage';
import ChatList from './components/ChatList';
import ChatRoom from './components/ChatRoom';
import { AppContext } from './contexts';
import { Entry } from './components/Entry';

function App({ context }) {
    return (
        <AppContext.Provider value={context}>
            <Entry>
                <BrowserRouter>
                    <Routes>
                        <Route path='/'>
                            <Route
                                index
                                element={
                                    <Navigate
                                        to='/neighborhoods'
                                        replace={true}
                                    />
                                }
                            />
                            <Route
                                path='neighborhoods'
                                element={<Neighborhoods />}
                            />
                            <Route path='chatlist' element={<ChatList />} />
                            <Route
                                path='chatroom/:chatId'
                                element={<ChatRoom />}
                            />
                            <Route path='mypage' element={<MyPage />} />
                            <Route
                                path='*'
                                element={
                                    <Navigate
                                        to='/neighborhoods'
                                        replace={true}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Entry>
        </AppContext.Provider>
    );
}

export default App;
