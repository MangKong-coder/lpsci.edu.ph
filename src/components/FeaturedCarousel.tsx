import { JSX, createSignal } from 'solid-js';
import { createSlider } from 'solid-slider';
import autoplay from 'solid-slider/plugins/autoplay';

function FeaturedImage(props: {src: string, alt: string}): JSX.Element {
  return (

    <img
      class="w-full h-full object-contain object-center"
      src={props.src}
      alt={props.alt}
    />
  );
}

export default function FeaturedCarousel(): JSX.Element {
  const [pause] = createSignal(false);
  const [
    slider,
    {
      current,
      next,
      prev,
    },
  ] = createSlider({ loop: true }, autoplay(6000, {
    pause,
  }));
  slider;

  return (
    <div class="relative h-full w-full md:h-[80vh] md:w-screen group">
      <button
        class="hidden md:group-hover:inline absolute top-[50%] left-4 md:p-3 rounded-full bg-gray-500 opacity-60 z-10"
        onClick={prev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          class="text-white text-xl"
        >
          <path fill="currentColor" d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z" />

        </svg>
      </button>
      <div class="group w-full h-full md:w-screen md:h-[80vh]" use:slider>
        <img
          class="w-full h-full object-contain object-center"
          src="/banners/jeepney-phaseout-banner.png"
          alt="Jeepney Phaseout"
        />
        <img
          class="w-full h-full object-contain object-center"
          src="/banners/website-launch.png"
          alt="LPSCI Website Launch"
        />
      </div>
      <button
        class="hidden md:group-hover:inline absolute top-[50%] right-4 p-3 rounded-full bg-gray-500 opacity-60 z-10"
        onClick={next}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          class="text-white text-xl"
        >
          <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  );
}
