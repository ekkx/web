import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "ekkx" }, { name: "description", content: "ekkx/web" }];
}

export default function Home() {
  return (
    <div className="grid place-items-center h-dvh">
      <p>hi</p>
    </div>
  );
}
