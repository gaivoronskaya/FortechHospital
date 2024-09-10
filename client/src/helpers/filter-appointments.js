export const filterAppointments = (appointments, range) => {
  return appointments.filter((item) => {
    const itemDate = new Date(item.date);
    const start = range.start ? new Date(range.start) : null;
    const end = range.end ? new Date(range.end) : null;

    const isAfterStart = !start || itemDate >= start;
    const isBeforeEnd = !end || itemDate <= end;

    return isAfterStart && isBeforeEnd;
  });
};
