import { JSX } from 'solid-js';

interface NewsArticleCardProps {
  coverImg: string;
  hammer?: string;
  headline: string;
  lead: string;
  author: string;
  publication: string;
  articleLink: string;
}

export default function NewsArticleCard(props: NewsArticleCardProps): JSX.Element {
  return (
    <article class="w-9/12">
      <div>
        <div class="w-56 lg:w-full h-64 lg:h-96 rounded border-2  border-lpsci-yellow">
          <img
            src={props.coverImg}
            alt=""
            class="w-full h-full object-cover object-center"
          />
        </div>
        <div class="py-3 group">
          <a href={props.articleLink}>
            {props.hammer ? <h1 class="text-5xl capitalize font-semibold group-hover:underline">{props.hammer}</h1> : null}

            <h2 class="text-4xl mb-0.5 group-hover:underline">{props.headline}</h2>
          </a>
          <p class="text-gray-500 mb-3">{props.lead}</p>
          <p class="text-sm text-gray-700">
            {props.author}
            {' '}
            |
            {' '}
            {props.publication}
          </p>
        </div>
      </div>
    </article>

  );
}
