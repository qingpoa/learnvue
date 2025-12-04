import { ref, reactive ,onMounted } from 'vue'
import axios from "axios"
export default function () {
    let doglist = reactive(["https://images.dog.ceo/breeds/pembroke/n02113023_4972.jpg"])
    async function getdog() {
        let dog = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
        doglist.push(dog.data.message)
    }
    onMounted(() => {
        getdog()
    })
    return{doglist,getdog}
}