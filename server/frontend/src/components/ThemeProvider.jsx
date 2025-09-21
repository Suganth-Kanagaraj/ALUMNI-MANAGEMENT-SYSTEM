import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
    const { theme } = useSelector((state) => state.theme);
    return (
        <div className={theme}>
            <div
        className={`min-h-screen ${
          theme === 'light'
            ? 'bg-warmBeige text-darkSlate'           // Light theme colors
            : 'bg-jetBlack text-paleGray'              // Dark theme colors
        }`}
      >
        {/* Accent and Highlight examples */}
        <div className={`p-4 ${
          theme === 'light'
            ? 'border-accent text-sageGreen'           // Light theme accent
            : 'border-burgundy text-burntOrange'       // Dark theme accent
        }`}>
          {children}
        </div>
            </div>
        </div>
    );
}
