import React from 'react';
import './widgetLg.css';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Nuel SBN</span>
          </td>
          <td className="widgetlgDate">24 Dec 2021</td>
          <td className="widgetlgAmount">₦29000.00</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Nuel SBN</span>
          </td>
          <td className="widgetlgDate">24 Dec 2021</td>
          <td className="widgetlgAmount">₦29000.00</td>
          <td className="widgetlgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Nuel SBN</span>
          </td>
          <td className="widgetlgDate">24 Dec 2021</td>
          <td className="widgetlgAmount">₦29000.00</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Nuel SBN</span>
          </td>
          <td className="widgetlgDate">24 Dec 2021</td>
          <td className="widgetlgAmount">₦29000.00</td>
          <td className="widgetlgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetName">Nuel SBN</span>
          </td>
          <td className="widgetlgDate">24 Dec 2021</td>
          <td className="widgetlgAmount">₦29000.00</td>
          <td className="widgetlgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
