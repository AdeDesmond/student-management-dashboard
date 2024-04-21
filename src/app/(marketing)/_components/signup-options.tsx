import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { ShowOptions } from "./show-options";
import Image from "next/image";

export const SignUpOptions = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#8C4AF2]" size="sm">
          Sign up
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center justify-center">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={"/svgs/signup.svg"}
                alt="signup"
                width={100}
                height={100}
              />
              <p className="mb-2 text-lg font-bold">
                Sign up for a better experience
              </p>
            </div>
          </DialogTitle>
          <DialogDescription>
            <ShowOptions
              path="/sign-up"
              content="Please confirm your status and proceed to signup"
              label="Sign up"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
