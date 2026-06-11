import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171A21',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 30,
    tintColor: '#FFFFFF',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  label: {
    color: '#66C0F4',
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginTop: 10,
    fontWeight: '600',
  },

  input: {
    width: '100%',
    backgroundColor: '#32353C',
    color: '#FFFFFF',
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },

  button: {
    width: '100%',
    backgroundColor: '#1A9FFF',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  link: {
    color: '#66C0F4',
    marginTop: 20,
  },

  footer: {
    color: '#C7D5E0',
    marginTop: 15,
    textAlign: 'center',
  },
});