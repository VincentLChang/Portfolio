import { useState } from 'react'
import './ImageSlider.css'

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className="image-slider">

      <div className="slider-image-container">
        <img
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className="slider-image"
        />

        <button
          className="slider-button slider-button-left"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ←
        </button>

        <button
          className="slider-button slider-button-right"
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default ImageSlider