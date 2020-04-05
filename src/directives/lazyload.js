export default {
  inserted(element) {
    const loadImage = () => {
      const image = [...element.children].find((el) => el.nodeName === 'IMG');

      if (image) {
        image.src = image.dataset.src;
      }
    };

    const observeImage = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(element);
        }
      });
    };

    const createObserver = () => {
      const observer = new IntersectionObserver(observeImage);
      observer.observe(element);
    };

    if ('IntersectionObserver' in window) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
