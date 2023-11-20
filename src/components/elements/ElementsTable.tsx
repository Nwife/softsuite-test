//styles
import './index.scss';

//icons

//libraries
import { Table } from "antd";
import moment from 'moment';

//components
interface TableProps {
  total: number;
  data: any;
}

const ElementsTable = ({ total, data }: TableProps) => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (row, { name }:{ name: string }) => <span className="capitalize">{name ? name : "N/A"}</span>,
    },
    {
      title: "Element Cateory",
      dataIndex: "element_category",
      key: "element_category",
      render: (row, { category }:{ category: string }) => <>{category ? category : "N/A"}</>,
    },
    {
      title: "Element Classification",
      dataIndex: "element_classification",
      key: "element_classification",
      render: (row, { classification }:{ classification: string }) => <>{classification ? classification : "N/A"}</>,
    },
    {
      title: "Status",
      dataIndex: "shipment_status",
      key: "shipment_status",
      render: (row, { status }: { status: string}) => (
        <>
          <p className={`status ${status?.toString()?.toLowerCase() === "active" ? "active-status" : status?.toString()?.toLowerCase() === "inactive" ? "inactive-status" : ""}`}>
            {status ? status : "N/A"}
          </p>
        </>
      ),
    },
    {
      title: "Date & Time Modified",
      dataIndex: "date_time",
      key: "date_time",
      render: (row, { createdAt } : { createdAt:string }) => (
        <span className="capitalize">
          {moment.utc(createdAt).format("DD/MM/YYYY HH:mm A")}
        </span>
      ),
    },
    {
      title: "Modified By",
      dataIndex: "modified_by",
      key: "modified_by",
      render: (row, { modifiedBy } : { modifiedBy: string}) => (
        <span className="capitalize">
          {modifiedBy ? modifiedBy : "N/A"}
        </span>
      ),
    },
  ];

  return (
    <div>
        <Table
          columns={columns}
          dataSource={data}
          // pagination={{
          //   defaultPageSize: 10,
          //   total: total,
          //   showTotal: (total, range) =>
          //     `${range[0]}-${range[1]} of ${total} items`,
          //   // current: page + 1,
          //   showSizeChanger: true,
          //   pageSizeOptions: ["10", "15", "20", "30"],
          //   // onChange: (page, pageSize) => {
          //   //   handlePageChange(page - 1);
          //   //   handlePerRowsChange(pageSize, page - 1);
          //   //   // console.log("page", page - 1);
          //   //   // console.log("pageSize", pageSize);
          //   // },
          // }}
          scroll={{ x: 1000 }}
        />
    </div>
  );
};

export default ElementsTable;
