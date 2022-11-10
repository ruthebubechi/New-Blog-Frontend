import BlogLogo from "../assets/ruebycuisinelogo.jpeg";
import Chef from "../assets/chef.jpg";
import classes from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={classes.container}>
      <img
        src={BlogLogo}
        width="500px"
        height="250px"
        alt="rueby-cuisine-logo"
      />
      <div className={classes.subscribe__cta}>
        <div className={classes.subscribe__cta__image}>
          <img
            src={Chef}
            className={classes.subscribe__cta__image_img}
            alt="chef"
          />
        </div>
        <div className={classes.subscribe__cta__form}>
          <h3 className={classes.subscribe__cta__form__text}>
            MOSTLY SIMPLE, ALWAYS SEASONAL
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
