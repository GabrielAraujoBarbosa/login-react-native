import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>

      <Text style={styles.text}>
        Você está logado! 🎉
      </Text>

      <Button
        title="Sair"
        onPress={onLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  text: {
    fontSize: 18,
    marginBottom: 24,
  },
});
