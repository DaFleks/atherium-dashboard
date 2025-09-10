import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const page = async () => {
  return (
    <div className="w-fit mx-auto mt-48">
      <p className="mb-8">LOGGED IN</p>
      <Button
        onClick={async () => {
          "use server";
          await signOut();
        }}>
        LOGOUT
      </Button>
    </div>
  );
};

export default page;
