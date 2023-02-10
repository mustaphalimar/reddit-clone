import { Button } from "@chakra-ui/react";
import React from "react";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        width={{ base: "70px", md: "110px" }}
        display={{ base: "none", sm: "flex" }}
        mr={2}
        onClick={() => {}}
      >
        Log In
      </Button>
      <Button
        height="28px"
        width={{ base: "70px", md: "110px" }}
        display={{ base: "none", sm: "flex" }}
        mr={2}
        onClick={() => {}}
      >
        Sign Up{" "}
      </Button>
    </>
  );
};
export default AuthButtons;
