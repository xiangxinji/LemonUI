import Carousel from './index';
import CarouselItem from '../CarouselItem/index';
import '../../src/styles/index.scss';
export default {
  title: '走马灯',
};

export const baseUsage = () => ({
  components: {
    LeCarousel: Carousel,
    LeCarouselItem: CarouselItem,
  },
  template: `
    <div>
    <le-carousel>
      <le-carousel-item>
        <h2>1</h2>
      </le-carousel-item>
      <le-carousel-item>
        <h2>2</h2>
      </le-carousel-item>
      <le-carousel-item>
        <h2>3</h2>
      </le-carousel-item>
      <le-carousel-item>
        <h2>4</h2>
      </le-carousel-item>
    </le-carousel>
    </div>
  `,
});
