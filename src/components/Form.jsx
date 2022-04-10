import React, { useState } from "react";
import { Form, Input, Button, Row, Radio } from "antd";

export const FormLayoutDemo = () => {
	const [form] = Form.useForm();
	const [formLayout, setFormLayout] = useState("vertical");

	const onFormLayoutChange = ({ layout }) => {
		setFormLayout(layout);
	};

	const formItemLayout =
		formLayout === "vertical"
			? {
					labelCol: {
						span: 4,
					},
					wrapperCol: {
						span: 14,
					},
			  }
			: null;
	const buttonItemLayout =
		formLayout === "vertical"
			? {
					wrapperCol: {
						span: 14,
						offset: 4,
					},
			  }
			: null;
	return (
		<Form
			{...formItemLayout}
			layout={formLayout}
			form={form}
			initialValues={{
				layout: formLayout,
			}}
			onValuesChange={onFormLayoutChange}
		>
			<Form.Item label="Form Layout" name="layout">
				<Radio.Group value={formLayout}>
					<Radio.Button value="horizontal">Horizontal</Radio.Button>
					<Radio.Button value="vertical">Vertical</Radio.Button>
					<Radio.Button value="inline">Inline</Radio.Button>
				</Radio.Group>
			</Form.Item>
			<div style={{ display: "flex" }}>
				<Form.Item label="Field A">
					<Input placeholder="input placeholder" />
				</Form.Item>
				<Form.Item label="Field B">
					<Input placeholder="input placeholder" />
				</Form.Item>
			</div>
			<Form.Item label="Field A">
				<Input placeholder="input placeholder" />
			</Form.Item>
			<Form.Item label="Field B">
				<Input placeholder="input placeholder" />
			</Form.Item>
			<Form.Item {...buttonItemLayout}>
				<Button type="primary">Submit</Button>
			</Form.Item>
		</Form>
	);
};
