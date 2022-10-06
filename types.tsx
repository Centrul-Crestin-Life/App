/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface GeneralParamList extends GeneralStackParamList {}
    interface TineretParamList extends TineretStackParamList {}
  }
}

export type GeneralStackParamList = {
  Root: NavigatorScreenParams<GeneralTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type TineretStackParamList = {
  Root: NavigatorScreenParams<GeneralTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type GeneralStackScreenProps<Screen extends keyof GeneralStackParamList> = NativeStackScreenProps<
  GeneralStackParamList,
  Screen
>;

export type TineretStackScreenProps<Screen extends keyof GeneralStackParamList> = NativeStackScreenProps<
  GeneralStackParamList,
  Screen
>;

export type GeneralTabParamList = {
  Home: undefined;
  Calendar: undefined;
};

export type TineretTabParamList = {
  Announcement: undefined;
};

export type GeneralTabScreenProps<Screen extends keyof GeneralTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<GeneralTabParamList, Screen>,
  NativeStackScreenProps<GeneralStackParamList>
>;

export type TineretTabScreenProps<Screen extends keyof TineretTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TineretTabParamList, Screen>,
  NativeStackScreenProps<TineretStackParamList>
>;