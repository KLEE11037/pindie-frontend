"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";

export default function Popular() {
  const games = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main className={"main-inner"}>
      {games ? (
        <CardsList id="popular" title="Популярные" data={games} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
