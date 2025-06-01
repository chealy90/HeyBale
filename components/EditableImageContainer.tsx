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
        })


        if (!result.canceled) {
            let newPhotos = [...props.formData.images]
            newPhotos[props.index] = result.assets[0].uri
            props.setFormData({...props.formData, images: newPhotos})
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
                <Image source={{uri: props.formData.images[props.index]}}
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
                                onPress={()=>pickImage()}
                            >
                                <Text>Replace</Text>
                            </Pressable>
                            <Pressable
                                onPress={()=>{
                                    let newPhotos = [...props.formData.images]
                                    newPhotos[props.index] = ""
                                    props.setFormData({...props.formData, images: newPhotos})
                                    setContainsImage(false)
                                    setShowModal(false)
                                }}
                            >
                                <Text>Delete</Text>
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
        height: 100,
        backgroundColor: '#fff',

    }
})