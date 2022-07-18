import * as React from "react";
import { Searchbar } from "react-native-paper";
import CardProduto from "../components/CardProduto";

export default function Catalogo() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <CardProduto />
    </>
  );
}
