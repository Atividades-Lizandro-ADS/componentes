import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { StatItem } from '@/components/StatItem';
import { BotaoPerfil } from '@/components/BotaoPerfil';
import { TagInteresse } from '@/components/TagInteresse';
import { CardConquista } from '@/components/CardConquista';

const interesses = ['React Native', 'UI/UX', 'TypeScript', 'Mobile', 'Node.js'];

const conquistas = [
  {
    emoji: '🏆',
    titulo: 'Top Contribuinte',
    descricao: 'Você postou 50 vezes este mês',
    corIcone: '#FEF3C7',
  },
  {
    emoji: '⭐',
    titulo: 'Estrela em Ascensão',
    descricao: '+500 seguidores em 30 dias',
    corIcone: '#DBEAFE',
  },
];

export default function PerfilScreen() {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Text style={styles.cabecalho}>Meu Perfil</Text>

      <View style={styles.secaoAvatar}>
        <Avatar iniciais="MS" tamanho={100} corFundo="#2D6A4F" verificado />
        <Text style={styles.nome}>Maria Silva</Text>
        <Text style={styles.cargo}>Desenvolvedora Mobile • IFRN</Text>
        <Text style={styles.bio}>Apaixonada por React Native 🚀</Text>
      </View>

      <View style={styles.statsRow}>
        <StatItem valor="248" rotulo="Posts" />
        <View style={styles.statSpacer} />
        <StatItem valor="1.2k" rotulo="Seguidores" />
        <View style={styles.statSpacer} />
        <StatItem valor="389" rotulo="Seguindo" />
      </View>

      <View style={styles.botoesRow}>
        <BotaoPerfil
          texto="Seguir"
          variante="primario"
          onPressar={() => Alert.alert('Seguindo Maria Silva!')}
        />
        <View style={styles.botaoSpacer} />
        <BotaoPerfil
          texto="Mensagem"
          variante="secundario"
          onPressar={() => Alert.alert('Abrindo mensagem...')}
        />
      </View>

      <Text style={styles.secaoTitulo}>Interesses</Text>
      <View style={styles.tagsContainer}>
        {interesses.map((interesse) => (
          <TagInteresse key={interesse} texto={interesse} />
        ))}
      </View>

      <Text style={styles.secaoTitulo}>Conquistas recentes</Text>
      {conquistas.map((conquista) => (
        <CardConquista
          key={conquista.titulo}
          emoji={conquista.emoji}
          titulo={conquista.titulo}
          descricao={conquista.descricao}
          corIcone={conquista.corIcone}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  cabecalho: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
  },
  secaoAvatar: {
    alignItems: 'center',
    marginBottom: 24,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 12,
  },
  cargo: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  bio: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statSpacer: {
    width: 10,
  },
  botoesRow: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  botaoSpacer: {
    width: 12,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
});
