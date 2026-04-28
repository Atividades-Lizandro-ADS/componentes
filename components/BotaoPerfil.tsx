import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type BotaoPerfilProps = {
  texto: string;
  variante: 'primario' | 'secundario';
  onPressar: () => void;
};

export function BotaoPerfil({ texto, variante, onPressar }: BotaoPerfilProps) {
  return (
    <TouchableOpacity
      style={[styles.botao, variante === 'primario' ? styles.primario : styles.secundario]}
      onPress={onPressar}
      activeOpacity={0.8}
    >
      <Text style={[styles.texto, variante === 'primario' ? styles.textoPrimario : styles.textoSecundario]}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primario: {
    backgroundColor: '#1B4332',
  },
  secundario: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
  },
  texto: {
    fontSize: 15,
    fontWeight: '600',
  },
  textoPrimario: {
    color: '#fff',
  },
  textoSecundario: {
    color: '#1B4332',
  },
});
