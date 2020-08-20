import React, { Component } from 'react';
import { FormField, TextInput, Box } from 'grommet';
import { formatNumber } from '../../helpers/formatNumber';
import { percentageFrom } from '../../helpers/percentageHelper';
import { Currency } from 'grommet-icons';
import Bar from '../Bar/Bar.js';

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
		let percent = percentageFrom(salary, value);
		let formated = formatNumber(value);
		if (formated === 'NaN') return (formated = 0);
		const result = `R$ ${formated} (${percent}%)`;
		return result;
	};

	render() {
		const {
			baseINSS,
			discountINSS,
			baseIRPF,
			discountIRPF,
			netSalary,
		} = this.props.calculations;

		let bar1 = 0;
		let bar2 = 0;
		if (discountINSS > 0) {
			bar1 = (discountINSS / baseINSS) * 100;
			bar2 = (discountIRPF / baseINSS) * 100;
		} 

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
					type: 'slideLeft',
					delay: 0,
					duration: 2000,
					size: 'large',
				}}
			>
				<FormField label="Salário Bruto">
					<TextInput
						type="number"
						onChange={this.handleInputChange}
						color="#FFF"
						icon={<Currency />}
					/>
				</FormField>

				<Box direction="row" gap="medium">
					<FormField label="Base INSS" width="medium">
						<TextInput value={this.formatter(baseINSS)} />
					</FormField>

					<FormField label="Desconto INSS" width="medium">
						<TextInput
							value={this.formatterWithPercentage(discountINSS)}
							color="accent-4"
						/>
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
					<TextInput value={this.formatterWithPercentage(netSalary)} />
				</FormField>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Bar value={bar1} text="INSS" color="#e67e22" />
					<Bar value={bar2} text="IRPF" color="#c0392b" />
					<Bar value={100} text="Sálario Líquido" border={2} />
				</div>
			</Box>
		);
	}
}
