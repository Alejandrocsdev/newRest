module.exports = {
  read: (req, res) => {
    const id = req.params.id
    res.send(`Read Restaurant: ${id}`)
  }
}
