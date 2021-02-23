import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, TabOneParamList } from "../types";

export type HomeScreenNavigationProp = StackNavigationProp<
  TabOneParamList,
  "HomeScreen"
>;

export type HomeScreenRouteProp = RouteProp<TabOneParamList, "HomeScreen">

export type LoginScreenNavigationProp = StackNavigationProp<
  TabOneParamList,
  "LoginScreen"
>;

export type LoginScreenRouteProp = RouteProp<TabOneParamList, "LoginScreen">