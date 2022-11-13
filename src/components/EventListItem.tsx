import { JSX } from 'solid-js';

export default function EventListItem(): JSX.Element {
  return (
    <div class="flex items-center py-4 w-full px-6">
      <div class="mr-6 flex flex-col items-center bg-lpsci-red text-white py-1 px-3">
        <span>DEC</span>
        <span class="text-2xl font-bold -pt-1">12</span>
      </div>
      <span class="text-xl text-lpsci-red">
        National Heroes Day
      </span>
    </div>
  );
}
