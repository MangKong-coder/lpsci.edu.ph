import { JSX } from 'solid-js';

export default function Home(): JSX.Element {
  return (
    <main>
      <div class="h-screen w-screen px-8">
        <div class="relative w-full h-full rounded-md bg-lpsci-green">
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
    </main>
  );
}
