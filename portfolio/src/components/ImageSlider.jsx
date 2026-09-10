import { useState } from 'react'
import './ImageSlider.css'

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const nextImage = () => {
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const previousImage = () => {
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const handleTransitionEnd = () => {
    // If we've reached the cloned first image
    if (currentIndex === images.length) {
      setIsTransitioning(false)
      setCurrentIndex(0)
    }

    // If we've gone before the first image
    if (currentIndex === -1) {
      setIsTransitioning(false)
      setCurrentIndex(images.length - 1)
    }
  }

  const displayImages = [
    ...images,
    images[0],
  ]

  return (
    <div className="image-slider">

      <div className="slider-image-container">

        <div
          className="slider-track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? 'transform 0.5s ease-in-out'
              : 'none',
          }}
        >
          {displayImages.map((image, index) => (
            <div className="slider-slide" key={index}>
              <img
                src={image}
                alt={`Project screenshot ${
                  (index % images.length) + 1
                }`}
                className="slider-image"
              />
            </div>
          ))}
        </div>

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
              index === currentIndex % images.length
                ? 'active'
                : ''
            }`}
            onClick={() => {
              setIsTransitioning(true)
              setCurrentIndex(index)
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

export default ImageSlider