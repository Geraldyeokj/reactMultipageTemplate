import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import Assets from './pages/assets';
import SignUp from './pages/signup';
import 'antd/dist/reset.css';
import AssetTransfer from './pages/AssetTransfer';
import { NotificationWrapper } from './components/Notification/NotificationWrapper';
import { assetsLink } from "./util/internalLinks";
import TransferConfirmation from './pages/transferConfirmation';
import TransferSuccess from './pages/transferSuccess';
import TwoFactorAuth from './pages/twoFactorAuth';
import AssetDetails from './pages/AssetDetails';


function App() {
    return (
        <Router>
            <NotificationWrapper/>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path={assetsLink} element={<Assets />} />
                <Route path="/assets/:id" element={<AssetDetails /> } />
                <Route path="/assetTransfer/:id" element={<AssetTransfer /> } />
                <Route path='/transferConfirmation' element={<TransferConfirmation />} />
                <Route path='/transferSuccess' element={<TransferSuccess />} />
                <Route path='/twofactorauth' element={<TwoFactorAuth />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
