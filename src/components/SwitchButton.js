import React from "react";
import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function SwitchButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={useColorModeValue("light", "dark")}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            icon={isDarkMode ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            flex="1"
            align="right"
            colorScheme="blue"
            borderRadius="lg"
            mx="2"
          ></IconButton>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SwitchButton;
