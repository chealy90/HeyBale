import { View, Text,
        Image, Pressable, TouchableOpacity,
         StyleSheet, Modal, TouchableWithoutFeedback } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react"


export default function EditableImageContainer(props){
    const [containsImage, setContainsImage] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(null)

    const launchModal = () => {
        setShowModal(true)
    }


    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
          base64: true
        })


        if (!result.canceled) {
            let newPhotoPaths = [...props.formData.imagePaths]
            let newPhotoData = [...props.formData.imageData]
            newPhotoPaths[props.index] = result.assets[0].uri
            newPhotoData[props.index] = result.assets[0].base64
            props.setFormData({...props.formData, imagePaths: newPhotoPaths, imageData: newPhotoData})
            setContainsImage(true)
            setShowModal(false)
        }
    }





    return (
        <View>
            <TouchableOpacity
                style={styles.addIcon}
                onPress={()=>{
                    if (containsImage){launchModal()}
                    else (pickImage())
                }}
            >
                {
                containsImage ?
                <Image source={{uri: props.formData.imagePaths[props.index]}}
                     style={styles.imageStyle}
                     onClick={()=>{setShowModal(true)}}
                /> :
                <Text style={styles.addIconText}>+</Text>
                }
            </TouchableOpacity>




            <Modal
                visible={showModal}
                transparent={true}
                onRequestClose={()=>{
                        setShowModal(false)
                    }
                }
            >
                <TouchableWithoutFeedback
                    onPress={()=>{setShowModal(false)}}
                >
                    <View
                        style={styles.modalContainer}
                        onPress={()=>{setShowModal(false)}}
                    >
                        <View style={styles.modalStyle}>
                            <Pressable
                                style={{...styles.modalButtonStyle,
                                            backgroundColor: '#FFF176'}}
                                onPress={()=>pickImage()}
                            >
                                <Text style={styles.modalText}>Replace</Text>
                            </Pressable>



                            <Pressable
                                style={{...styles.modalButtonStyle,
                                            backgroundColor: '#d92d20',
                                      }}
                                onPress={()=>{
                                    let newPhotoPaths = [...props.formData.imagePaths]
                                    let newPhotoData = [...props.formData.imageData]
                                    newPhotoPaths[props.index] = ""
                                    newPhotoData[props.index] = ""

                                    props.setFormData({...props.formData, imagePaths: newPhotoPaths, imageData: newPhotoData})
                                    setContainsImage(false)
                                    setShowModal(false)
                                }}
                            >
                                <Text style={{...styles.modalText, color: '#eee'}}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    addIcon: {
        width: 75,
        height: 100,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    addIconText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#bbb'
    },

    imageStyle: {
        width: 75,
        height: 100,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    modalStyle: {
        width: '50%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'


    },

    modalButtonStyle: {
        width: 100,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },

    modalText: {
        fontSize: 15,
        fontWeight: 'bold'
    }

})