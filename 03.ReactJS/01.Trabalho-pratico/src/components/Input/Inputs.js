import React, { Component } from 'react';
import { FormField, TextInput, Box } from 'grommet';
import { formatNumber } from '../../helpers/formatNumber';
import { percentageFrom } from '../../helpers/percentageHelper';

export default class Inputs extends Component {
	handleInputChange = event => {
		let fullSalary = event.target.value;
		this.props.onChange(fullSalary);
	};
	formatter = value => {
		let formated = formatNumber(value);
		if (formated === 'NaN') return (formated = 0);
		return formated;
	};

	formatterWithPercentage = value => {
		const { salary } = this.props;
		let percentage = percentageFrom(salary, value);
		let formated = formatNumber(value);
		if (formated === 'NaN') return (formated = 0);
		const result = `R$ ${formated} (${percentage}%)`;
		return result;
	};

	render() {
		const {
			salary,
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
					duration: 800,
					size: 'large',
				}}
			>
				<FormField label="Salário Bruto">
					<TextInput
						type="number"
						onChange={this.handleInputChange}
						color="blue"
					/>
				</FormField>

				<Box direction="row" gap="medium">
					<FormField label="Base INSS" width="medium">
						<TextInput value={this.formatter(baseINSS)} />
					</FormField>

					<FormField label="Desconto INSS" width="medium">
						<TextInput value={this.formatterWithPercentage(discountINSS)} />
					</FormField>

					<FormField label="Base IRPF" width="medium">
						<TextInput value={this.formatter(baseIRPF)} />
					</FormField>

					<FormField label="Desconto IRPF" width="medium">
						<TextInput
							value={this.formatterWithPercentage(discountIRPF)}
							color="brand"
						/>
					</FormField>
				</Box>
				<FormField label="Salário líquido">
					<TextInput
						value={this.formatterWithPercentage(netSalary)}
					/>
				</FormField>
			</Box>
		);
	}
}
