import Header from './Header';
import classes from './Layout.module.scss';

const Layout = (props) => {
    return (
        <>
            {/* NavBar */}
            <Header />

            <div className={classes.container}>
                {props.children}
            </div>
        </>
    );
}

export default Layout;