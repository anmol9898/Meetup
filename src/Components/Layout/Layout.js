import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <div className={classes.main}>{props.children}</div>
      {/* <main>
                {props.children}
            </main> */}
    </div>
  );
}
export default Layout;
