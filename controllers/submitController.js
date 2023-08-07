export const submitController = async (req, res) => {
    try {
        res.send('Submission successful')
    } catch (error) {
        res.send(error)
    }
}