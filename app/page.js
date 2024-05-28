"use client";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";
import { CardsList } from "./components/CardsList/CardsList";
import { Preloader } from "./components/Preloader/Preloader";

export default function Home() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main className="main">
      <Banner />
      {popularGames && newGames ? (
        <>
          <CardsList id="popular" title="Популярные" data={popularGames} />
          <CardsList id="new" title="Новинки" data={newGames} />
        </>
      ) : (
        <Preloader />
      )}

      <Promo />
    </main>
  );
}
