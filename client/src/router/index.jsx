import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Home from '../pages/Home';
import Hostels from '../pages/Hostels';
import People from '../pages/People';
import Gallery from '../pages/Gallery';

const router = createBrowserRouter([
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
    }
])

export default router;