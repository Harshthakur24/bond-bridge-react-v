import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';
import Landing from './pages/Landing';

// Lazy load other pages
const About = lazy(() => import('./pages/About'));
const Download = lazy(() => import('./pages/Download'));
const ContactUs = lazy(() => import('./pages/Contact'));
const Support = lazy(() => import('./pages/Support'));

// Loading fallback component
const PageLoader = () => (
	<div className='flex justify-center items-center min-h-[60vh]'>
		<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500'></div>
	</div>
);

const routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<App />
				<ScrollRestoration />
			</>
		),
		children: [
			{ index: true, element: <Landing /> },
			{
				path: 'how-to-use',
				element: (
					<Suspense fallback={<PageLoader />}>
						<Support />
					</Suspense>
				),
			},
			{
				path: 'about',
				element: (
					<Suspense fallback={<PageLoader />}>
						<About />
					</Suspense>
				),
			},
			{
				path: 'download',
				element: (
					<Suspense fallback={<PageLoader />}>
						<Download />
					</Suspense>
				),
			},
			{
				path: 'contact-us',
				element: (
					<Suspense fallback={<PageLoader />}>
						<ContactUs />
					</Suspense>
				),
			},
		],
	},
]);

export default routes;
