import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#e5a0c6', dark: '#e5a0c6' }}
      headerImage={
        <Image
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">GIPIX</ThemedText>
      
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bem vindo de volta!</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">saldo em conta</ThemedText>
        <ThemedText>
          R$ 1.000,00
        </ThemedText><br></br>
        <ThemedText type="subtitle">Pix</ThemedText>
        <ThemedText>
          <center>
        <Button
         onPress={() => {
         console.log('You tapped the button!'); }}
         title="Código / QRcode"
/></center>
        

      </ThemedText><br></br>
        
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
