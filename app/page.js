import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { getGamesByCategory } from "./data/data-utils.js";
import { CardsList } from "./components/CardsList/CardsList";
export const getData = async (url) => {
  try {
    const response = await fetch(url)
    if (response.status !== 200) {
      throw new Error('Ошибка получения данных')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export default function Home() {
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />
      <CardsList
        id="popular"
        title="Популярное"
        data={popularGames}
      ></CardsList>
      <CardsList id="new" title="Новинки" data={newGames}></CardsList>

      <Promo />
    </main>
  );
}
