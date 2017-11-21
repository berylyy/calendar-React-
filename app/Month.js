import React from "react";
export default class Month extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var arr = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
        var changeView = this.props.changeView;
        var changeMonth = this.props.changeMonth;
        function showAllMonth(){
            var domarr=[];
            for(var i=0;i<arr.length/4;i++){
                var temp = [];
                for(var j=0;j<4;j++){
                    temp.push(<td key={j+4*i} data={j+4*i+1}
                    onClick={(e)=>{changeView("day"),changeMonth(e.target.getAttribute("data"))}}>{arr[j+4*i]}
                </td>);
                }
                domarr.push(<tr key={i}>{temp}</tr>)
            }
            return domarr;
        }
        return <div className="box">
            <table>
                <tbody>
                    {showAllMonth()}
                </tbody>
            </table>
        </div>
    }
}