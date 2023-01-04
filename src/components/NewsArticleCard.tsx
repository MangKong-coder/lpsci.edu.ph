import { JSX } from 'solid-js';

export default function NewsArticleCard(): JSX.Element {
  return (
    <article class="w-[28%]">
      <div class="bg-white rounded-md shadow-md">
        <div class="w-full h-48">
          <img
            src="https://images.unsplash.com/photo-1672357867195-33fc57085af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            class="w-full h-full object-cover object-center rounded-t-md"
          />
        </div>
        <div class="p-5">
          <h1 class="text-2xl font-bold mb-3">Induction of Newly Elected Club Officers</h1>
          <p class="text-gray-500 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod...</p>
          <p class="text-sm text-gray-700">John Doe | Ang Paham of Standard Press</p>
        </div>
      </div>
    </article>

  );
}
