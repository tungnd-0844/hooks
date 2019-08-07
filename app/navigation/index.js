import React from "react";
import NavigationService from "./NavigationService";
import NavigationStack from "./NavigationStack";

function AppNavigator() {
  return (
    <NavigationStack
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
}

export default AppNavigator;
