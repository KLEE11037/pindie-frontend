"use client";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsList } from "../components/CardsList/CardsList";
import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from "../api/config";

export default function Tds() {
  const games = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main className={"main-inner"}>
      {games ? <CardsList id="tds" title="tds" data={games} /> : <Preloader />}
    </main>
  );
}


