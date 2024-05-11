import ArticleCard from "../components/ArticleCard";
import styles from "./Home.module.css";

// Image imports
import handPlant from "../assets/hand-holding-plant.jpg";
import virtualShopping from "../assets/virtual-shopping.jpg";
import dataPrivacy from "../assets/data-privacy.jpg";

function Home() {
  return (
    <div className={styles.main}>
      <header className={styles.banner}>
        <h2 className={styles.slogan}>
          Join the{" "}
          <em className={styles.buzz}>
            <strong className={styles.buzz}>Buzz </strong>
          </em>
          {/* Option: 
          Our
          <em>
            <strong> passion,</strong>
          </em>
          <br /> your
          <em>
            <strong> success.</strong>
          </em> */}
        </h2>
        <form className={styles.searchForm}>
          <input
            type="text"
            placeholder="Type your desired article here"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
      </header>

      <main className={styles.articles}>
        <ArticleCard
          src={handPlant}
          name="Kiwis Lead the Charge"
          description="Sustainable Marketing Strategies Take Root in New Zealand"
        />
        <ArticleCard
          src={virtualShopping}
          name="The Metaverse Shopping Spree"
          description="How Brands Can Adapt Marketing for Virtual Worlds"
        />
        <ArticleCard
          src={dataPrivacy}
          name="Data Privacy Crossroads"
          description="Marketing Association NZ Urges Balance Between Personalisation and Consumer Trust"
        />
      </main>
    </div>
  );
}
export default Home;
