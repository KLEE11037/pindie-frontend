"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";

export default function Runners() {
  const games = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className={"main-inner"}>
      {games ? (
        <CardsList id="runners" title="Ранеры" data={games} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
