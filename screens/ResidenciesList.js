import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import { db, auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const residencesRef = db.collection("individual_residence");

const ResidenciesList = ({ city }) => {
  const navigation = useNavigation();
  const [residences, setResidences] = useState([]);

  useEffect(() => {
    const matchingResidences = residencesRef.where("city", "==", city);

    // get the matching documents
    matchingResidences.get().then((querySnapshot) => {
      setResidences(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          host_name: doc.data().host_name,
          cost: doc.data().cost,
          images: doc.data().images,
        }))
      );
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>ResidenciesList</Text>
        {residences.map((residence) => (
          <TouchableOpacity
            key={residence.id}
            onPress={() =>
              navigation.navigate("Details", { id: residence.id })
            }
          >
            <Text style={styles.hostName}>{residence.host_name}</Text>
            <Text style={styles.cost}>{residence.cost}</Text>
            <ScrollView horizontal={true}>
              {residence.images.map((image) => (
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                  key={image}
                />
              ))}
            </ScrollView>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  hostName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cost: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
  },
});

export default ResidenciesList;
