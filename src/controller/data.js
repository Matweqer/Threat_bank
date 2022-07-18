function getItemById(list, id) {
    try {
        return list.find(item => item.id == id)
    } catch (e) {
        console.error(e)
    }

}

export  {
    getItemById
}