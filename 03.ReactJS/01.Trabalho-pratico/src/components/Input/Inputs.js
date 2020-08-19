import React, { Component } from 'react';
import { FormField, TextInput, Box } from 'grommet';
import { formatNumber } from '../../helpers/formatNumber';

export default class Inputs extends Component {
	handleInputChange = event => {
		let fullSalary = event.target.value;
		this.props.onChange(fullSalary);
	};
	
	formatter = value => {
		let formated = formatNumber(value);
		console.log(typeof formated)
		if (formated === 'NaN') return formated = 0;
		return formated;
	};

	render() {
		const {
			baseINSS,
			discountINSS,
			baseIRPF,
			discountIRPF,
			netSalary,
		} = this.props.calculations;

		return (
			<Box
				margin={{
					bottom: '10px',
					top: '20px',
					left: '30px',
					right: '30px',
				}}
				direction="column"
				animation={{
					type: 'slideRight',
					delay: 0,
					duration: 3000,
					size: 'large',
				}}
			>
				<FormField label="Salário Bruto">
					<TextInput type="number" onChange={this.handleInputChange} />
				</FormField>

				<Box direction="row" gap="medium">
					<FormField label="Base INSS" width="medium">
						<TextInput disabled={true} value={this.formatter(baseINSS)} />
					</FormField>

					<FormField label="Desconto INSS" width="medium">
						<TextInput disabled={true} value={this.formatter(discountINSS)} />
					</FormField>

					<FormField label="Base IRPF" width="medium">
						<TextInput disabled={true} value={this.formatter(baseIRPF)} />
					</FormField>

					<FormField label="Desconto IRPF" width="medium">
						<TextInput disabled={true} value={this.formatter(discountIRPF)} />
					</FormField>
				</Box>
				<FormField label="Salário líquido">
					<TextInput disabled={true} value={this.formatter(netSalary)} />
				</FormField>
			</Box>
		);
	}
}
