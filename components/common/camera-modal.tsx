import React from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
//@ts-ignore
import Icon1 from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";

const CameraModal = ({ open, setOpen, setValue, id }: any) => {
  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setValue(id, result.assets[0].uri);
      setOpen(false);
    } else {
      alert("You did not select any image.");
      setOpen(false);
    }
  };
  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setValue(id, result.assets[0].uri);
      setOpen(false);
    } else {
      alert("You did not select any image.");
      setOpen(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
      className="relative"
    >
      <Modal animationType="slide" visible={open} transparent={true}>
        <View className="flex absolute bottom-0 right-0 w-full flex-row bg-slate-200 items-center h-[150px] space-x-8 justify-center">
          <Pressable
            onPress={() => pickImageFromCamera()}
            className="h-[120] w-[160] flex flex-col space-y-3 border border-primary items-center justify-center"
          >
            <Icon1 name="camera" size={30} />
            <Text>Choose Camera</Text>
          </Pressable>
          <TouchableOpacity
            onPress={() => pickImageFromGallery()}
            className="h-[120] w-[160] border flex-col space-y-3 border-primary  flex items-center justify-center"
          >
            <Icon1 name="image" size={30} />
            <Text>Choose Gallery</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CameraModal;
