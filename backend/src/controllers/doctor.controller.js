import Appointment from "../models/appointment.js"

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find({
    doctorId: req.user.id,
  });

  res.json(appointments)
}
