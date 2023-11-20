import { Table, Dropdown, MenuProps, message } from "antd";

//styles
import './index.scss';

//icons
import more from "../../assets/icons/more.svg";
import eye from "../../assets/icons/eye.svg";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/delete.svg";

//libraries
import moment from 'moment';

//components
interface TableProps {
  total: number;
  data: any;
}

const ElementsTable = ({ total, data }: TableProps) => {

  const items = [
    { 
      key: "1", 
      label: 
        <div className={`flex items-center element-link element-link-op`}>
          <img src={eye} alt="" />
          <p className="black-text-4 font-light">View Element Links</p>
        </div>
    },
    { 
      key: "2",
      label: 
        <div className="flex items-center element-link element-link-op">
          <img src={edit} alt="" />
          <p className="black-text-4 font-light">Edit Element</p>
        </div> 
    },
    { 
      key: "3",
      label: 
        <div className="flex items-center element-link element-link-delete">
          <img src={trash} alt="" />
          <p className="black-text-4 font-light">Delete Element</p>
        </div> 
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    // console.log("key>>>", key)
    if (key === "1") {
      // setShowResolveModal(true);
    } else if (key === "2") {
      // navigate(`/escalations/${escalationInfo?.[0]._id}`)
    }
  };

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
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: (_, row, { status }) => {
        return (
        <>
            <div
              className="flex justify-center cursor-pointer"
              // onClick={() =>
              //   // setEscalationInfo(my_escalations.filter((item) => item._id === row._id))
              // }
            >
                <Dropdown menu={{ items: items, onClick}} trigger={["click"]}>
                  <img src={more} alt="" />
                </Dropdown> 
            </div>
        </>
        )
      }
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
