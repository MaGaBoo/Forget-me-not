import React, { useState, useEffect } from "react";
import TaskList from "./lists/TaskList";
import Settings from "./settings/Settings";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [dark, setDark] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  /**
   * UseEffect
   * Create state variable to storage config value from localStorage
   */

  useEffect(() => {
    try {
      const config = JSON.parse(localStorage.getItem("config"));
      setDark(config.theme);
    } catch (error) {

    }
  }, []);

  /**
   *
   * Function to toggle theme dark/light
   */

  const toggleDark = () => setDark(!dark);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div
        className={
          "h-screen p-4 flex flex-col bg-gray-100 text dark:bg-neutral-800 transition dark:text-pink-50"
        }
      >
        <div>
          <TaskList // this children take control of state defined on father App
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {showSettings && (
              <motion.div
                initial={{ y: "100vh" }}
                animate={{ y: "0" }}
                exit={{ y: "100vh" }}
              >
                <Settings toggleDark={toggleDark} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default App;
