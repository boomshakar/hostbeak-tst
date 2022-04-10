import TextContent from "../components/TextContent";
// import { Button, FormControl, Select as MSelect, MenuItem, InputLabel } from "@mui/material";
// import { FileUploadOutlined } from "@mui/icons-material";
import { DatePicker, Select, Input, Upload, message, Button, Table, Tag, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";

import UploadIcon from "../assets/Upload Icon.svg";
import TrashcanIcn from "../assets/trash-delete-bin 1.svg";
import EditIcn from "../assets/edit-write-alt 1.svg";

const { Option } = Select;
const { TextArea } = Input;

const AddBillTabe = () => {
	// const data = [
	// 	{
	// 		key: '1',
	// 		name: 'John Brown',
	// 		age: 32,
	// 		address: 'New York No. 1 Lake Park',
	// 		tags: ['nice', 'developer'],
	// 	},
	// ];
	const columns = [
		{
			title: "Item",
			dataIndex: "item",
			key: "item",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Expense Category",
			dataIndex: "expenseCategory",
			key: "expenseCategory",
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Qty",
			key: "qty",
			dataIndex: "qty",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Price",
			key: "price",
			dataIndex: "price",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Tax",
			key: "tax",
			dataIndex: "tax",
			render: (text) => <a>{text}</a>,
		},
		{
			title: "Amount",
			key: "amount",
			dataIndex: "amount",
			render: (text) => <a>{text}</a>,
		},
	];

	return (
		<>
			{/* <Table columns={columns} dataSource={[]} /> */}
			<table className="table w-full table-fixed border-collapse shadow-lg bg-white">
				<thead>
					<tr>
						<th className="bg-blue-100 border text-left px-3 py-2">Item</th>
						<th>Expense Category</th>
						<th>Description</th>
						<th>Qty</th>
						<th>Price</th>
						<th>Tax</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border px-3 py-2">
							<Select className=" w-full" placeholder="Choose" onChange={() => {}}>
								<Option value="Garri">Garri</Option>
								<Option value="Semo">Semo</Option>
								<Option value="Amala">Amala</Option>
							</Select>
						</td>
						<td>
							<Select className=" w-full" placeholder="Choose" onChange={() => {}}>
								<Option value="Garri">Garri</Option>
								<Option value="Semo">Semo</Option>
								<Option value="Amala">Amala</Option>
							</Select>
						</td>
						<td>
							<Input placeholder="" />
						</td>
						<td>
							<Input type="number" placeholder="" />
						</td>
						<td>
							<Input type="number" placeholder="" />
						</td>
						<td>
							<div className="flex items-center">
								<Input placeholder="" />
								<img src={EditIcn} alt="edit" className="inline w-5  h-5 " />
							</div>
						</td>
						<td>
							<div className="flex items-center justify-between w-3/4 mx-auto">
								<span>N0.00</span>
								<img src={TrashcanIcn} alt="trash" className="inline w-5  h-5 " />
							</div>
						</td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td colSpan="2">
							<div className="flex flex-col">
								<div className="flex w-2/4 mx-auto justify-between">
									<span>Subtotal:</span>
									<span>N0.00</span>
								</div>
								<div className="flex  w-2/4 mx-auto justify-between">
									<span>Total (NGN):</span>
									<span>N0.00</span>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
export const AddBill = () => {
	const dateFormat = "YYYY-MM-DD";
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	return (
		<div>
			<div>
				<TextContent title="AddBill" block />
				{/* <FormControl sx={{ m: 1, minWidth: 120 }}>
					<div className="flex">
						<div>
							<MSelect
								value=""
								// sx={{
								// 	width: 120,
								// 	height: 30,
								// }}
								// MenuProps={MenuProps}
								onChange={() => {}}
								displayEmpty
								inputProps={{ "aria-label": "Without label" }}
							>
								<MenuItem value="">
									<em>Placeholder</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</MSelect>
						</div>
					</div>
				</FormControl> */}
				<div className="flex">
					{/* <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={()=>{}}>
        
          <Option key={province}>{province}</Option>
      </Select> */}
					<div className="w-1/3">
						<TextContent title="Vendor" block />
						<Select style={{ width: 200 }} placeholder="Choose" onChange={() => {}}>
							<Option value="Garri">Garri</Option>
							<Option value="Semo">Semo</Option>
							<Option value="Amala">Amala</Option>
						</Select>
					</div>
					<div className="w-1/3">
						<TextContent title="Date" block />
						<DatePicker placeholder="2015-06-06" style={{ width: 200 }} />
						{/* <TextArea
							// value={value}
							// onChange={this.onChange}
							// placeholder="Controlled autosize"
							autoSize={{
								// minRows: 3,
								maxRows: 5,
							}}
						/> */}
					</div>
					<div className="w-1/3">
						<TextContent title="Bill #" block />
						<TextArea
							// value={value}
							// onChange={this.onChange}
							// placeholder="Controlled autosize"
							autoSize={{
								// minRows: 3,
								maxRows: 5,
							}}
							style={{ width: 300 }}
						/>
					</div>
				</div>
				<div className="flex">
					{/* <div>
						<TextContent title="Upload Copy of Bill" block />
						<Button
							variant="outlined"
							size="small"
							component="label"
							sx={{
								// color: 'success.dark',
								width: 200,
								display: "flex",
								justifyContent: "space-between",
							}}
							endIcon={<FileUploadOutlined />}
						>
							Upload File
							<input type="file" hidden />
						</Button>
					</div> */}
					<div className="flex flex-col w-2/3">
						<div className="flex">
							<div className="w-1/2">
								<TextContent title="Currency" block />
								<Select style={{ width: 200 }} placeholder="USD - US Dolar" onChange={() => {}}>
									<Option value="Garri">Garri</Option>
									<Option value="Semo">Semo</Option>
									<Option value="Amala">Amala</Option>
								</Select>
							</div>
							<div className="w-1/2">
								<TextContent title="Due Date" block />
								<DatePicker placeholder="2015-06-06" style={{ width: 200 }} />
							</div>
						</div>
						<div className="flex">
							<div className="w-1/2">
								<TextContent title="Upload Copy of Bill" block />
								<Upload>
									<Button className="flex items-center justify-between" style={{ width: 200 }}>
										<span className="text-write-text3">Upload File</span> <UploadOutlined />
									</Button>
								</Upload>
							</div>
							<div className="w-1/2">
								<TextContent title="P.O / S.O" block />
								<TextArea
									// value={value}
									// onChange={this.onChange}
									// placeholder="Controlled autosize"
									autoSize={{
										// minRows: 3,
										maxRows: 5,
									}}
									style={{ width: 200 }}
								/>
							</div>
						</div>
					</div>
					<div className="w-1/3">
						<TextContent title="P.O / S.O" block />
						<TextArea
							// value={value}
							// onChange={this.onChange}
							// placeholder="Controlled autosize"
							autoSize={{
								minRows: 3,
								maxRows: 5,
							}}
							style={{ width: 300 }}
						/>
					</div>
				</div>
				<AddBillTabe />
				<div className="flex justify-end m-4">
					<button className="border rounded-md py-2 px-4 text-write-text3 m-1">Cancel</button>
					<button className="border rounded-md py-2 px-4 bg-light-blue text-write-white m-1">Save</button>
				</div>
			</div>
		</div>
	);
};
