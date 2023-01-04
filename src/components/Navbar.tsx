import { JSX } from 'solid-js';

export default function Navbar(): JSX.Element {
  return (
    <nav class="py-5 px-10 grid grid-cols-3 items-center">
      <a href="/">
        <img
          src="https://ucarecdn.com/762db30b-57d6-4fe2-ae8b-c17aceb3a384/-/preview/-/quality/smart/-/format/auto/"
          alt=""
          class="h-14 w-14"
        />
      </a>
      <div class="space-x-6 justify-self-center">
        <a href="/" class="text-lg font-semibold text-gray-600">Home</a>
        <a href="/about" class="text-lg font-semibold text-gray-600">About</a>
        <a href="/admissions" class="text-lg font-semibold text-gray-600">Admissions</a>
        <a href="/admissions" class="text-lg font-semibold text-gray-600">Contacts</a>
      </div>
      <div class="justify-self-end">
        <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-lpsci-green px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lpsci-green focus:outline-none focus:ring-2 focus:ring-lpsci-green focus:ring-offset-2">Apply now</button>
      </div>
    </nav>
  );
}
