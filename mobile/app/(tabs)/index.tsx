import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ff8da1', dark: '#ff8da1' }}
      headerImage={
        <Image
        source={require('@/assets/images/sim.png')}
        style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">GIPIX (˵ •̀ ᴗ - ˵ ) ✧</ThemedText>
      
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bem vindo de volta!</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">saldo disponível:</ThemedText>
        <ThemedText>
          R$ 1.000,00
        </ThemedText><br></br>


       
        <ThemedText>

          <center>
        <Button color={'#ff8da1'}
         onPress={() => {
         console.log('You tapped the button!'); }}
         title="                                                               PIX                                                                "
/></center>

</ThemedText><br></br>

<ThemedText>

<center>
        <Button color={'#ff8da1'}
         onPress={() => {
         console.log('You tapped the button!'); }}
         title="                                                          EXTRATO                                                           "
/></center>

</ThemedText><br></br>

<ThemedText>

<center>
        <Button color={'#ff8da1'}
         onPress={() => {
         console.log('You tapped the button!'); }}
         title="                                                    TRANSFERIR                                                           "
/></center> 

</ThemedText><br></br>

<ThemedText>

<center>
        <Button color={'#ff8da1'}
         onPress={() => {
         console.log('You tapped the button!'); }}
         title="                                                        CARTÕES                                                              "
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
    height: 350,
    width: 776,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
