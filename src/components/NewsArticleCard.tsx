import { JSX } from 'solid-js';

export default function NewsArticleCard(): JSX.Element {
  return (
    <article class="w-[28%]">
      <div class="bg-white rounded-md shadow-md">
        <img
          src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.15752-9/313910923_1070324090307958_3222863666193753248_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeED1pkBq_tsIf5-PFh0WruEknH116q_uBGScfXXqr-4EUgyrO0wIsMcynEOy4lDWFlwg7P_AYjUQ4940AvZkiQR&_nc_ohc=DYpWDt_TCUwAX9L0CLo&_nc_ht=scontent.fmnl8-3.fna&oh=03_AdRuzi5O0FkzYSwFA9okOXdKUPYKmyyLwJdc5E8SVSg3rQ&oe=63984E55"
          alt=""
          class="w-full h-48 rounded-t-md"
        />
        <div class="p-5">
          <h1 class="text-2xl font-bold mb-3">Induction of Newly Elected Club Officers</h1>
          <p class="text-gray-500 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod...</p>
          <p class="text-sm text-gray-700">John Doe | Ang Paham of Standard Press</p>
        </div>
      </div>
    </article>

  );
}
