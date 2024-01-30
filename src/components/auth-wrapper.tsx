import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AuthWrapper = () => {
  return (
    <div className="min-h-full mx-auto flex flex-col gap-2 justify-center items-center w-full">
      <div className="flex flex-col gap-2 w-[600px]">
        <Input placeholder="Email or username" />
        <Input placeholder="Password" />
      </div>
      <div className="flex flex-col gap-2 w-[600px]">
        <Button variant="outline" className="rounded-full">
          Continue with Google
        </Button>
        <Button variant="outline" className="rounded-full">
          Continue with Apple
        </Button>
      </div>
    </div>
  );
};
export default AuthWrapper;
