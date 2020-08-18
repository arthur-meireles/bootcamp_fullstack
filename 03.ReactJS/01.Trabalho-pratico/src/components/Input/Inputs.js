import React, { Component } from 'react';
import { FormField, TextInput, Box } from 'grommet';

export default class Inputs extends Component {
	render() {
		return (
			<Box margin={{ bottom: '10px' }} direction="column">
				<FormField label="Salário Bruto">
					<TextInput placeholder="Insira o salário bruto aqui..." />
				</FormField>

				<Box direction="row" gap="medium">
					<FormField label="Base INSS" width="medium">
						<TextInput />
					</FormField>

					<FormField label="Desconto INSS" width="medium">
						<TextInput />
					</FormField>

					<FormField label="Base IRPF" width="medium">
						<TextInput />
					</FormField>

					<FormField label="Desconto IRPF" width="medium">
						<TextInput />
					</FormField>
				</Box>
				<FormField label="Salário líquido">
					<TextInput />
				</FormField>
			</Box>
		);
	}
}
