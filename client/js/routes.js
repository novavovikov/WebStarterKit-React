import AppRoot from './components/app-root.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

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