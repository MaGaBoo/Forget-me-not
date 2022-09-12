import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: "dark",
    lang: "es"
};

export default function Settings ({ toggleDark }) {
    const [config, setConfig] = useLocalStorage("config", defaultConfig);

/**
 * Function to toggle theme light/dark in LocalStorage and app state
 * @param {*} event - click event from React
 */

    const toggleMode = (event) => {
        event.preventDefault();
        setConfig((oldConfig) => ({
            ...oldConfig,
            theme: oldConfig.theme === "light" ? "dark" : "light"
        }));
        toggleDark();
    };

    return (
        <div className='text-right mr-4'>
            <hr className='my-4' />
                <h1 className="text-3xl text-pink-900 font-semibold mb-4 dark:text-pink-400">Settings</h1>
                <p className="text-sm font-semibold">Current theme: <span>{config.theme}</span></p>
                <button className="main-btn mt-4" type="button" onClick={toggleMode}>
                Toggle
                </button>
        </div>
    );
}
