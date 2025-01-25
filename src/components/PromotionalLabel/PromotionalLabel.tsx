import classNames from 'classnames';

interface Props {
  label: string;
  position?: 'top-right';
}

export function PromotionalLabel({ label, position }: Props) {
  const classes = classNames('bg-pink-300 rotate-6 w-fit h-fit p-1 uppercase', {
    'absolute -top-2 -right-2': position === 'top-right',
  });

  return <div className={classes}>{label}</div>;
}
