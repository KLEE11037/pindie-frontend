"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";

export default function Shooters() {
  const games = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className={"main-inner"}>
      {games ? (
        <CardsList id="shooters" title="Шутеры" data={games} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
