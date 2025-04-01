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
import Profile from "./Profile.js";

const NavBar = () => {
  const [session, setSession] = useState<any>({});
  useEffect(() => {
    async function Session() {
      try {
        const result = await authClient.getSession();
        console.log(result);
        setSession(result.data);
      }
      catch (error) {
        console.log(error);
      }
      // setSession(result.data);
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
          className="navItems text-3xl bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent"
          to={"/"}
        >
          Mackhack
        </Link>
        {!session.session ? (
          <></>
        ) : (
          <div className="navItems hidden md:flex gap-10 items-center">
            <Link
              className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent"
              to={"/courses"}
            >
              Courses
            </Link>
            <Link
              className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent"
              to={"/contactUs"}
            >
              Contact us
            </Link>
            <Link
              className="link bg-linear-to-t from-gray-500 to-white bg-clip-text text-transparent"
              to={"/aboutUs"}
            >
              About
            </Link>
          </div>
        )}

        <div className="flex gap-2 items-center">
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
          {!session.session ? (
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
            <>
              <div className="navItems flex gap-2 items-center cursor-pointer">
                  <Link to={"/cart"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                      className="size-6 text-white"
                    >
                      <path d="M352 160v-32C352 57.4 294.6 0 224 0 153.4 0 96 57.4 96 128v32H0v272c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V160h-96zm-192-32c0-35.3 28.7-64 64-64s64 28.7 64 64v32H160v-32zm160 120c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm-192 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" />
                    </svg>
                  </Link>
              </div>
              <Profile session={session} />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
