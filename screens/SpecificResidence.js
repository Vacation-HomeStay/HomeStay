import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SpecificResidence = (vacation_id) => {
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
		<View>
			<Text>SpecificResidence</Text>
		</View>
	);
};

export default SpecificResidence;

const styles = StyleSheet.create({});
