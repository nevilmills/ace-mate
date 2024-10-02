import { Feed } from "@/components/feed";

export default async function Home() {
  return (
    <div className="px-12 py-8 flex flex-row justify-center">
      <Feed />
    </div>
  );
}
