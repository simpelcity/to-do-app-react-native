import React from "react"
import { Text, StyleSheet, TextInput, View, TouchableOpacity, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
  const data = [
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
  ]

  type ItemProps = { title: string }
  const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput style={styles.TextInput} />
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#cfeef4",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    marginHorizontal: 6,
  },
  input: {
    flex: 1,
    backgroundColor: "#eaeaeaff",
    borderRadius: 16,
    height: 58,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginRight: 8,
  },
  TextInput: {
    fontSize: 16,
    padding: 0,
    color: "#111",
  },
  Button: {
    backgroundColor: "#9ef291ff",
    borderRadius: 6,
    paddingHorizontal: 16,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 78,
  },
  ButtonText: {
    fontWeight: 700,
    color: "black",
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  list: {
    borderRadius: 12,
    marginHorizontal: 6,
    marginTop: 16,
  },
  item: {
    backgroundColor: "white",
  },
})

