import { Header } from "@/components/header";
import { List } from "@/components/list";
import { StoreProvider } from "@/lib/store";

export default function Home() {
  return (
    <StoreProvider>
      <Header />
      <List />
    </StoreProvider>
  );
}
