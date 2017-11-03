import AppRoot from './components/app-root';
import Home from './pages/home';
import About from './pages/about';

const routes = [
    {
        component: Home,
        routes: [
            {
                component: Home,
                path: '/',
                exact: true
            }
        ]
    }
];

export default routes;