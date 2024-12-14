import type {FC} from 'react'
import {NavBar, TabBar} from 'antd-mobile'
import {BrowserRouter, Route, Routes, useLocation, useNavigate} from 'react-router'
import {RedoOutline, HistogramOutline, UnorderedListOutline, UserOutline,} from 'antd-mobile-icons'
import Home from './pages/Home'
import './App.css'

const Bottom: FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {pathname} = location

    const setRouteActive = (value: string) => {
        navigate(value);
    }

    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <RedoOutline />,
        },
        {
            key: '/todo',
            title: '待办',
            icon: <UnorderedListOutline/>,
        },
        {
            key: '/message',
            title: '消息',
            icon: <HistogramOutline />,
        },
        {
            key: '/me',
            title: '我的',
            icon: <UserOutline/>,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon}/>
            ))}
        </TabBar>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="top">
                    <NavBar back={null}>Lite Node</NavBar>
                </div>
                <div className="body">
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/todo" element={<Todo/>}/>
                        <Route path="/message" element={<Leaderboard/>}/>
                        <Route path="/me" element={<PersonalCenter/>}/>
                    </Routes>
                </div>
                <div className="bottom">
                    <Bottom/>
                </div>
            </div>
        </BrowserRouter>
    )
}


function Todo() {
    return <div>待办</div>
}

function Leaderboard() {
    return <div>Leaderboard</div>
}

function PersonalCenter() {
    return <div>我的</div>
}
