import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="min-h-screen bg-black w-full flex justify-center items-center">
      <Card className="w-fit min-h-[300px] min-w-[300px] md:min-w-[400px]">
        <CardHeader>
          <CardTitle>Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
