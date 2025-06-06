// app.config.ts
import * as dotenv from 'dotenv';
import { ExpoConfig, ConfigContext } from '@expo/config';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'HeyBale',
  slug: 'heybale',
  version: '1.0.0',
  sdkVersion: '53.0.0',
  extra: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    serverHostAddress: process.env.SERVER_ADDRESS
  },
});
