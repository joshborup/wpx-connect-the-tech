module.exports = {
  readCampusData: (req, res, next) => {
    const db = req.app.get("db");
    db.get_campus_info().then(campusInfo => {
      res.status(200).json(campusInfo);
    });
  }
};
