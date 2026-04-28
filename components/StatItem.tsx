import { View, Text, StyleSheet } from 'react-native';

type StatItemProps = {
  valor: string;
  rotulo: string;
};

export function StatItem({ valor, rotulo }: StatItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.rotulo}>{rotulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    paddingVertical: 12,
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B4332',
  },
  rotulo: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
});
