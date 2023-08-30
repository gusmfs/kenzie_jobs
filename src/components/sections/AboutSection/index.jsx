import mainImage from "../../../assets/main.png";
import styles from "./style.module.scss";

export const AboutSection = () => {
  return (
    <>
      <section className={styles.about}>
        <div className="container">
          <div className={styles.flexBox}>
            <div className={styles.aboutInfo}>
              <h2 className="title one blue">Sobre a jobs</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                quis orci nec felis varius pretium. Nam eu diam erat. Sed libero
                ante, finibus id nunc suscipit, sagittis sagittis sem. Nam
                accumsan, turpis sed consequat tincidunt, nibh odio tincidunt
                nunc, aliquet sodales sem tortor sed lectus.{" "}
              </p>
            </div>
            <div>
              <img src={mainImage} alt="main image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
