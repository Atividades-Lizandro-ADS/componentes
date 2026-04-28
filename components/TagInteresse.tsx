import { View, Text, StyleSheet } from 'react-native';

type TagInteresseProps = {
  texto: string;
};

export function TagInteresse({ texto }: TagInteresseProps) {
  return (
    <View style={styles.tag}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    marginRight: 8,
    marginBottom: 8,
  },
  texto: {
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },
});
