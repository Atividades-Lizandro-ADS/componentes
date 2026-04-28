import { View, Text, StyleSheet } from 'react-native';

type CardConquistaProps = {
  emoji: string;
  titulo: string;
  descricao: string;
  corIcone: string;
};

export function CardConquista({ emoji, titulo, descricao, corIcone }: CardConquistaProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconeContainer, { backgroundColor: corIcone }]}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  iconeContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  emoji: {
    fontSize: 22,
  },
  conteudo: {
    flex: 1,
  },
  titulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  descricao: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
});
