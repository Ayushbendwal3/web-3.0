import { useEffect, useState, createContext } from 'react';
import { ethers } from 'ethers';

import { contactABI, contactAddress } from '../utils/constants';
import {
  formDataType,
  TransactionContextType
} from './TransactionContext.types';

export const TransactionContext = createContext<TransactionContextType>({
  handleChange: () => {},
  formData: {
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  },
  setFormData: () => {},
  currentAccount: '',
  connectWallet: () => {}
});

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contactAddress,
    contactABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract
  });
};

export const TransactionsProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState<formDataType>({
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install the Metamask');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log('No accounts found');
      }

      console.log(accounts);
    } catch (error) {
      throw new Error('No Ethereum Object');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install the metamask');

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error('No Ethereum object.');
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please install the metamask');
    } catch (error) {
      console.log(error);

      throw new Error('No Ethereum object.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
