interface Props {
  as?: 'button' | 'a';
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

export function Button({ as = 'button', children }: Props) {
  const Element = as;

  return <Element>{children}</Element>;
}
