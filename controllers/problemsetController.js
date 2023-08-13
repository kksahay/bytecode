export const problemsetController = async (req, res) => {
    try {
        res.status(200).send("Success")
    } catch (error) {
        res.status(500).send(error)
    }
}
export const taskController = async (req, res) => {
    try {
        res.status(200).send(req.params)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const submitController = async (req, res) => {
    try {
        res.status(200).send(req.params)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const createProblemController = async (req, res) => {
    try {
        res.status(200).send("Success")
    } catch (error) {
        res.status(500).send(error)
    }
}
