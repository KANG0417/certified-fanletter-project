import LetterViews from "components/LetterViews";
import LetterWrite from "components/LetterWrite";
import React from "react";

function HomePage() {
  return (
    <div>
      <LetterWrite />
      <LetterViews />
    </div>
  );
}

export default HomePage;
