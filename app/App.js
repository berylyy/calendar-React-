import React from "react";
import Decade from "./Decade.js";
import Day from "./Day.js";
import Month from "./Month.js";

export default class App extends React.Component {
    constructor(props) {
        var date = new Date();
        super(props);
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            view: "day"
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        if (this.state.month == 12) {
            this.setState({
                year: this.state.year + 1,
                month: 1
            })
        } else {
            this.setState({
                month: this.state.month + 1
            });
        }
    }
    goToPrevMonth(e) {
        e.stopPropagation();
        if (this.state.month == 1) {
            this.setState({
                year: this.state.year - 1,
                month: 12
            })
        } else {
            this.setState({
                month: this.state.month - 1
            })
        }
    }
    goToNextYear(e) {
        e.stopPropagation();
        this.setState({
            "year": this.state.year + 1
        })
    }
    goToPrevYear(e) {
        e.stopPropagation();
        this.setState({
            "year": this.state.year - 1
        })
    }
    goToDecadeYear(e) {
        e.stopPropagation();
        this.setState({
            "year": this.state.year + 10
        })
    }
    goToDecadeYearPrev(e) {
        e.stopPropagation();
        this.setState({
            "year": this.state.year - 10
        })
    }
    changeView(item) {
        this.setState({
            "view": item
        })
    }
    changeMonth(month) {
        month = Number(month);
        this.setState({
            month
        })
    }
    changeYear(year){
        year = Number(year);
        this.setState({
            year
        })
    }
    render() {
        if (this.state.view == 'day') {
            return <div>
                <p className="tip" onClick={() => { this.changeView("month") }}>
                    <button className="changeBtnPrev" onClick={(e) => { this.goToPrevMonth(e) }}>-</button>
                    {this.state.year}年{this.state.month}月
                    <button className="changeBtnNext" onClick={(e) => { this.goToNextMonth(e) }}>+</button>
                </p>
                <Day
                    year={this.state.year}
                    month={this.state.month}
                    day={this.state.day}
                    goToNextMonth={this.goToNextMonth.bind(this)}
                    goToPrevMonth={this.goToPrevMonth.bind(this)}
                ></Day>
            </div>
        } else if (this.state.view == 'month') {
            return <div>
                <p className="tip" onClick={() => { this.changeView("year") }}>
                    <button className="changeBtnPrev" onClick={(e) => { this.goToPrevYear(e) }}>-</button>
                    {this.state.year}年
                    <button className="changeBtnNext" onClick={(e) => { this.goToNextYear(e) }}>+</button>
                </p>
                <Month
                    changeView={this.changeView.bind(this)}
                    changeMonth={this.changeMonth.bind(this)}
                ></Month>
            </div>
        } else if (this.state.view == "year") {
            var startYearView = this.state.year - this.state.year % 10;
            return <div>
                <p className="tip">
                    <button className="changeBtnPrev" onClick={(e) => { this.goToDecadeYearPrev(e) }}>-</button>
                    {startYearView}-{startYearView + 9}
                    <button className="changeBtnNext" onClick={(e) => { this.goToDecadeYear(e) }}>+</button>
                </p>
                <Decade
                    startYearView={startYearView}
                    changeView={this.changeView.bind(this)}
                    changeYear={this.changeYear.bind(this)}
                ></Decade>
            </div>
        }

    }
}