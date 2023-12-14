import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export default function useFontsLoad() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const checkFonts = async () => {
      try {
        await document.fonts.load('1em BardonStamp-Regular'); // Substitua YourFontName pelo nome da sua fonte
        await document.fonts.load('1em BardonClean-Regular'); // Substitua YourFontName pelo nome da sua fonte
        await document.fonts.load('1em WorkSans-Regular'); // Substitua YourFontName pelo nome da sua fonte
        await document.fonts.load('1em BLUEDREAM-Regular'); // Substitua YourFontName pelo nome da sua fonte
        setFontsLoaded(true);
      } catch (error) {
        console.error('Erro ao carregar fonte:', error);
        setFontsLoaded(false);
      }
    };

    checkFonts();
  }, []);

  return fontsLoaded
}