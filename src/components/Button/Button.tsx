import classNames from 'classnames';

interface Props {
  as?: 'button' | 'a';
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: `https://${string}`;
}

export function Button({
  as = 'button',
  children,
  variant = 'primary',
  onClick,
  href,
}: Props) {
  const Element = as;

  const classes = classNames(
    'inline-block rounded-sm w-44 p-2 uppercase text-center cursor-pointer',
    {
      'bg-emerald-500 text-white': variant === 'primary',
      'bg-transparent text-emerald-500 border-[1px] border-emerald-500':
        variant === 'secondary',
    },
  );

  return (
    <Element onClick={onClick} href={href} className={classes}>
      {children}
    </Element>
  );
}
