import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Assets from './pages/assets';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import 'antd/dist/reset.css';
import AssetTransfer from './pages/assetTransfer';
import AssetDetails from './components/Assets/AssetDetails';
import { NotificationWrapper } from './components/Notification/NotificationWrapper';
import { assetsLink } from "./util/internalLinks";


function App() {
    return (
        <Router>
            <NotificationWrapper/>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path={assetsLink} element={<Assets />} />
                <Route path="/assets/:id" element={<AssetDetails /> } />
                <Route path='/assetTransfer' element={<AssetTransfer />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
