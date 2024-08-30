export const filterAppointments = (appointments, startDate, endDate) => {
  return appointments.filter((item) => {
    const itemDate = new Date(item.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    const isAfterStart = !start || itemDate >= start;
    const isBeforeEnd = !end || itemDate <= end;

    return isAfterStart && isBeforeEnd;
  });
};