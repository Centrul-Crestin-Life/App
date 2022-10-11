import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={25} style={{ marginBottom: -3 }} {...props} />;
}