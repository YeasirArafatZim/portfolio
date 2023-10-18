import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ProjectPreview.module.css';
import './style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

export default function ProjectPreview({ show, onHide, data, darkMode }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 560 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName={darkMode ? styles.contentClass : ''}
      >
        <Modal.Header closeButton onHide={onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 400ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['mobile']}
            dotListClass="custom-dot-list-style"
            partialVisbile={false}
            itemClass="carousel-item-padding-40-px"
          >
            {data.screenshots?.map((img, idx) => (
              <div key={idx} className={styles.imgDiv}>
                <Image
                  src={`./screenshots/${data.imgFolder}/${img.location}`}
                  alt={img.name}
                  height={400}
                  width={800}
                  className={styles.img}
                />
              </div>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
