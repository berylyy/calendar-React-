import React from "react";
export default class Decade extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var startYear = this.props.startYearView - 1;
        var changeView = this.props.changeView;
        var changeYear = this.props.changeYear;
        function showYear() {
            var domarr = [];
            for (var i = 0; i < 3; i++) {
                var temp = [];
                for (var j = 0; j < 4; j++) {
                    temp.push(<td key={j} data={++startYear} onClick={(e)=>{changeView("month"),changeYear(e.target.getAttribute("data"))}}>{startYear++}</td>)
                }
                domarr.push(<tr key={i}>{temp}</tr>)
            }
            return domarr;
        }
        return <div className="box">
            <table>
                <tbody>
                    {showYear()}
                </tbody>
            </table>
        </div>
    }
}
