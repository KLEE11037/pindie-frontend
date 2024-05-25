"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main className={"main-inner"}>
      {newGames ? (
        <CardsList id="new" title="Новинки" data={newGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
