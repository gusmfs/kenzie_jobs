import styles from "./style.module.scss";

export const BannerSection = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className="container">
          <h2 className={`title one ${styles.bannerTitle}`}>Trabalho é na jobs</h2>
        </div>
      </section>
    </>
  );
};
