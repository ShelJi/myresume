import { useState, useEffect } from 'react'

const SystemTheme = () => {

    const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    const [theme, setTheme] = useState('default');

    const defaultTheme = () => {
        setTheme('default');
    }

    const darkTheme = () => {
        setTheme('dark')
    }

    const lightTheme = () => {
        setTheme('light')
    }

    useEffect(() => {

        if (theme === "default") {
            document.body.setAttribute('data-theme', sysTheme);
        }
        else {
            document.body.setAttribute('data-theme', theme);
        }

    }, [sysTheme, theme]);

    return { theme, defaultTheme, darkTheme, lightTheme }
}

export default SystemTheme