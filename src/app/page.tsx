import { Header } from "@/components/header";
import { List } from "@/components/list";
import { StoreProvider } from "@/components/store-provider";

export default function Home() {
  return (
    <StoreProvider>
      <Header />
      <List />
    </StoreProvider>
  );
}
