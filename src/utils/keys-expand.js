const keysExpand = (keys, value) => {
    let expandedObject = {}
    keys.forEach(key => {
        expandedObject[key] = value
    })
    // console.log('expanded', expandedObject);
    return expandedObject
}

export default keysExpand