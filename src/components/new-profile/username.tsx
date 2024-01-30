import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Wrapper from "./wrapper";

const Username = () => {
  return (
    <Wrapper backButton={true}>
      <main className="relative flex w-full pt-6 md:px-2xl md:py-lg lg:justify-center lg:p-2xl lg:w-2/3">
        <div className="mt-8 w-full p-3 lg:!w-[640px] lg:pt-24">
          <div className="mb-14">
            <h1 className="text-5xl font-bold leading-3 tracking-[1-px] lg:tracking-[-2px] mb-10 pt-4">
              Choose a username
            </h1>
            <p className="text-muted-foreground">
              Choose a Linktree URL for your new Linktree. You can always change
              it later.
            </p>
          </div>
          <div>
            <Input
              className="bg-stone-200 border-none h-12"
              placeholder="linktr.ee/Username"
            />
            <div className="pt-14">
              <Button
                disabled
                className="w-full text-bold rounded-full text-white text-lg h-12 bg-purple-700 hover:bg-purple-800 disabled:bg-stone-300 disabled:text-black"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Username;
