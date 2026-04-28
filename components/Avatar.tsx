import { View, Text, StyleSheet } from 'react-native';

type AvatarProps = {
  iniciais: string;
  tamanho: number;
  corFundo: string;
  verificado: boolean;
};

export function Avatar({ iniciais, tamanho, corFundo, verificado }: AvatarProps) {
  return (
    <View style={{ width: tamanho, height: tamanho }}>
      <View
        style={[
          styles.circulo,
          { width: tamanho, height: tamanho, borderRadius: tamanho / 2, backgroundColor: corFundo },
        ]}
      >
        <Text style={[styles.iniciais, { fontSize: tamanho * 0.33 }]}>{iniciais}</Text>
      </View>
      {verificado && (
        <View style={styles.selo}>
          <Text style={styles.seloTexto}>✓</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circulo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iniciais: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selo: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  seloTexto: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
