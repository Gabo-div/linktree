import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  href: string;
};

export default function MediaLink({ href, icon }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
      {icon({ className: "text-2xl" })}
    </a>
  );
}
