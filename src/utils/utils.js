const tw = (...args) => {
    return args.reduce((a,b) => a + ' ' + b)
}

export default tw