import TextContent from "../components/TextContent";
import { DatePicker, Select, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TrashcanIcn from "../assets/trash-delete-bin 1.svg";
import EditIcn from "../assets/edit-write-alt 1.svg";

const { Option } = Select;
const { TextArea } = Input;

const AddBillTabe = () => {
	return (
		<>
			<table className="table w-full table-fixed border rounded-2xl bg-white mt-4">
				<thead>
					<tr>
						<th className="border-b-2 text-left mx-2 px-3 py-2">Item</th>
						<th className="border-b-2">Expense Category</th>
						<th className="border-b-2">Description</th>
						<th className="border-b-2" style={{ width: 90 }}>
							Qty
						</th>
						<th className="border-b-2" style={{ width: 90 }}>
							Price
						</th>
						<th className="border-b-2" style={{ width: 120 }}>
							Tax
						</th>
						<th className="border-b-2">Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border-b px-3 py-4">
							<Select className=" w-full" placeholder="Choose" onChange={() => {}}>
								<Option value="Garri">Garri</Option>
								<Option value="Semo">Semo</Option>
								<Option value="Amala">Amala</Option>
							</Select>
						</td>
						<td className="border-b px-3 py-4">
							<Select className=" w-full" placeholder="Choose" onChange={() => {}}>
								<Option value="Garri">Garri</Option>
								<Option value="Semo">Semo</Option>
								<Option value="Amala">Amala</Option>
							</Select>
						</td>
						<td className="border-b px-3 py-4">
							<Input placeholder="" />
						</td>
						<td className="border-b px-3 py-4">
							<div className="flex mx-auto w-3/4">
								<Input type="number" placeholder="" style={{ width: 50 }} />
							</div>
						</td>
						<td className="border-b px-3 py-4">
							<div className="flex mx-auto w-3/4">
								<Input type="number" placeholder="" style={{ width: 50 }} />
							</div>
						</td>
						<td className="border-b px-3 py-4">
							<div className="flex items-center justify-between w-5/6 mx-auto">
								<Input placeholder="" style={{ width: 50 }} />
								<img src={EditIcn} alt="edit" className="inline w-5  h-5 " />
							</div>
						</td>
						<td className="border-b px-3 py-4">
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
							<div className="flex flex-col py-2">
								<div className="flex w-2/4 mx-auto justify-between my-1">
									<div className="flex w-full justify-end">
										<TextContent
											title="Subtotal:"
											fontFamily="roboto"
											fontWeight="500"
											fontSize="13px"
											className="flex justify-end"
										/>
									</div>
									<div className="flex w-full justify-end">
										<TextContent title="N0.00" fontFamily="roboto" fontWeight="500" fontSize="13px" />
									</div>
								</div>
								<div className="flex w-2/4 mx-auto justify-between my-1">
									<div className="flex w-full justify-end">
										<TextContent
											title="Total (NGN):"
											fontFamily="roboto"
											fontWeight="500"
											fontSize="13px"
											className="flex justify-end"
										/>
									</div>
									<div className="flex w-full justify-end">
										<TextContent title="N0.00" fontFamily="roboto" fontWeight="500" fontSize="13px" />
									</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
const AddBill = () => {
	return (
		<div>
			<div>
				<TextContent title="Add bill" fontSize="26px" fontWeight="700" fontFamily="Inter" block />
				<div className="flex my-2">
					<div className="w-1/3">
						<TextContent title="Vendor" fontFamily="Inter" fontWeight="500" block />
						<Select style={{ width: 200 }} placeholder="Choose" onChange={() => {}}>
							<Option value="Garri">Garri</Option>
							<Option value="Semo">Semo</Option>
							<Option value="Amala">Amala</Option>
						</Select>
					</div>
					<div className="w-1/3">
						<TextContent title="Date" fontFamily="Inter" fontWeight="500" block />
						<DatePicker placeholder="2015-06-06" style={{ width: 200 }} />
					</div>
					<div className="w-1/3">
						<TextContent title="Bill #" fontFamily="Inter" fontWeight="500" block />
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
					<div className="flex flex-col w-2/3">
						<div className="flex my-2">
							<div className="w-1/2">
								<TextContent title="Currency" fontFamily="Inter" fontWeight="500" block />
								<Select style={{ width: 200 }} placeholder="USD - US Dolar" onChange={() => {}}>
									<Option value="Garri">Garri</Option>
									<Option value="Semo">Semo</Option>
									<Option value="Amala">Amala</Option>
								</Select>
							</div>
							<div className="w-1/2">
								<TextContent title="Due Date" fontFamily="Inter" fontWeight="500" block />
								<DatePicker placeholder="2015-06-06" style={{ width: 200 }} />
							</div>
						</div>
						<div className="flex my-2">
							<div className="w-1/2">
								<TextContent title="Upload Copy of Bill" fontFamily="Inter" fontWeight="500" block />
								<Upload>
									<Button className="flex items-center justify-between" style={{ width: 200 }}>
										<span className="text-write-text3">Upload File</span>{" "}
										<UploadOutlined className="text-write-text3" />
									</Button>
								</Upload>
							</div>
							<div className="w-1/2">
								<TextContent title="P.O / S.O" fontFamily="Inter" fontWeight="500" block />
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
					<div className="w-1/3 my-2">
						<TextContent title="Notes" fontFamily="Inter" fontWeight="500" block />
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
					<button onClick={() => {}} className="border border-write-text1 rounded-md py-3 px-6 text-write-text1 m-1">
						Cancel
					</button>
					<button type="submit" className="border rounded-md py-3 px-6 bg-light-blue text-write-white m-1">
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddBill;
