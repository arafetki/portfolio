import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Form from "next/form";

export default function Newsletter() {
  return (
    <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2 text-pretty text-sm">
        <p className="font-semibold">Subscribe to my newsletter</p>
        <p className="text-muted-foreground">
          Get a recap of the latest news, articles, videos and resources, sent
          to your inbox every two weeks.
        </p>
      </div>
      <Form
        action=""
        className="flex flex-col gap-2 sm:flex-row sm:items-center"
      >
        <Input placeholder="Name" type="text" required />
        <Input placeholder="Email" type="email" required />
        <Button type="submit" size="lg" className="uppercase">
          Subscribe
        </Button>
      </Form>
    </div>
  );
}
