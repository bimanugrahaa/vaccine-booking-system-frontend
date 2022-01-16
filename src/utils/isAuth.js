const IsAuth = (mySession) => {

    if (mySession.token !== "") {
        return true
    }

    return false
}

export default IsAuth