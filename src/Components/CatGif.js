// import React, { useState } from "react";
// export default function CatGif() {
//   const [gifUrl, setGifUrl] = useState("");

//   const fetchCatGif = async () => {
//     try {
//       const response = await fetch(
//         "https://cataas.com/cat/gif,orange?json=true"
//       );
//       const imageData = await response.json();
//       setGifUrl(`https://cataas.com/cat/${imageData._id}`);
//     } catch (error) {
//       console.error("Error fetching cat gif:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchCatGif}>Get Orange Cat Gif</button>
//       {gifUrl && <img src={gifUrl} alt="Orange Cat Gif" />}
//     </div>
//   );
// }

// This is the new structure I created for this component. I went with React Bootstrap for my overall CSS styling.
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import "./CSS/ProductDetail.css";
function CatGif() {
  const [gifUrl, setGifUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatGif = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://cataas.com/cat/gif,orange?json=true"
      );
      const imageData = await response.json();
      setGifUrl(`https://cataas.com/cat/${imageData._id}`);
    } catch (error) {
      console.error("Error fetching cat gif:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center my-3 card-container">
      <div className="fixedButton">
        <Button onClick={fetchCatGif} variant="primary" disabled={isLoading}>
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </>
          ) : (
            "Get Orange Cat Gif"
          )}
        </Button>
      </div>
      {gifUrl && (
        <Image src={gifUrl} alt="Orange Cat Gif" className="mt-3" fluid />
      )}
    </div>
  );
}

export default CatGif;
