import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    LiveUpdates: {
      appId: '689ea234',
      channel: 'Production',
      autoUpdateMethod: 'none',
      maxVersions: 3
    }
  }
};

export default config;