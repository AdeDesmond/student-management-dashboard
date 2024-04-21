import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ShowOptions } from "./show-options";
import Image from "next/image";

export const SignInOptions = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Log in
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/svgs/signin.svg"}
                alt="signup"
                width={100}
                height={100}
              />
              <p className="mb-2 text-lg font-bold">
                Log in for a better experience
              </p>
            </div>
          </DialogTitle>
          <DialogDescription>
            <ShowOptions
              path="/sign-in"
              label="Sign in "
              content="Please confirm your status and proceed to login"
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button size="sm">cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
