import { ImageProps } from 'react-native';
import logo from '../../assets/logo.png';
import { HeaderLogo } from './styles';

export default function Logo({ ...rest }: ImageProps) {
  return (
    <HeaderLogo 
      source={logo}
      resizeMode='center'
      {...rest}
    />
  );
};