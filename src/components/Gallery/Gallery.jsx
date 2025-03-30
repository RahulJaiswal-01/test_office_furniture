import { galleryImages } from '../../assets/data/gallery';
const Gallery = () => {
  return (
    <div>
      {galleryImages.map(img => (
        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
        />
      ))}
    </div>
  );
};

export default Gallery;