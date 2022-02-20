interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (a: React.ChangeEvent<HTMLInputElement>, b: string) => void;
}

export const commonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

export const Input = ({ handleChange, name, ...rest }: InputProps) => (
  <input
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    step="0.001"
    onChange={(e) => handleChange(e, name)}
    {...rest}
  />
);
