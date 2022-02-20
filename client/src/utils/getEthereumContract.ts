import { ethers } from 'ethers';
import { contactABI, contactAddress } from '../utils/constants';

const { ethereum } = window;

export const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contactAddress,
    contactABI,
    signer
  );

  return transactionContract;
};
