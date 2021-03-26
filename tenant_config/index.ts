import { ImageSourcePropType } from 'react-native';
import Config, { ConfigVariables } from 'react-native-ultimate-config';
import heineken from './heineken/resources/index';
import eisenbahn from './eisenbahn/resources/index';

type AppImages = {
  logo: ImageSourcePropType;
};

type AppColors = {
  primary: string;
};

type AppConfig = ConfigVariables & {
  appImages: AppImages;
  appColors: AppColors;
};

const tenantConfigs = {
  heineken,
  eisenbahn,
};

// @ts-ignore
export default { ...tenantConfigs[Config.APP_PIN], ...Config } as AppConfig;
