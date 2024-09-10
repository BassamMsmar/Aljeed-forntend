import React from 'react';
import './TableStyles.css'; // Import your custom styles

const TableComponent = () => {
    const tableData = [
        { id: 1, driver: 'John Doe', client: 'ABC Corp', shipmentNumber: '12345', waybillNumber: '67890', status: 'In Transit', deliveryDate: '2024-09-12' },
        { id: 2, driver: 'Jane Smith', client: 'XYZ Inc', shipmentNumber: '54321', waybillNumber: '09876', status: 'Completed', deliveryDate: '2024-09-10' },
        { id: 3, driver: 'Alice Johnson', client: 'DEF Ltd', shipmentNumber: '67890', waybillNumber: '12345', status: 'Delayed', deliveryDate: '2024-09-14' },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'In Transit': return 'status-in-transit';
            case 'Completed': return 'status-completed';
            case 'Delayed': return 'status-delayed';
            default: return '';
        }
    };

    return (
        <div className="container mt-5">
            <table className="table table-responsive-md table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Driver Name</th>
                        <th>Client Name</th>
                        <th>Shipment Number</th>
                        <th>Waybill Number</th>
                        <th>Shipment Status</th>
                        <th>Delivery Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.driver}</td>
                            <td>{row.client}</td>
                            <td>{row.shipmentNumber}</td>
                            <td>{row.waybillNumber}</td>
                            <td className={getStatusClass(row.status)}>{row.status}</td>
                            <td>{row.deliveryDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
