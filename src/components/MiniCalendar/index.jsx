import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const row1 = ['', '', 1, 2, 3, 4, 5];
const row2 = [6, 7, 8, 9, 10, 11, 12];
const row3 = [13, 14, 15, 16, 17, 18, 19];
const row4 = [20, 21, 22, 23, 24, 25, 26];
const row5 = [27, 28, '', '', '', '', ''];

const weddingDay = 18;
const weddingDate = 'Feb 18, 2023 11:00:00';

const MiniCalendar = () => {
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [finish, setFinish] = useState(false);

  //! State
  useEffect(() => {
    const countDownDate = new Date(weddingDate).getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      setDate({
        days,
        hours,
        minutes,
        seconds,
      });

      // If the count down is over, write some text
      if (distance < 0) {
        setFinish(true);
        clearInterval(x);
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);

  //! Render
  const renderCountDown = () => {
    return (
      <div className={`count-down-boxes ${finish ? 'finish' : ''}`}>
        {finish ? (
          <div style={{ width: '100%', marginTop: 8 }}>
            <span className="over">Đã cứi ^.^ ❤️</span>
          </div>
        ) : (
          <Fragment>
            <div>
              <span className="date">{date.days}</span>
              <span>Ngày</span>
            </div>
            <div>
              <span className="date">{date.hours}</span>
              <span>Giờ</span>
            </div>
            <div>
              <span className="date">{date.minutes}</span>
              <span>Phút</span>
            </div>
            <div>
              <span className="date">{date.seconds}</span>
              <span>Giây</span>
            </div>
          </Fragment>
        )}
      </div>
    );
  };

  const renderEachRow = (row) => {
    return (
      <tr>
        {row.map((el, index) => {
          if (el === '') {
            return <td key={`${el}-${index}`}>&nbsp;</td>;
          }

          return (
            <td key={`${el}-${index}`}>
              {el === weddingDay ? <div className={el === 18 ? 'this-day' : ''}>{el}</div> : el}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <Fragment>
      <div className="mini_calendar">
        <table>
          <caption className="calendar-month"> February 2023 </caption>
          <tr>
            <th abbr="Monday">Mon</th>
            <th abbr="Tuesday">Tue</th>
            <th abbr="Wednesday">Wed</th>
            <th abbr="Thursday">Thu</th>
            <th abbr="Friday">Fri</th>
            <th abbr="Saturday">Sat</th>
            <th abbr="Sunday">Sun</th>
          </tr>
          {renderEachRow(row1)}
          {renderEachRow(row2)}
          {renderEachRow(row3)}
          {renderEachRow(row4)}
          {renderEachRow(row5)}
        </table>
      </div>

      {renderCountDown()}
    </Fragment>
  );
};

export default MiniCalendar;
