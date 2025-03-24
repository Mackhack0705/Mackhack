import { authClient } from "auth-client";
import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command.js";
import { Button } from "./ui/button.js";
import SignOut from "./SignOut.js";

const NavBar = () => {
  const [session, setSession] = useState<any>({});
  useEffect(() => {
    async function Session () {
      const result = await authClient.getSession();
      setSession(result.data?.session);
    }
    Session();
  }, []);

  const [open, setOpen] = useState<boolean>(false);
  useGSAP(() => {
    gsap.from(".navItems", {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  });
  return (
    <nav>
      <div className="flex items-center justify-between relative text-lg font-bold py-6 px-4 xl:px-20">
        <Link
          className="navItems text-2xl md:text-3xl bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent"
          to={"/"}
        >
          Mackhack
        </Link>
        <div
          id="menu"
          className="flex gap-4 items-center justify-center absolute top-14 right-5 bg-white border-[1px] border-gray-300 rounded-md w-28 py-4 invisible md:visible md:bg-transparent md:border-0 md:w-40 md:relative md:top-0 lg:justify-between"
        >
          <div className="navItems cursor-pointer">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
          {!session ? (
            <>
              <Link to={"/sign-in"}>
                <Button
                  variant="default"
                  className="navItems dark font-bold bg-linear-to-t from-gray-500 to-white"
                >
                  Login
                </Button>
              </Link>
              <Link to={"/sign-up"}>
                <Button
                  variant="default"
                  className="navItems dark font-bold bg-linear-to-t from-gray-500 to-white"
                >
                  SignUp
                </Button>
              </Link>
            </>
          ) : (
            <SignOut />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
