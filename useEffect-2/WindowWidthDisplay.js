const useEffect = React.useEffect
const useState = React.useState

const WindowWidthDisplay = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log('Resizing...');
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener("resize", handleResize); 
      };

  }, []);

  return <p>The current window width is: {windowWidth}px</p>;
};

