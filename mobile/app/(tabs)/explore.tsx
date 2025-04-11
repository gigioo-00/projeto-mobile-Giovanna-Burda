import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ff8da1', dark: '#ff8da1' }}
      headerImage={
        <IconSymbol
          size={0}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">O que você deseja fazer? ₊˚⊹♡</ThemedText>
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
      <Collapsible title="METAS">
        <ThemedText>
          
           
           RESERVA - <ThemedText type="defaultSemiBold">R$ 500,00<br></br></ThemedText>
           COMPRAS - <ThemedText type="defaultSemiBold">R$ 500,00<br></br></ThemedText>
           VIAGENS - <ThemedText type="defaultSemiBold">R$ 500,00<br></br></ThemedText>

        </ThemedText>
      </Collapsible>
      <Collapsible title="AGÊNCIA DA CONTA">
        <ThemedText>
          ENTRE EM CONTATO : (41) 9999-9999<br></br>
          EMAIL : gipix@gmail.com
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
