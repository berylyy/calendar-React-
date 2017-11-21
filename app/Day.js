import React from "react";
import solarLunar from "solarLunar";
export default class Month extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //本月1号是星期几
        var firstDay = new Date(this.props.year, this.props.month - 1, 1).getDay();
        //当前月的总天数
        var dayAmount = new Date(new Date(this.props.year, this.props.month) - 1).getDate();
        //上个月一共有多少天
        var lastMonthDayAount = new Date(new Date(this.props.year, this.props.month - 1) - 1).getDate();
        //存放当前月
        var arr = [];
        var unshiftAmount = firstDay;
        while (unshiftAmount--) {
            arr.unshift(lastMonthDayAount--)
        }

        var count = 1;
        var dayAmountcopy = dayAmount;
        while (dayAmountcopy--) {
            arr.push(count++);
        }

        var itemAmount;
        arr.length > 35 ? itemAmount = 42 : itemAmount = 35;
        var restDay = itemAmount - (arr.length);
        count = 1;
        while (restDay--) {
            arr.push(count++);
        }
        var year = this.props.year;
        var month = this.props.month;
        var day = this.props.day;
        //变成二维数组，每隔7天
        function showMonth() {
            var domarr = [];
            for (var i = 0; i < arr.length / 7; i++) {
                var trArr = [];
                for (var j = 0; j < 7; j++) {
                    if (firstDay > (j + i * 7)) {
                        trArr.push(<td
                            key={j}>
                            {(arr[j + i * 7] == day) ? <p className='tipDay'>{arr[j + i * 7]}</p> : <p>{arr[j + i * 7]}</p>}
                            {(solarLunar.solar2lunar(year, month - 1, arr[j + i * 7]).term) == "" ? (<p>{(solarLunar.solar2lunar(year, month - 1, arr[j + i * 7]).dayCn)}</p>) : (<p className="termTip">{(solarLunar.solar2lunar(year, month - 1, arr[j + i * 7]).term)}</p>)}

                        </td>)
                    } else if ((firstDay + dayAmount) > (j + i * 7)) {
                        trArr.push(<td
                            key={j}>
                            {/* 判断是否是当前日期 */}
                            {(arr[j + i * 7] == day) ? <p className='tipDay'>{arr[j + i * 7]}</p> : <p>{arr[j + i * 7]}</p>}
                            {/* 判断是否有节气 */}
                            {(solarLunar.solar2lunar(year, month, arr[j + i * 7]).term) == "" ? (<p>{(solarLunar.solar2lunar(year, month, arr[j + i * 7]).dayCn)}</p>) : (<p className="termTip">{(solarLunar.solar2lunar(year, month, arr[j + i * 7]).term)}</p>)}
                        </td>)
                    } else {
                        trArr.push(<td
                            key={j}>
                            {(arr[j + i * 7] == day) ? <p className='tipDay'>{arr[j + i * 7]}</p> : <p>{arr[j + i * 7]}</p>}
                            {(solarLunar.solar2lunar(year, month, arr[j + i * 7]).term) == "" ? (<p>{(solarLunar.solar2lunar(year, month + 1, arr[j + i * 7]).dayCn)}</p>) : (<p className="termTip">{(solarLunar.solar2lunar(year, month + 1, arr[j + i * 7]).term)}</p>)}
                        </td>)
                    }
                }
                domarr.push(<tr key={i}>{trArr}</tr>);
            }
            return domarr;
        }
        return <div className="box">
            <table>
                <tbody>
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                    {showMonth()}
                </tbody>
            </table>
        </div>
    }
}