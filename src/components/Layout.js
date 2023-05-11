import Header from './Header';
import classes from './Layout.module.scss';

const Layout = (props) => {
    return (
        <>
            {/* NavBar */}
            <Header />

            <div className={classes.container}>
                {/* the content for each page */}
                {props.children}
            </div>
        </>
    );
}

export default Layout;