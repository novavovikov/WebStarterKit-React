import AppRoot from './components/app-root';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const routes = [
	{ component: AppRoot,
		routes: [
			{ path: '/',
				exact: true,
				component: Home
			},
			{ path: '/home',
				component: Home
			},
			{ path: '/about',
				component: About
			},
			{
				path: '*',
				component: NotFound
			}
		]
	}
];

export default routes;