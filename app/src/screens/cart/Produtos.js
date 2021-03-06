import React, {useContext} from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import {
  Image,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import NumericInput from 'react-native-numeric-input';

const image1 = require('../../assets/images/orange.jpg');
const image2 = require('../../assets/images/lemon.jpg');
const image3 = require('../../assets/images/abacaxi.png');
const image4 = require('../../assets/images/acerola.jpg');
const image5 = require('../../assets/images/mexerica.jpg');
const image6 = require('../../assets/images/lima.png');
const image7 = require('../../assets/images/kiwi.jpg');
const image8 = require('../../assets/images/morango.jpg');
const image9 = require('../../assets/images/roma.jpeg');

import {theme} from '../../constants';
import {useCart} from '../../contexts/cart';
import AuthContext from '../../contexts/auth';

export default function ProductList() {
  const {add, quantidade, addQuantidade} = useCart();
  const {nome} = useContext(AuthContext);

  const data = [
    {
      id: 1,
      image: image1,
      nome: 'Laranja',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 2,
      image: image2,
      nome: 'Limão',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 3,
      image: image3,
      nome: 'Abacaxi',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 4,
      image: image4,
      nome: 'Acerola',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 5,
      image: image5,
      nome: 'Caju',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 6,
      image: image6,
      nome: 'Lima',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 7,
      image: image7,
      nome: 'Kiwi',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 8,
      image: image8,
      nome: 'Morango',
      preco: 3,
      quantidade: quantidade,
    },
    {
      id: 9,
      image: image9,
      nome: 'Romã',
      preco: 3,
      quantidade: quantidade,
    },
  ];

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 20}}>O que vai ser hoje, {nome}?</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.incident}>
              <Image source={item.image} style={{width: 64, height: 64}} />
              <Text style={styles.incidentProperty}>NOME:</Text>
              <Text style={styles.incidentValue}>{item.nome}</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.preco)}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <NumericInput
                    value={quantidade}
                    onChange={(quantidade) => addQuantidade(quantidade)}
                  />
                </View>
                <View style={{flex: 1, marginRight: 20}}>
                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => add(item)}>
                    <Text>Colocar no carrinho</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    margin: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 20,
    color: '#737380',
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: 150,
    height: 45,
    borderRadius: 8,
    padding: 10,
    backgroundColor: theme.colors.secondary,
  },

  detailsButtonText: {
    color: theme.colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
