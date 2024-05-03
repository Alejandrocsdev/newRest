module.exports = {
  read: (req, res) => {
    const id = req.params.id
    res.send(`Read restaurant: ${id}`)
  }
}
