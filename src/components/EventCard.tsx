import { JSX } from 'solid-js';

export default function EventCard(): JSX.Element {
  return (
    <div class="relative w-[27%] h-96 rounded-md shadow-sm">
      <img
        src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.15752-9/313393918_456325769976964_1581625507810133734_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFBntz-Dc75aUF8Qpg4R0_eEebqcl3f7lgR5upyXd_uWCrq3i6n0rD7jYfZeLDYVE1uCIR6_UApfbvBZtYJmEcQ&_nc_ohc=Xj1mayojxrEAX-BhGit&tn=8yu1JErVk4ZfXODF&_nc_ht=scontent.fmnl8-1.fna&oh=03_AdQYxNzCXC7cHl4c6LGqtzzNLGWzd6LWrSgrbARq2qmnSQ&oe=639865E4"
        alt=""
        class="object-center object-fill brightness-[.7] w-full h-full rounded-md shadow-sm"
      />
      <div class="absolute bottom-0 inset-x-0 pb-5 pl-3 pr-6">
        <h1 class="text-white font-black text-5xl">2022</h1>
        <h1 class="text-white font-black text-5xl">SSG Elections</h1>
      </div>
    </div>
  );
}
