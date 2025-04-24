import { StyleSheet, Image, Platform, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8A04BD', dark: '#8A04BD' }}
      headerImage={
        <IconSymbol
          size={0}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">O que você deseja fazer?</ThemedText>
      </ThemedView><br></br>

      <ThemedText type="subtitle">saldo disponível:</ThemedText>

      <ThemedText>R$1.000,00</ThemedText> <br></br>
      <Collapsible title="TRANSFERÊNCIAS">
        <ThemedText>

        </ThemedText>
        <ThemedText>{' '}
          10/04 - <ThemedText type="defaultSemiBold">R$ 50,00<br></br></ThemedText>{' '}
          11/04 - <ThemedText type="defaultSemiBold">R$ 40,00<br></br></ThemedText>{' '}
          12/04 - <ThemedText type="defaultSemiBold">R$ 30,00<br></br></ThemedText>{' '}
          13/04 - <ThemedText type="defaultSemiBold">R$ 20,00<br></br></ThemedText>{' '}
        </ThemedText>
      </Collapsible>
      <Collapsible title="CAIXINHA">
        <ThemedText>


          RESERVA - <ThemedText type="defaultSemiBold">R$ 500,00<br></br></ThemedText>
          COMPRAS - <ThemedText type="defaultSemiBold">R$ 500,00<br></br></ThemedText>
          VIAGENS - <ThemedText type="defaultSemiBold">R$ 500,00<br></br></ThemedText>
          
        <Button color={'#8A04BD'}
         onPress={() => {
         console.log('You tapped the button!'); }}
         title="RESGATAR"
/>
         <Button color={'#8A04BD'}
         onPress={() => {
         console.log('You tapped the button!'); }}
         title="ADICIONAR"
/>

        </ThemedText>
      </Collapsible>
      <Collapsible title="AGÊNCIA DA CONTA">
        <ThemedText>
          AGÊNCIA:1234<br></br>
          NÚMERO DA CONTA: 12345678-9<br></br>
          TIPO DE CONTA: 013
        </ThemedText>

      </Collapsible>



    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
