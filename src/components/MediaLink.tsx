import { IconType } from "react-icons";

type Props = {
  name: string;
  icon: IconType;
  href: string;
};

export default function MediaLink({ name, href, icon }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-red-300 flex items-center px-4 py-2">
      {icon({ className: "text-2xl" })}
      <span className="ml-2">{name}</span>
    </a>
  );
}
