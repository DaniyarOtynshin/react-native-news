import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {Provider} from "react-redux";
import store from "./infrastructure/store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
