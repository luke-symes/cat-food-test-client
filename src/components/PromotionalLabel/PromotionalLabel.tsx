import classNames from 'classnames';

interface Props {
  label: string;
  className: string;
}

export function PromotionalLabel({ label, className }: Props) {
  const classes = classNames(
    className,
    'bg-pink-300 md:rotate-6 -rotate-6 w-fit h-fit p-1 uppercase absolute',
  );

  return <div className={classes}>{label}</div>;
}
