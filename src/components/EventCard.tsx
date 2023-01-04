import { JSX } from 'solid-js';

export default function EventCard(): JSX.Element {
  return (
    <div class="relative w-[27%] h-96 rounded-md shadow-sm">
      <div class="w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1672054280269-e8809178fd94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          class="object-center object-cover brightness-[.7] w-full h-full rounded-md shadow-sm"
        />
      </div>
      <div class="absolute bottom-0 inset-x-0 pb-5 pl-3 pr-6">
        <h1 class="text-white font-black text-5xl">2022</h1>
        <h1 class="text-white font-black text-5xl">SSG Elections</h1>
      </div>
    </div>
  );
}
