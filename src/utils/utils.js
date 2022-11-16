const tw = (...args) => {
    console.log(args);
    return args.reduce((a,b) => a + ' ' + b)
}

export default tw