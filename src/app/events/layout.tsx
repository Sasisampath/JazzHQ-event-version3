import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

/**
 * Shared by /events and /events/explore. It persists across the route
 * change, so the navbar stays put and the black stage never unmounts —
 * no white flash between the hero and the explorer.
 */
export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-[#08080a]">
      <Header />
      <main className="flex-1 bg-[#08080a]">{children}</main>
      <Footer />
    </div>
  );
}
