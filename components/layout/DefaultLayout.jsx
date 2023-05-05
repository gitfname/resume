import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';

const DefaultLayout = ({ children }) => {
	return (
		<div className='pb-12'>
			<PagesMetaHead />
			<AppHeader />
			<div>{children}</div>
			{/* <AppFooter /> */}
		</div>
	);
};

export default DefaultLayout;
