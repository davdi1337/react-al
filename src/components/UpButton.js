import React, { useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

function UpButton() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <IconButton
        onClick={scollToTop}
        position="fixed"
        right="1vh"
        bottom="5vh"
        visibility={visible ? "visible" : "hidden"}
        colorScheme="blue"
        icon={<ArrowUpIcon />}
        size="lg"
        borderRadius="xl"
        zIndex="docked"
      ></IconButton>
    </>
  );
}

export default UpButton;
