import React from "react";
import Card from "../UI/Card";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <Card className={styles.card}>
      <div className={styles.actions}>
        <button>S3</button>
        <button>Google Drive</button>
      </div>

      <div className={styles.gallery}>
        {images.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} alt="Google Drive" />
        ))}
      </div>
    </Card>
  );
};

export default Gallery;
