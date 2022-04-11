import { Table } from "antd";
import TextContent from "../components/TextContent";

import NewTag from "../assets/new-tag.svg";
import MessageIcn from "../assets/message-icon.svg";
import "../styles/viewReport.scss";

const ViewReport = () => {
	const columns = [
		{
			title: "Name",
			dataIndex: "monthReport",
			width: 200,
			render: (text, record) => (
				<div className={`${record.isNew ? "text-audeo-blue" : "text-write-text5"}`}>
					{/* {text} */}
					<TextContent title={text} fontFamily="Inter" fontWeight="500" />
					{record.isNew && <img src={NewTag} alt="newtag" className="inline w-10 h-9 ml-2" />}
				</div>
			),
		},
		{
			title: "Age",
			dataIndex: "date",
			render: (text) => (
				<div className="text-write-text4">
					<TextContent title={text} fontFamily="Inter" />
				</div>
			),
		},
		{
			title: "",
			render: (text) => (
				<div className="flex items-center justify-between w-2/4 mx-auto">
					<button className="bg-light-blue px-8 py-2 rounded-md text-white">View</button>
					<img src={MessageIcn} alt="newtag" className="inline w-4 h-4 ml-4" />
				</div>
			),
		},
	];
	const data = [
		{
			key: "1",
			isNew: true,
			monthReport: "Feburary Report",
			date: "4th, October 2021 11:20am",
		},
		{
			key: "2",
			isNew: false,
			monthReport: "March Report",
			date: "4th, October 2021 11:20am",
		},
		{
			key: "3",
			isNew: false,
			monthReport: "March Report",
			date: "4th, October 2021 11:20am",
		},
		{
			key: "4",
			isNew: false,
			monthReport: "March Report",
			date: "4th, October 2021 11:20am",
		},
		{
			key: "5",
			isNew: false,
			monthReport: "March Report",
			date: "4th, October 2021 11:20am",
		},
		{
			key: "6",
			isNew: false,
			monthReport: "March Report",
			date: "4th, October 2021 11:20am",
		},
		{
			key: "7",
			isNew: false,
			monthReport: "March Report",
			date: "4th, October 2021 11:20am",
		},
		{
			key: "8",
			isNew: false,
			monthReport: "Feburary Report",
			date: "4th, October 2021 11:20am",
		},
	]; // rowSelection object indicates the need for row selection

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
		},
		getCheckboxProps: (record) => ({
			disabled: record.name === "Disabled User",
			// Column configuration not to be checked
			name: record.name,
		}),
	};

	return (
		<div>
			<div>
				<TextContent title="View reports" fontSize="26px" fontWeight="700" fontFamily="Inter" block />
				<div>
					<Table
						rowSelection={{
							type: "checkbox",
							...rowSelection,
						}}
						columns={columns}
						dataSource={data}
						pagination={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default ViewReport;
