import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map((image) => (
      <li key={image.id} className={styles.item} onClick={() => onImageClick(image)}>
        <ImageCard src={image.src} alt={image.alt} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;