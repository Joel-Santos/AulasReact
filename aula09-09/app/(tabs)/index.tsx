import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 50px;
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Item = styled.Text`
  padding: 15px;
  background-color: #f9c2ff;
  margin-vertical: 8px;
  font-size: 18px;
`;

const Input = styled.TextInput`
  border-color: #ccc;
  border-width: 1px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled(TouchableOpacity)`
  background-color: #007bff;
  padding: 10px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const addItem = () => {
    console.log("Novo item:", newItem);  // Verificando o valor do item
    if (newItem.trim()) {
      setItems((prevItems) => {
        console.log("Itens anteriores:", prevItems);  // Verificando o estado atual dos itens
        const updatedItems = [...prevItems, { key: Math.random().toString(), name: newItem }];
        console.log("Itens atualizados:", updatedItems);  // Verificando o novo estado
        return updatedItems;
      });
      setNewItem('');
    } else {
      console.log("Item inválido: string vazia ou apenas espaços.");
    }
  };

  return (
    <Container>
      <Title>Lista de Itens</Title>

      <FlatList
        data={items}
        renderItem={({ item }) => <Item>{item.name}</Item>}
        keyExtractor={(item) => item.key}  {/* keyExtractor para evitar erro */}
      />

      <Input
        placeholder="Adicionar novo item"
        value={newItem}
        onChangeText={setNewItem}
      />

      <Button onPress={addItem}>
        <ButtonText>Adicionar Item</ButtonText>
      </Button>
    </Container>
  );
}
