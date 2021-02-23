import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, TabOneParamList } from "../types";

export type TabOneScreenNavigationProp = StackNavigationProp<
  TabOneParamList,
  "TabOneScreen"
>;

export type TabOneScreenRouteProp = RouteProp<TabOneParamList, "TabOneScreen">