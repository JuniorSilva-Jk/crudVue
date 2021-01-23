import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyD-49vzoq_RoUHU_jZd6ObWAj9YehRzrSk",
  authDomain: "apivue-ea9f7.firebaseapp.com",
  databaseURL: "https://apivue-ea9f7-default-rtdb.firebaseio.com",
  projectId: "apivue-ea9f7",
  storageBucket: "apivue-ea9f7.appspot.com",
  messagingSenderId: "98064096792",
  appId: "1:98064096792:web:9a6c84797256928bafed6d",
  measurementId: "G-L5V5NDDXL2"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const productCollection = db.collection('product')

export const createProduct  = product  => {
  return productCollection.add(product)
}

export const getProduct  = async id => {
  const product = await productCollection.doc(id).get()
  return product.exists ? product.data() : null
}

export const updateProduct = (id, product) => {
  return productCollection.doc(id).update(product)
}

export const deleteProduct = id => {
  return productCollection.doc(id).delete()
}

export const loadProduct = () => {
  const product = ref([])
  const close = productCollection.onSnapshot(snapshot => {
    product.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return product
}
