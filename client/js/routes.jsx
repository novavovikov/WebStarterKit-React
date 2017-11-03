import AppRoot from './components/app-root';
import Home from './pages/Home';
import About from './pages/About';

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