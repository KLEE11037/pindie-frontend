"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";

export default function pixel() {
  const games = useGetDataByCategory(endpoints.games, "pixel");

  return (
    <main className={"main-inner"}>
      {games ? (
        <CardsList id="pixel" title="Пиксельные" data={games} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
