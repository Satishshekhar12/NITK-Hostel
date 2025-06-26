import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Home from '../pages/Home';
import Hostels from '../pages/Hostels';
import People from '../pages/People';
import Gallery from '../pages/Gallery';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';

const router = createBrowserRouter([
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
    {
        path: '/admin',
        element: <AdminDashboard />
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'hostels',
                element: <Hostels />
            },
            {
                path: 'people',
                element: <People />
            },
            {
                path: 'gallery',
                element: <Gallery/>
            }
        ]
    },
])

export default router;