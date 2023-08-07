export const problemListController = async (req, res) => {
    try {
        res.status(200).send("Here is the list of problems")
    } catch (error) {
        res.status(500).send("error")
    }
}
export const problemController = async (req, res) => {
    try {
        res.status(200).send("Here is the problem")
    } catch (error) {
        res.status(500).send("error")
    }
}