import { Link } from "@inertiajs/react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export function HomeCarousel() {
    return (
        <Carousel className="h-[50vh] lg:h-[70vh] w-full relative">

            <Carousel.Item>
                <img className="w-full h-[50vh] lg:h-[70vh] object-cover" src="/images/stba_1.jpeg" alt="Slide 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-full h-[50vh] lg:h-[70vh] object-cover" src="/images/stba_2.jpg" alt="Slide 2" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-full h-[50vh] lg:h-[70vh] object-cover" src="/images/stba_3.jpeg" alt="Slide 3" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="w-full h-[50vh] lg:h-[70vh] object-cover" src="/images/stba_4.jpeg" alt="Slide 4" />
            </Carousel.Item>
        </Carousel>
    );
}
