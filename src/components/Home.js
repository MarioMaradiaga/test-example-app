import { useState, useCallback } from "react";

function Home() {
  const [showDescription, setShowDescription] = useState(false);
  const onClick = useCallback(() => {
    setShowDescription(true);
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={onClick}>Click me</button>
      {showDescription && (
        <div className="description">
          Hey there, I'm some behavioural functionality
        </div>
      )}
    </div>
  );
}

export default Home;
