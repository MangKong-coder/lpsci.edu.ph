import { JSX } from 'solid-js';
import EventCard from '~/components/EventCard';
import EventListItem from '~/components/EventListItem';
import NewsArticleCard from '~/components/NewsArticleCard';

export default function Home(): JSX.Element {
  return (
    <main>
      {/* SECTION: Hero */}
      <div class="max-h-screen w-screen">
        <div class="relative w-full bg-lpsci-green">
          <img
            src="https://ucarecdn.com/e59eda1f-23b8-47e2-bddb-2322f04c38d1/-/preview/-/scale_crop/1280x720/smart/-/quality/smart/-/format/auto/"
            alt=""
            class="w-full h-full rounded-md opacity-50 brightness-[.3]"
          />
          <div class="absolute w-full h-full top-[50%] left-[50%] text-center flex justify-center items-center" style={{ transform: 'translate(-50%, -50%)' }}>
            <div>
              <h1 class="text-5xl font-bold text-white mb-3">IN LPSCI,</h1>
              <h1 class="text-7xl font-bold text-center bg-white p-3 rounded-md">
                <span class="text-lpsci-red">WE </span>
                <span class="text-lpsci-yellow">SOAR </span>
                <span class="text-lpsci-green">HIGH</span>
              </h1>
              <div class="flex items-center justify-center space-x-3 py-7">
                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-lpsci-green px-5 py-2 text-lg font-medium text-white shadow-sm hover:bg-lpsci-green focus:outline-none focus:ring-2 focus:ring-lpsci-green focus:ring-offset-2">Apply now</button>
                <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-green-50 px-5 py-2 text-lg font-medium text-lpsci-green shadow-sm hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-lpsci-green focus:ring-offset-2">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION: About */}
      <div class="h-screen w-screen mt-12">
        <div class="grid grid-cols-2 h-full w-full">
          <div class="h-full w-full">
            <img
              src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/309142580_471880848289868_3662089346654731679_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH_IZwEXr2hwy3Z0OlNkTLUHpd3A8Rwckoel3cDxHBySnpaO_XVazra1YVOXNp6bvlOaIdpww-3MtTqwG2YZrql&_nc_ohc=ltO9OFwqSCAAX9u5vMC&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfBrYIJ2Zm92TzB_6PtqDBBDyB5d_2RQdSykXYk75dhLEQ&oe=637672F1"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-full w-full pl-16 pt-32">
            <h1 class="text-6xl font-bold mb-10">About</h1>
            <p class="pr-20 text-lg mb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente incidunt quos rem, repudiandae corrupti nam, accusamus, iusto blanditiis consectetur nobis illum. Officiis quasi sint et incidunt commodi temporibus labore cumque?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odit nesciunt eaque saepe rem ex recusandae enim vel? Exercitationem quas repellat voluptas nobis molestiae quos vero numquam veritatis cupiditate minima?
            </p>
            <a href="#" class="underline text-xl">Learn more about LPSci -&gt;</a>
          </div>
        </div>
      </div>
      {/* SECTION: Events */}
      <div class="h-screen w-screen py-20 px-8 bg-yellow-400">
        <h1 class="text-7xl font-bold text-white">
          Events
        </h1>
        <div class="flex items-center justify-around py-16">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

      {/* SECTION: Upcoming Events */}
      <div class="h-screen w-screen grid grid-cols-2">
        <div class="flex items-center justify-center h-full">
          <div>
            <h1 class="text-7xl font-bold">Upcoming</h1>
            <h1 class="text-7xl font-bold">Events</h1>
          </div>
        </div>
        <div class="w-full flex flex-col px-12 justify-center items-center divide-y divide-lpsci-red">
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
          <EventListItem />
        </div>
        <div />
      </div>
      {/* SECTION: News Articles */}
      <div class="h-screen w-screen py-20 px-8 bg-lpsci-green">
        <h1 class="text-7xl font-bold text-white">
          News & Articles
        </h1>
        <div class="flex items-center justify-around py-16">
          <NewsArticleCard />
          <NewsArticleCard />
          <NewsArticleCard />
        </div>
      </div>
      {/* SECTION: CTA */}
      <div class="h-[70vh] w-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-7xl font-bold text-white mb-6">
            <span class="text-lpsci-red">
              Become
              {' '}
            </span>
            <span class="text-lpsci-yellow">
              a
              {' '}
            </span>
            <span class="text-lpsci-green">
              Lapiscian!
            </span>
          </h1>
          <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-lpsci-green px-5 py-2 text-lg font-medium text-white shadow-sm hover:bg-lpsci-green focus:outline-none focus:ring-2 focus:ring-lpsci-green focus:ring-offset-2">Apply now</button>
        </div>
      </div>
      {/* SECTION: Footer */}
      <footer class="h-[40vh] w-screen flex items-center justify-center bg-yellow-100">
        <div class="flex items-center justify-center h-full ">
          <div class="flex flex-col items-center justify-center space-y-3">
            <img
              src="https://ucarecdn.com/762db30b-57d6-4fe2-ae8b-c17aceb3a384/-/preview/-/quality/smart/-/format/auto/"
              alt=""
              class="h-12 w-12"
            />
            <p class="text-base text-gray-500">A bright mind is nothing without a humble heart.</p>
            <div class="space-x-2">
              <a href="#">
                <button class="rounded-full p-1 text-lpsci-green border border-gray-200 hover:bg-gray-100">
                  <IconDashiconsFacebookAlt />
                </button>
              </a>
              <a href="#">
                <button class="rounded-full p-1 text-lpsci-yellow border border-gray-200 hover:bg-gray-100">
                  <IconDashiconsTwitter />
                </button>
              </a>
              <a href="#">
                <button class="rounded-full p-1 text-lpsci-red border border-gray-200 hover:bg-gray-100">
                  <IconDashiconsInstagram />
                </button>
              </a>

            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
