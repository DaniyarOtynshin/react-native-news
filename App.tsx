import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import {Provider} from "react-redux";
import { Provider as PaperProvider } from 'react-native-paper';
import store from "./infrastructure/store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
