import { JSX } from 'solid-js';

export default function Navbar(): JSX.Element {
  return (
    <nav class="py-5 px-10 flex items-center justify-between">
      <div class="flex items-center space-x-20">
        <a href="/">
          <img
            src="https://ucarecdn.com/762db30b-57d6-4fe2-ae8b-c17aceb3a384/-/preview/-/quality/smart/-/format/auto/"
            alt=""
            class="h-14 w-14"
          />
        </a>
        <div class="hidden md:block space-x-6 justify-self-start">
          <a href="/about" class="text-lg font-semibold text-green-700">About</a>
          <a href="/admissions" class="text-lg font-semibold text-green-700">Contacts</a>
          <a href="/help" class="text-lg font-semibold text-green-700">Help</a>
        </div>
      </div>
      <div class="justify-self-end">
        <button type="button" class="inline-flex items-center rounded-full border border-transparent bg-green-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lpsci-green focus:outline-none focus:ring-2 focus:ring-lpsci-green focus:ring-offset-2">Contact Us</button>
      </div>
    </nav>
  );
}
