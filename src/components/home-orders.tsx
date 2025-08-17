import Cart from "./cart";
import Invoice from "./invoice";

function HomeOrders({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid gap-10 lg:grid-cols-[3fr,1fr]">
      <section className="flex-grow">{children}</section>
      <aside className="hidden items-end justify-between px-10 md:flex-shrink-0 md:flex-row lg:flex-col">
        <Cart />
        <Invoice />
      </aside>
    </main>
  );
}

export default HomeOrders;
