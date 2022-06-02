import { useRouter } from "next/router";

import Link from "next/link";

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
};

interface Props {
  text: string,
  href: string
};

export const ActiveLink = ({ text, href }: Props) => {
  const { route } = useRouter();

  return (
    <Link href={href}>
      <a style={route === href ? style : undefined}>{text}</a>
    </Link>
  )
}
