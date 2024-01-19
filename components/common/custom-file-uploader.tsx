import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
//@ts-ignore
import Icon1 from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";
import CameraModal from "./camera-modal";

const ImageUploader = ({ label, id, setValue, watch }: any) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setValue(id, result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  const handleUpload = () => {
    // Implement the logic to upload the image to your backend server.
    // You'll typically use a library like axios to send the image to your API endpoint.
    // Example: axios.post('your-api-endpoint', { image: image.uri });
  };

  return (
    <View className="flex flex-col space-y-2">
      <Text>{label}</Text>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        className="w-full h-12 flex flex-row items-center justify-center border space-x-2.5   border-dashed border-primary"
      >
        <Icon1 name="plus-circle" size={20} color="#555555" />
        <Text className="text-[#555]">Upload Image</Text>
      </TouchableOpacity>
      {watch(id) && (
        <Image
          source={{ uri: watch(id) }}
          style={{
            width: 200,
            height: 200,
            marginTop: 8,
            objectFit: "contain",
          }}
        />
      )}
      <CameraModal open={open} setOpen={setOpen} id={id} setValue={setValue} />
    </View>
  );
};

export default ImageUploader;
