import { IconType } from "react-icons";

type Props = {
  name: string;
  icon: IconType;
  href: string;
};

export default function Item({ name, icon, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-full ring-slate-500/50 ring-1 px-6 py-4 rounded-full hover:ring-red-300 hover:text-red-300"
    >
      {icon({ className: "text-2xl" })}
      <span className="ml-4">{name}</span>
    </a>
  );
}
