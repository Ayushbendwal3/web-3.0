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
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  sendTransaction: () => void;

  transactionCount: string | null;
  transactions: never[];
  isLoading: boolean;
}

export const defaultValues: TransactionContextType = {
  handleChange: () => {},
  formData: {
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  },
  currentAccount: '',
  isLoading: false,
  transactionCount: '',
  transactions: [],
  connectWallet: () => {},
  sendTransaction: () => {}
};
