import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './Calendar.css'

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [displayedDate, setDisplayedDate] = useState(new Date())

    const daysInMonth = (year: number, month: number) =>
        new Date(year, month + 1, 0).getDate()

    const generateCalendar = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1)
        const startingDay = firstDay.getDay()
        const daysInMonthCount = daysInMonth(year, month)

        const calendar = []
        let day = 1

        for (let row = 0; row < 6; row++) {
            const week = []
            for (let col = 0; col < 7; col++) {
                if (
                    (row === 0 && col < startingDay) ||
                    day > daysInMonthCount
                ) {
                    week.push(null)
                } else {
                    const date = new Date(year, month, day)
                    week.push(date)
                    day++
                }
            }
            calendar.push(week)
        }

        return calendar
    }

    const calendarData = generateCalendar(
        displayedDate.getFullYear(),
        displayedDate.getMonth(),
    )

    const currentMonth = displayedDate.toLocaleString('default', {
        month: 'long',
    })
    const currentYear = displayedDate.getFullYear()

    const handleMonthChange = (monthOffset: number) => {
        const newDisplayedDate = new Date(displayedDate)
        newDisplayedDate.setMonth(newDisplayedDate.getMonth() + monthOffset)
        setDisplayedDate(newDisplayedDate)
    }

    const handleTodayClick = () => {
        setDisplayedDate(new Date())
    }

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <Button
                    className="today-button"
                    onClick={handleTodayClick}
                    variant="outlined"
                    color="primary"
                >
                    Today
                </Button>
                <div className="month-change-buttons">
                    <Button
                        onClick={() => handleMonthChange(-1)}
                        variant="outlined"
                        color="primary"
                    >
                        前月
                    </Button>
                    <h2 className="current-year-month">{`${currentYear}年 ${currentMonth}`}</h2>
                    <Button
                        onClick={() => handleMonthChange(1)}
                        variant="outlined"
                        color="primary"
                    >
                        次月
                    </Button>
                </div>
            </div>
            <table className="calendar">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {calendarData.map((week, rowIndex) => (
                        <tr key={rowIndex}>
                            {week.map((date, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`calendar-cell ${
                                        date ? 'active' : ''
                                    } ${
                                        date &&
                                        selectedDate?.toDateString() ===
                                            date.toDateString()
                                            ? 'selected'
                                            : ''
                                    } ${
                                        date &&
                                        date.toDateString() ===
                                            new Date().toDateString()
                                            ? 'today'
                                            : ''
                                    }`}
                                    onClick={() => setSelectedDate(date)}
                                >
                                    {date ? (
                                        <div className="cell-content">
                                            <span className="day-number">
                                                {date.getDate()}
                                            </span>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar
