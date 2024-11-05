import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          perspiciatis odit aliquam quisquam libero! Quos architecto esse magnam
          deserunt adipisci voluptates vel, quia, ad eum sunt facere, dolorum
          exercitationem eveniet.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} className="w-[100%] h-[100%]" alt="" />
      </div>
    </section>
  );
};

export default CardDeal;
