import type { ButtonHTMLAttributes, FC } from 'react';

type ButtonColor = 'blue' | 'green' | 'red' | 'orange' | 'black' | 'white';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ButtonColor;
};

const getColorClasses = (color: ButtonColor | undefined) => {
  switch (color) {
    case 'black':
      return 'bg-black border-black text-white';

    case 'white':
      return 'bg-white border-gray-600 text-gray-600';

    case 'green':
      return 'bg-green-600 border-green-600 text-white';

    case 'orange':
      return 'bg-orange-400 border-orange-400 text-white';

    case 'red':
      return 'bg-red-600 text-white border-red-600';

    case 'blue':
    default:
      return 'bg-blue-500 border-blue-500 text-white';
  }
};

const DEFAULT_BUTTON_CLASSES = 'rounded-md p-3 py-1 border-2';

const Button: FC<ButtonProps> = ({ className, color = 'blue', ...props }) => {
  const colorClasses = getColorClasses(color);

  return (
    <button {...props} className={`${DEFAULT_BUTTON_CLASSES} ${colorClasses} ${className ?? ''}`} />
  );
};

export default Button;
