import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Users from './routes/Users';
import Farm from './routes/Farm';
import Preschool from './routes/Preschool';
import HairSalon from './routes/HairSalon';
import Housing from './routes/Housing';
import Notice from './routes/Notice';
import Teacher from './routes/Teacher';
import Curriculum from './routes/Curriculum';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'farm',
                element: <Farm />,
            },
            {
                path: 'preschool',
                element: <Preschool />,
                children: [
                    {
                        path: 'teacher',
                        element: <Teacher />,
                    },
                    {
                        path: 'curriculum',
                        element: <Curriculum />,
                    },
                ],
            },
            {
                path: 'hairsalon',
                element: <HairSalon />,
            },
            {
                path: 'housing',
                element: <Housing />,
            },
            {
                path: 'notice',
                element: <Notice />,
            },
        ],
    },
]);

export default router;
