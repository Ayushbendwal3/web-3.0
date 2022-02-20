import { SetStateAction } from 'react';

export type formDataType = {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
};

export interface TransactionContextType {
  connectWallet: () => void;
  currentAccount: string;
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}
