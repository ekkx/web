import { Button } from "~/components/Button";

export function meta() {
  return [{ title: "ekkx" }, { name: "description", content: "ekkx/web" }];
}

export default function Home() {
  return (
    <div className="grid place-items-center h-dvh">
      <Button variant="primary">hello</Button>
    </div>
  );
}
