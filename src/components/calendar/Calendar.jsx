import React from "react";
import "./Calendar.css";
const Calendar = () => {
  const dateActive = new Date().getDate().toString().padStart(2, "0");
  const dayOfWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function getLastSunday() {
    var t = new Date();
    t.setDate(t.getDate() - t.getDay());
    return t.getDate();
  }
  function getDaysObject() {
    var daysObject = [];
    var indexDate = 0;
    var lastSunday = getLastSunday();
    for (var i = lastSunday; i < lastSunday + 7; i++) {
      daysObject.push({
        dayInWeek: i.toString().padStart(2, "0"),
        dayOfWeek: dayOfWeeks[indexDate],
      });
      indexDate++;
    }
    return daysObject;
  }

  return (
    <div>
      <div className="card">
        <div className="days_of_week">
          {getDaysObject().map((day) => (
            <div className="day_object">
              <div
                className={
                  dateActive === day.dayInWeek
                    ? `day_object_item active`
                    : `day_object_item`
                }
              >
                {day.dayOfWeek}
              </div>
              <div
                className={
                  dateActive == day.dayInWeek
                    ? `day_object_item calendar_circle`
                    : `day_object_item`
                }
              >
                {day.dayInWeek}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
