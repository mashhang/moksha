import styles from "./styles";
import { Navbar, Main, Products, Footer } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <Main />
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Products />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
